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

class ImageUpload extends React.Component {
  render() {
    return (
      <div className="upload-btn-wrapper">
        <button className="btn">
          {/**        <Icon type={this.state.loading ? 'loading' : 'plus'} />
           */}
          <Icon type="plus" />
          <div className="ant-upload-text">Upload</div>
        </button>
        <input
          type="file"
          onChange={event => this.props.uploadImage(event.target.files[0])}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { uploadImage }
)(ImageUpload);
