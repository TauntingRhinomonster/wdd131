import React, { useState, useEffect } from 'react';
import posts from '../database.js';

function shuffleArray(array) {
  // Fisher-Yates shuffle to randomize posts
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function Media() {
  const [shuffledPosts, setShuffledPosts] = useState([]);

  useEffect(() => {
    setShuffledPosts(shuffleArray(posts));
  }, []);

  // Track likes per post (simple local state)
  const [likes, setLikes] = useState({});

  const handleLike = (id) => {
    setLikes(prev => ({
      ...prev,
      [id]: prev[id] ? prev[id] + 1 : 1,
    }));
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      {shuffledPosts.map(post => (
        <div
          key={post.id}
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '1rem',
            marginBottom: '1rem',
          }}
        >
          <img
            src={post.image}
            alt="Social media post"
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <p>{post.caption}</p>
          <button onClick={() => handleLike(post.id)}>
            Like {likes[post.id] || 0}
          </button>
          <button style={{ marginLeft: '1rem' }} onClick={() => alert('Comment clicked!')}>
            Comment
          </button>
        </div>
      ))}
    </div>
  );
}

export default Media;
