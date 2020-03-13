import React from 'react';

import './postModal.css';

const PostModalImages = ({ images }) => {
  {
    images[0] ? console.log('image found') : console.log('image not found');
  }
  return (
    <div className="br-post-modal-images-wrapper">
      <div className="br-post-modal-images">
        {images[0] &&
          images.map((image, index) => (
            <img
              style={{ width: '100%', marginBottom: '2px' }}
              key={index}
              alt=""
              src={image.default}
            />
          ))}

        {!images[0] && (
          <img
            style={{ width: '100%', marginBottom: '2px' }}
            alt="surfboard placeholder"
            src={
              process.env.PUBLIC_URL + '/images/br-placeholder-shortboard.png'
            }
          />
        )}
      </div>
    </div>
  );
};

export default PostModalImages;
