import React from 'react';
import { Card } from 'antd';
import { useDispatch } from 'react-redux';

import '../post.css';
import { OPEN_POST_MODAL } from '../../../actions/types';
const { Meta } = Card;

const PostPreview = () => {
  const dispatch = useDispatch();
  return (
    <div className="br-post-preview-card">
      <Card
        onClick={() => dispatch({ type: OPEN_POST_MODAL })}
        hoverable
        cover={
          <img
            alt="example"
            src="https://cdn10.bigcommerce.com/s-baaesh4/products/240/images/1198/sd-deck__12993.1516652995.1280.1280__38990.1523919633.1280.1280.jpg?c=2"
          />
        }
      >
        <Meta title="Rusty SD" description="6'2 x 19 1/4 x 2 3/8" />
      </Card>
    </div>
  );
};

export default PostPreview;
