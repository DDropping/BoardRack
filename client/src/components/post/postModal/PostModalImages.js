import React from 'react';

import './postModal.css';

const PostModalImages = ({ images }) => {
  return (
    <div className="br-post-modal-images-wrapper">
      <div>Images</div>
      <img style={{ maxWidth: '100%' }} alt="" src={images[0].default} />
    </div>
  );
};

export default PostModalImages;
