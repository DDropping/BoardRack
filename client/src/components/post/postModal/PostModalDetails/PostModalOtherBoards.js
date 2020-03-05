import React from 'react';

import PostModalOtherBoardsCard from './PostModalOtherBoardsCard';

const PostModalOtherBoards = ({ post }) => {
  return (
    <div>
      <div className="br-post-modal-details-title">People Also Viewed</div>
      <PostModalOtherBoardsCard />
    </div>
  );
};

export default PostModalOtherBoards;
