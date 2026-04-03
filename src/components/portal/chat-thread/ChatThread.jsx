import { useEffect, useRef } from 'react';
import { useAuth } from '../../../contexts/auth.context';
import './chat-thread.scss';

export default function ChatThread({ messages, loading }) {
  const { user } = useAuth();
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (loading) {
    return (
      <div className="chat-thread">
        {[1, 2, 3].map(i => (
          <div key={i} className={`chat-bubble chat-bubble--skeleton ${i % 2 === 0 ? 'chat-bubble--self' : ''}`}>
            <div className="skeleton-line" style={{ width: `${40 + i * 15}%` }} />
          </div>
        ))}
      </div>
    );
  }

  if (messages.length === 0) {
    return (
      <div className="chat-thread chat-thread--empty">
        <p>No messages yet. Start the conversation!</p>
      </div>
    );
  }

  return (
    <div className="chat-thread">
      {messages.map((msg, idx) => {
        const isSelf = msg.sender_id === user?.id;
        const showDate = idx === 0 || !sameDay(messages[idx - 1].created_at, msg.created_at);

        return (
          <div key={msg.id}>
            {showDate && (
              <div className="chat-thread__date-divider">
                <span>{formatDateLabel(msg.created_at)}</span>
              </div>
            )}
            <div className={`chat-bubble ${isSelf ? 'chat-bubble--self' : 'chat-bubble--other'}`}>
              {!isSelf && (
                <span className="chat-bubble__sender">
                  {msg.profiles?.full_name || 'Hekatek'}
                </span>
              )}
              <p className="chat-bubble__content">{msg.content}</p>
              <span className="chat-bubble__time">{formatTime(msg.created_at)}</span>
            </div>
          </div>
        );
      })}
      <div ref={bottomRef} />
    </div>
  );
}

function sameDay(a, b) {
  const da = new Date(a); const db = new Date(b);
  return da.toDateString() === db.toDateString();
}

function formatDateLabel(dateStr) {
  const d = new Date(dateStr);
  const today = new Date();
  if (d.toDateString() === today.toDateString()) return 'Today';
  const yesterday = new Date(today); yesterday.setDate(today.getDate() - 1);
  if (d.toDateString() === yesterday.toDateString()) return 'Yesterday';
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function formatTime(dateStr) {
  return new Date(dateStr).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
}
