import React from 'react';

import './createPost/addDetails/imageUpload/imgUpload.css';
import { OPEN_POST_MODAL } from '../actions/types';
import { connect, useDispatch } from 'react-redux';
import PostModal from './post/postModal/PostModal';

const Test = props => {
  const dispatch = useDispatch();
  return (
    <div>
      <PostModal />
      <button onClick={() => dispatch({ type: OPEN_POST_MODAL })}>Open</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    displayLocationForm: state.location.displayLocationForm
  };
};

export default connect(
  mapStateToProps,
  null
)(Test);
