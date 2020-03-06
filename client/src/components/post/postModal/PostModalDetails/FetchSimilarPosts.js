import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PostModalSimilarPostCard from './PostModalSimilarPostCard';

function FetchSimilarPosts({ postId }) {
  const [similarPosts, setSimilarPosts] = useState([]);

  useEffect(() => {
    const fetchSimilarPosts = async () => {
      const result = await axios.get(`api/posts/similarPosts/${postId}`);
      setSimilarPosts(result.data);
    };
    fetchSimilarPosts();
  }, []);

  return (
    <div>
      <div className="br-post-modal-details-title">People also viewed</div>
      {similarPosts.map((post, index) => (
        <PostModalSimilarPostCard post={post} key={index} />
      ))}
    </div>
  );
}

export default FetchSimilarPosts;
