import React from 'react';

import './postModal.css';

const PostModalImages = ({ images }) => {
  return (
    <div className="br-post-modal-images-wrapper">
      <div className="br-post-modal-images">
        {images.map((image, index) => (
          <img
            style={{ maxWidth: '100%', marginBottom: '2px' }}
            key={index}
            alt=""
            src={image.default}
          />
        ))}
      </div>
    </div>
  );
};

export default PostModalImages;
