import React, { useState } from 'react';

function Forum() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const handleSend = () => {
    setMessages([...messages, message]);
    setMessage('');
  };

  return (
    <div>
      <h2>Forum</h2>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default Forum;
