import React from 'react';
import { useSelector } from 'react-redux';

import './createPost.css';
import PostSteps from './PostSteps';
import AddDetails from './addDetails/AddDetails';
import AdditionalDetails from './additionalDetails/AdditionalDetails';
import ConfirmPost from './confirmPost/ConfirmPost';
import CreatePostButtons from './CreatePostButtons';
import { Redirect } from 'react-router-dom';

const CreatePost = () => {
  const redirectToHome = useSelector(state => state.createPost.redirectToHome);
  const isStepOneVisible = useSelector(
    state => state.postSteps.isStepOneVisible
  );
  const isStepTwoVisible = useSelector(
    state => state.postSteps.isStepTwoVisible
  );
  const isStepThreeVisible = useSelector(
    state => state.postSteps.isStepThreeVisible
  );

  return (
    <div className="wrapperCreatePost">
      <div className="showSteps">
        <PostSteps />
      </div>
      {redirectToHome && <Redirect push to="/" />}
      {isStepOneVisible && <AddDetails />}
      {isStepTwoVisible && <AdditionalDetails />}
      {isStepThreeVisible && <ConfirmPost />}

      <CreatePostButtons />
    </div>
  );
};

export default CreatePost;
