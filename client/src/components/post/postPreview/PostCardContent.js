import React from 'react';
import { Typography } from 'antd';

import '../post.css';
const { Title } = Typography;

const PostCardContent = () => {
  return (
    <div className="br-post-card-content">
      <h3>Surfboard for sale</h3>
      6'2" - 19 3/4" - 2 3/8"
    </div>
  );
};

export default PostCardContent;
