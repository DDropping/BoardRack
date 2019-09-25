import React from 'react';
import { Card, Icon } from 'antd';
import { connect } from 'react-redux';

import { deleteImagePreview } from '../../../../actions/createPost/imageUpload';

const PreviewImage = props => {
  return (
    <Card
      style={{
        width: '150px',
        height: '200px',
        backgroundColor: '#f3f7f9',
        marginBottom: '10px',
        marginRight: '10px',
        display: 'inline-block',
        lineHeight: '150px'
      }}
      hoverable={true}
      bodyStyle={{ padding: 0 }}
      cover={
        <div style={{ width: 150, height: 150, textAlign: 'center' }}>
          <img
            style={{
              maxWidth: '146px',
              maxHeight: '146px',
              verticalAlign: 'middle',
              margin: ' 0 auto',
              position: 'relative',
              right: '1px' /*fix antd-card-border offset by 1 px*/
            }}
            alt="surfboard"
            src={props.previewObjectUrl}
          />
        </div>
      }
      actions={[
        <Icon type="star" key="star" />,
        <Icon type="delete" key="delete" onClick={props.deleteImagePreview} />
      ]}
    ></Card>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.imgUpload.imgLoading
  };
};

export default connect(
  mapStateToProps,
  { deleteImagePreview }
)(PreviewImage);
