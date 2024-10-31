import React, { useState } from 'react';
import { addKudos } from '../api';

const Kudos = () => {
  const [recipientId, setRecipientId] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addKudos({ recipientId, message });
      setFeedback('Kudos sent successfully!');
    } catch (error) {
      setFeedback('Failed to send kudos.');
    }
  };

  return (
    <div>
      <h2>Give Kudos</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={recipientId}
          onChange={(e) => setRecipientId(e.target.value)}
          placeholder="Recipient User ID"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your kudos message"
          required
        />
        <button type="submit">Send Kudos</button>
      </form>
      {feedback && <p>{feedback}</p>}
    </div>
  );
};

export default Kudos;
