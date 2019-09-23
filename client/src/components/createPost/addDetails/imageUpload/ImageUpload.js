/**
 * Image upload component
 * - change icon to loading when loading
 */

import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Icon } from 'antd';

import './imgUpload.css';
import { uploadImage } from '../../../../actions/createPost/imageUpload';

const fileUploadHandler = event => {
  const fd = new FormData();
  fd.append('image', event.target.files[0], event.target.files[0].name);
  axios
    .post('api/upload', fd, {
      onUploadProgress: progressEvent => {
        console.log(
          'Upload Progress: ' +
            Math.round((progressEvent.loaded / progressEvent.total) * 100) +
            '%'
        );
      }
    })
    .then(res => {
      console.log(res);
    });
};

const ImageUpload = () => {
  return (
    <div className="upload-btn-wrapper">
      <button className="btn">
        {/**        <Icon type={this.state.loading ? 'loading' : 'plus'} />
         */}
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </button>
      <input type="file" onChange={fileUploadHandler} />
    </div>
  );
};

export default connect(
  null,
  { uploadImage }
)(ImageUpload);
