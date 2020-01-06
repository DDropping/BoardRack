import React from 'react';
import { Row, Col } from 'antd';

import './postModal.css';
import PostModalUserBox from './PostModalUserBox';

const PostModalDetails = ({ post }) => {
  console.log(post);
  return (
    <div className="br-post-modal-details-wrapper">
      <PostModalUserBox user={post.user} location={post.location} />
      <div className="br-post-modal-details">
        <div className="br-post-modal-details-title">General Details</div>
        <Row>
          <Col className="br-post-modal-details-item" span={12}>
            <div>{post.shaper && 'Shaper: '}</div>
            <div>{post.model && 'Model: '}</div>
            <div>{post.boardType && 'Board Type: '}</div>
            <div>{post.condition && 'Condition: '}</div>
            <div>{post.tail && 'tail: '}</div>
            <div>
              {post.finSystem && post.finConfiguration && 'Fin System: '}
            </div>
            <div>{post.construction && 'Construction: '}</div>
            <div>{post.glassing && 'Glassing: '}</div>
            <div>{post.contour && 'Contour: '}</div>
          </Col>
          <Col className="br-post-modal-details-item-ans" span={12}>
            <div>{post.shaper && post.shaper}</div>
            <div>{post.model && post.model}</div>
            <div>{post.boardType && post.boardType}</div>
            <div>{post.condition && post.condition}</div>
            <div>{post.tail && post.tail}</div>
            <div>
              {post.finSystem &&
                post.finConfiguration &&
                post.finSystem + ' ' + post.finConfiguration}
            </div>
            <div>{post.construction && post.construction}</div>
            <div>{post.glassing && post.glassing}</div>
            <div>{post.contour && post.contour}</div>
          </Col>
        </Row>
        <br />

        <div className="br-post-modal-details-title">Dimensions</div>
        <Col className="br-post-modal-details-item" span={12}>
          <div>{post.lengthFt && post.lengthIn && 'Length: '}</div>
          <div>{post.width && 'Width: '}</div>
          <div>{post.depth && 'Depth: '}</div>
          <div>{post.volume && 'Volume: '}</div>
        </Col>
        <Col className="br-post-modal-details-item-ans" span={12}>
          <div>
            {post.lengthFt &&
              post.lengthIn &&
              post.lengthFt + "' " + post.lengthIn + '"'}
          </div>
          <div>{post.width && post.width + '"'}</div>
          <div>{post.depth && post.depth + '"'}</div>
          <div>{post.volume && post.volume + ' L'}</div>
        </Col>
        <br />

        <div className="br-post-modal-details-title">Description</div>
        <div>{post.description && post.description}</div>
        <br />

        <div className="br-post-modal-details-title">Surfer's Opinion</div>
        <Col span={12}>
          <div>{post.waveSize && 'waveSize: ' + post.waveSize + '/5'}</div>
          <div>{post.drive && 'drive: ' + post.drive + '/5'}</div>
        </Col>
        <Col span={12}>
          <div>
            {post.paddlePower && 'paddlePower: ' + post.paddlePower + '/5'}
          </div>
          <div>
            {post.movability && 'movability: ' + post.movability + '/5'}
          </div>
        </Col>
      </div>
    </div>
  );
};
export default PostModalDetails;
