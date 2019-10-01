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
          display: 'inline-block',
          verticalAlign: 'top',
          marginBottom: '10px',
          marginRight: '10px'
        }}
      >
        <button className="btn" style={{ width: '150px', height: '200px' }}>
          <Icon type={this.props.isLoading ? 'loading' : 'plus'} />

          <div className="ant-upload-text">
            Upload {this.props.imgList.length}/8
          </div>
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
    imgKey: state.imgUpload.imgKey,
    imgList: state.imgUpload.imgList
  };
};

export default connect(
  mapStateToProps,
  { uploadImage }
)(ImageUploadButton);
