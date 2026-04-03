import { useState, useRef } from 'react';
import './message-input.scss';

export default function MessageInput({ onSend, disabled }) {
  const [text, setText] = useState('');
  const textareaRef = useRef(null);

  const handleSubmit = () => {
    const trimmed = text.trim();
    if (!trimmed || disabled) return;

    onSend(trimmed);
    setText('');

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleInput = () => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = Math.min(el.scrollHeight, 120) + 'px';
    }
  };

  return (
    <div className="message-input">
      <textarea
        ref={textareaRef}
        className="message-input__textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        onInput={handleInput}
        placeholder="Type a message..."
        rows={1}
        disabled={disabled}
      />
      <button
        className="message-input__send"
        onClick={handleSubmit}
        disabled={!text.trim() || disabled}
        aria-label="Send message"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </button>
    </div>
  );
}
