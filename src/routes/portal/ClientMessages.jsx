import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../contexts/auth.context';
import ChatThread from '../../components/portal/chat-thread/ChatThread';
import MessageInput from '../../components/portal/message-input/MessageInput';
import './client-messages.scss';

export default function ClientMessages() {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [projectId, setProjectId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  // Fetch project and messages
  useEffect(() => {
    async function init() {
      const { data: project } = await supabase
        .from('projects')
        .select('id')
        .limit(1)
        .single();

      if (!project) { setLoading(false); return; }
      setProjectId(project.id);

      const { data } = await supabase
        .from('messages')
        .select('*, profiles(full_name)')
        .eq('project_id', project.id)
        .order('created_at');

      setMessages(data || []);
      setLoading(false);
    }
    init();
  }, []);

  // Subscribe to realtime messages
  useEffect(() => {
    if (!projectId) return;

    const channel = supabase
      .channel(`messages:${projectId}`)
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'messages', filter: `project_id=eq.${projectId}` },
        async (payload) => {
          // Fetch the full message with profile join
          const { data } = await supabase
            .from('messages')
            .select('*, profiles(full_name)')
            .eq('id', payload.new.id)
            .single();

          if (data) {
            setMessages(prev => [...prev, data]);
          }
        }
      )
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [projectId]);

  const handleSend = async (content) => {
    if (!projectId || !user) return;
    setSending(true);

    try {
      await supabase.from('messages').insert({
        project_id: projectId,
        sender_id: user.id,
        content,
      });
    } catch (err) {
      console.error('Send failed:', err);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="client-messages">
      <div className="client-messages__header">
        <h2>Messages</h2>
      </div>
      <div className="client-messages__container portal-card portal-card--flush">
        <ChatThread messages={messages} loading={loading} />
        <MessageInput onSend={handleSend} disabled={sending || !projectId} />
      </div>
    </div>
  );
}
