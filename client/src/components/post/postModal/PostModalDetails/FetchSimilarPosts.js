import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PostModalSimilarPostCard from './PostModalSimilarPostCard';

function FetchSimilarPosts({ postId }) {
  console.log(postId);

  const [similarPosts, setSimilarPosts] = useState([]);

  useEffect(() => {
    const fetchSimilarPosts = async () => {
      const result = await axios.get(`api/posts/similarPosts/${postId}`);
      console.log(result);
      setSimilarPosts(result.data);
    };
    fetchSimilarPosts();
  }, []);

  return (
    <div>
      {similarPosts.map(post => (
        <PostModalSimilarPostCard post={post} />
      ))}
    </div>
  );
}

export default FetchSimilarPosts;
