import React from 'react';

import './postModal.css';

const PostModalImages = ({ images }) => {
  return (
    <div className="br-post-modal-images-wrapper">
      <div>Images</div>
      <img className="br-post-card-img" alt="" src={images[0].default} />
    </div>
  );
};

export default PostModalImages;
