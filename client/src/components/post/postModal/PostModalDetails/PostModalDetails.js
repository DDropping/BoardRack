import React from 'react';
import { Row, Col } from 'antd';

import '../postModal.css';
import PostModalUserBox from './PostModalUserBox';
import PostModalMap from './PostModalMap';
import PostModalOtherBoards from './PostModalOtherBoards';
import PostModalFooter from './PostModalFooter';

const PostModalDetails = ({ post }) => {
  console.log(post);
  return (
    <div className="br-post-modal-details-wrapper">
      {/* USER INFORMATION BOX*/}
      <PostModalUserBox user={post.user} location={post.location} />
      <br />

      {/* TIME VIEWS FAVORITES */}
      <div className="br-post-modal-timeViewsFavorites">
        <Row>
          <Col style={{ textAlign: 'center' }} span={8}>
            <div>Listed</div>
            <strong>2 days</strong>
          </Col>
          <Col style={{ textAlign: 'center' }} span={8}>
            <div>Views</div>
            <strong>{post.viewCount}</strong>
          </Col>
          <Col style={{ textAlign: 'center' }} span={8}>
            <div>Favorites</div>
            <strong>{post.favorites.length}</strong>
          </Col>
        </Row>
      </div>
      <div className="br-post-modal-timeViewsFavorites-border-bottom" />
      <br />

      {/* DESCRIPTION */}
      {post.description && (
        <Row>
          <Col span={1} />
          <Col span={23}>
            <div>
              <strong>{post.description && post.description}</strong>
            </div>
          </Col>
        </Row>
      )}
      {post.description && <br />}

      {/* MAP */}
      <PostModalMap map={post.location.locationImage} />
      <br />

      {/* DETAILS */}
      {(post.shaper ||
        post.model ||
        post.boardType ||
        post.condition ||
        post.tail ||
        post.finSystem ||
        post.finConfiguration ||
        post.construction ||
        post.glassing ||
        post.contour) && (
        <div className="br-post-modal-detail-box-outline">
          <div className="br-post-modal-details-title">General Details</div>
          <Row>
            <Col span={1} />
            <Col
              className="br-post-modal-details-item"
              xs={11}
              sm={9}
              md={7}
              lg={7}
            >
              <div>{post.shaper && 'Shaper: '}</div>
              <div>{post.model && 'Model: '}</div>
              <div>{post.boardType && 'Board Type: '}</div>
              <div>{post.condition && 'Condition: '}</div>
              <div>{post.tail && 'tail: '}</div>
              <div>
                {(post.finSystem || post.finConfiguration) && 'Fin System: '}
              </div>
              <div>{post.construction && 'Construction: '}</div>
              <div>{post.glassing && 'Glassing: '}</div>
              <div>{post.contour && 'Contour: '}</div>
            </Col>
            <Col
              className="br-post-modal-details-item-ans"
              xs={12}
              sm={14}
              md={16}
              lg={16}
            >
              <div>{post.shaper && post.shaper}</div>
              <div>{post.model && post.model}</div>
              <div>{post.boardType && post.boardType}</div>
              <div>{post.condition && post.condition}</div>
              <div>{post.tail && post.tail}</div>
              <div>
                {post.finSystem && post.finSystem + ' '}
                {post.finConfiguration && '(' + post.finConfiguration + ')'}
              </div>
              <div>{post.construction && post.construction}</div>
              <div>{post.glassing && post.glassing}</div>
              <div>{post.contour && post.contour}</div>
            </Col>
          </Row>
        </div>
      )}
      {(post.shaper ||
        post.model ||
        post.boardType ||
        post.condition ||
        post.tail ||
        post.finSystem ||
        post.finConfiguration ||
        post.construction ||
        post.glassing ||
        post.contour) && <br />}

      {/* DIMENSIONS */}
      {(post.lengthFt ||
        post.lengthIn ||
        post.width ||
        post.depth ||
        post.volume) && (
        <div className="br-post-modal-detail-box-outline">
          <div className="br-post-modal-details-title">Dimensions</div>
          <Row>
            <Col span={1} />
            <Col
              className="br-post-modal-details-item"
              xs={11}
              sm={9}
              md={7}
              lg={7}
            >
              <div>{post.lengthFt && post.lengthIn && 'Length: '}</div>
              <div>{post.width && 'Width: '}</div>
              <div>{post.depth && 'Depth: '}</div>
              <div>{post.volume && 'Volume: '}</div>
            </Col>
            <Col
              className="br-post-modal-details-item-ans"
              xs={12}
              sm={14}
              md={16}
              lg={16}
            >
              <div>
                {post.lengthFt && post.lengthFt + "' "}
                {post.lengthIn && post.lengthIn + '"'}
              </div>
              <div>{post.width && post.width + '"'}</div>
              <div>{post.depth && post.depth + '"'}</div>
              <div>{post.volume && post.volume + ' L'}</div>
            </Col>
          </Row>
        </div>
      )}
      {(post.lengthFt ||
        post.lengthIn ||
        post.width ||
        post.depth ||
        post.volume) && <br />}

      {/* SURFERS OPINION */}
      {(post.waveSize || post.drive || post.paddlePower || post.movability) && (
        <div className="br-post-modal-detail-box-outline">
          <div className="br-post-modal-details-title">Surfer's Opinion</div>
          <Row>
            <Col span={1} />
            <Col span={11}>
              <div>
                {post.waveSize && 'Wave Size: '}
                <strong>{post.waveSize && post.waveSize + ' ft'}</strong>
              </div>
              <div>
                {post.drive && 'Drive & Speed: '}
                <strong>{post.drive && post.drive + '/5'}</strong>
              </div>
            </Col>
            <Col span={12}>
              <div>
                {post.paddlePower && 'Paddle Power: '}
                <strong>{post.paddlePower && post.paddlePower + '/5'}</strong>
              </div>
              <div>
                {post.movability && 'Movability: '}
                <strong>{post.movability && post.movability + '/5'}</strong>
              </div>
            </Col>
          </Row>
        </div>
      )}
      {(post.waveSize || post.drive || post.paddlePower || post.movability) && (
        <br />
      )}
      <PostModalOtherBoards />
      <PostModalFooter />
    </div>
  );
};
export default PostModalDetails;
