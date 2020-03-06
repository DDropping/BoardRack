import React from 'react';

import './postThumb.css';
import ConditionTag from '../ConditionTag';
import Dimensions from '../Dimensions';
import FavoriteCounter from '../FavoriteCounter';
import ViewCounter from '../ViewCounter';

const PostThumbDetails = ({ post, isFavorite, setIsFavorite }) => {
  return (
    <div className="br-postThumb-details">
      <div
        style={{
          fontSize: '20px',
          display: 'inline-block',
          width: 'calc(100% - 125px)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}
      >
        <strong>{'$' + post.price + ' ' + post.title}</strong>
      </div>
      <div
        style={{
          display: 'inline-block',
          float: 'right'
        }}
      >
        <ViewCounter viewCount={post.viewCount} />
        <FavoriteCounter
          favorites={post.favorites}
          isFavorite={isFavorite}
          setIsFavorite={setIsFavorite}
          _id={post._id}
        />
      </div>

      <ConditionTag condition={post.condition} />
      <Dimensions
        lengthFt={post.lengthFt ? post.lengthFt : null}
        lengthIn={post.lengthIn ? post.lengthIn : null}
        width={post.width ? post.width : null}
        depth={post.depth ? post.depth : null}
        volume={post.volume ? post.volume : null}
      />
      <div style={{ position: 'absolute', bottom: '20px' }}>
        {post.location.city + ', ' + post.location.state}
      </div>
    </div>
  );
};

export default PostThumbDetails;
