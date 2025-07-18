import React, { useState, useEffect } from 'react';
import posts from '../database.js';

function Media() {
  // Track likes per post (simple local state)
  const [likes, setLikes] = useState({});

  const handleLike = (id) => {
    setLikes(prev => ({
      ...prev,
      [id]: prev[id] ? prev[id] + 1 : 1,
    }));
  };

  return (
      <div className='postDisplay' style={{ maxWidth: '600px'}}>
        {posts.map(post => (
          <div className='post' key={post.id}>
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
