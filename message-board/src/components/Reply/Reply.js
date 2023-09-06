import React, { useState } from 'react';
import './Reply.css';

const Reply = ({ threadId }) => {
  const [replyContent, setReplyContent] = useState('');

  const handleReplySubmit = (e) => {
    e.preventDefault();
    // For now, log the reply to the console.
    // In a real-world application, you'd send this to your server.
    console.log(`Reply to Thread ${threadId}: ${replyContent}`);
    setReplyContent('');
  };

  return (
    <div className="reply">
      <form onSubmit={handleReplySubmit}>
        <textarea
          placeholder="Your reply..."
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
        ></textarea>
        <button type="submit">Submit Reply</button>
      </form>
    </div>
  );
};

export default Reply;
