import React from 'react';
import { Link } from 'react-router-dom';
//import { useSelector, useDispatch } from 'react-redux';

const Test = props => {
  // const dispatch = useDispatch();
  // const posts = useSelector(state => state.post.postList);

  return (
    <div>
      <div>Test Page</div>
      <Link to="/">
        <div style={{ width: '60px' }}>
          <img
            style={{ maxHeight: '100%', maxWidth: '100%' }}
            alt="br-logo-desktop"
            src={process.env.PUBLIC_URL + '/images/br_logo_small.png'}
          />
        </div>
      </Link>
    </div>
  );
};

export default Test;
