/**
 * Image upload component
 * - change icon to loading when loading
 */

import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';

import './imgUpload.css';
import { uploadImage } from '../../../../actions/createPost/imageUpload';

class ImageUploadButton extends React.Component {
  handleChange(file) {
    this.props.uploadImage(this.props.imgKey, file);
  }

  render() {
    return (
      <div
        className="upload-btn-wrapper"
        style={{
          display: 'inline-block'
        }}
      >
        <button className="btn">
          <Icon type={this.props.isLoading ? 'loading' : 'plus'} />

          <div className="ant-upload-text">Upload</div>
        </button>
        <input
          type="file"
          onChange={event => this.handleChange(event.target.files[0])}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.imgUpload.isLoading,
    imgKey: state.imgUpload.imgKey
  };
};

export default connect(
  mapStateToProps,
  { uploadImage }
)(ImageUploadButton);
