import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';

import './imgUpload.css';
import { uploadImage } from '../../../../actions/createPost/imageUpload';

const ImageUploadButton = props => {
  const handleChange = file => {
    props.uploadImage(props.imgKey, file);
  };

  return (
    <div
      className="upload-btn-wrapper"
      style={{
        display: 'inline-block',
        verticalAlign: 'top',
        marginBottom: '10px',
        marginRight: '10px'
      }}
    >
      <button className="btn" style={{ width: '150px', height: '200px' }}>
        <Icon type={props.isLoading ? 'loading' : 'plus'} />

        <div className="ant-upload-text">Upload {props.imgList.length}/8</div>
      </button>
      {props.imgList.length < 8 && (
        <input
          type="file"
          onChange={event => handleChange(event.target.files[0])}
        />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    imgKey: state.imgUpload.imgKey,
    imgList: state.imgUpload.imgList
  };
};

export default connect(
  mapStateToProps,
  { uploadImage }
)(ImageUploadButton);
