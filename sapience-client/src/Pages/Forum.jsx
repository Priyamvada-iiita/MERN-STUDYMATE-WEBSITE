import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data } = await axios.get('/api/forum');
    setPosts(data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!message) return;
    await axios.post('/api/forum', { username: 'User123', userId: '12345', message });
    setMessage('');
    fetchPosts();
  };

  return (
    <div>
      <h1>Forum</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Post</button>
      </form>
      <ul>
        {posts.map(post => (
          <li key={post._id}>{post.message} by <a href={`/users/${post.userId}`}>{post.username}</a> on {new Date(post.createdAt).toLocaleDateString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default Forum;
