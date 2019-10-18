import React from 'react';
import { Card } from 'antd';
import { useDispatch } from 'react-redux';

import '../post.css';
import { OPEN_POST_MODAL } from '../../../actions/types';
import { selectPost } from '../../../actions/post/post';
const { Meta } = Card;

const PostPreview = post => {
  const dispatch = useDispatch();
  console.log(post.post);
  return (
    <div className="br-post-preview-card">
      <Card
        onClick={() => dispatch(selectPost(post))}
        hoverable
        cover={<img alt="example" src={post.post.images[0].thumbnail} />}
      >
        <Meta
          title={'$' + post.post.price + ' ' + post.post.title}
          description="6'2 x 19 1/4 x 2 3/8"
        />
      </Card>
    </div>
  );
};

export default PostPreview;
