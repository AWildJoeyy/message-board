import React from 'react';
import './ThreadList.css';

const ThreadList = () => {
  const threads = [
    { id: 1, title: 'First Thread', content: 'This is the first thread.' },
    { id: 2, title: 'Second Thread', content: 'This is the second thread.' },
    // Add more hardcoded threads for now
  ];

  return (
    <div>
      <h1>Threads</h1>
      <ul>
        {threads.map(thread => (
          <li key={thread.id}>
            <a href={`/thread/${thread.id}`}>{thread.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThreadList;
