import React from 'react';
import './ThreadDetail.css';

const ThreadDetail = ({ match }) => {
  // Fetch the thread by ID (hardcoded for now)
  const thread = {
    id: match.params.id,
    title: 'Sample Thread',
    content: 'Sample content.',
    replies: ['Reply 1', 'Reply 2']
  };

  return (
    <div>
      <h1>{thread.title}</h1>
      <p>{thread.content}</p>
      <ul>
        {thread.replies.map((reply, index) => (
          <li key={index}>{reply}</li>
        ))}
      </ul>
    </div>
  );
};

export default ThreadDetail;
