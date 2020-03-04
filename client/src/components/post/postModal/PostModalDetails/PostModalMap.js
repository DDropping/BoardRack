import React from 'react';

const PostModalMap = ({ map }) => {
  return (
    <div className="br-post-modal-map-wrapper">
      <div className="br-post-modal-map">
        <img style={{ maxWidth: '100%' }} alt="location map" src={map} />
      </div>
    </div>
  );
};

export default PostModalMap;
