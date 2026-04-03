import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../contexts/auth.context';
import ChatThread from '../../components/portal/chat-thread/ChatThread';
import MessageInput from '../../components/portal/message-input/MessageInput';
import './admin-feature-pages.scss';

export default function AdminMessages() {
  const { user } = useAuth();
  const [threads, setThreads] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [messagesLoading, setMessagesLoading] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    async function fetchThreads() {
      const { data } = await supabase
        .from('projects')
        .select('id, name, profiles(full_name), messages(id, content, created_at)')
        .order('created_at', { ascending: false });

      const withLastMsg = (data || []).map(p => ({
        ...p,
        lastMessage: p.messages?.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0] || null,
        unread: 0,
      }));

      setThreads(withLastMsg);
      setLoading(false);
    }
    fetchThreads();
  }, []);

  async function loadThread(projectId) {
    setSelectedProject(projectId);
    setMessagesLoading(true);
    const { data } = await supabase
      .from('messages')
      .select('*, profiles(full_name)')
      .eq('project_id', projectId)
      .order('created_at');
    setMessages(data || []);
    setMessagesLoading(false);
  }

  // Realtime for selected thread
  useEffect(() => {
    if (!selectedProject) return;
    const channel = supabase
      .channel(`admin-msgs:${selectedProject}`)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages', filter: `project_id=eq.${selectedProject}` },
        async (payload) => {
          const { data } = await supabase.from('messages').select('*, profiles(full_name)').eq('id', payload.new.id).single();
          if (data) setMessages(prev => [...prev, data]);
        })
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [selectedProject]);

  const handleSend = async (content) => {
    if (!selectedProject || !user) return;
    setSending(true);
    try {
      await supabase.from('messages').insert({ project_id: selectedProject, sender_id: user.id, content });
    } catch (err) {
      console.error('Send failed:', err);
    } finally {
      setSending(false);
    }
  };

  if (loading) return <div className="admin-feature-page"><h2>Messages</h2></div>;

  return (
    <div className="admin-feature-page admin-messages">
      <h2>Messages</h2>

      <div className="admin-messages__split">
        <div className="admin-messages__thread-list">
          {threads.map(t => (
            <button
              key={t.id}
              className={`admin-messages__thread ${selectedProject === t.id ? 'admin-messages__thread--active' : ''}`}
              onClick={() => loadThread(t.id)}
            >
              <div className="portal-avatar portal-avatar--sm">
                {(t.profiles?.full_name || '??').slice(0, 2).toUpperCase()}
              </div>
              <div className="admin-messages__thread-info">
                <span className="admin-messages__thread-name">{t.profiles?.full_name || 'Unnamed'}</span>
                <span className="admin-messages__thread-preview">
                  {t.lastMessage?.content?.slice(0, 50) || 'No messages'}
                  {t.lastMessage?.content?.length > 50 ? '...' : ''}
                </span>
              </div>
            </button>
          ))}
          {threads.length === 0 && <p className="admin-feature-page__empty-text">No message threads</p>}
        </div>

        <div className="admin-messages__chat">
          {!selectedProject ? (
            <div className="admin-feature-page__select-prompt"><p>Select a conversation</p></div>
          ) : (
            <div className="admin-messages__chat-container portal-card portal-card--flush">
              <ChatThread messages={messages} loading={messagesLoading} />
              <MessageInput onSend={handleSend} disabled={sending} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
