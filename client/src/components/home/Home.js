import React from 'react';
import { connect } from 'react-redux';

import Post from '../post/Post';

const Home = props => {
  return (
    <div>
      <div>Home Page</div>
      <Post />
    </div>
  );
};

export default connect(
  null,
  null
)(Home);
