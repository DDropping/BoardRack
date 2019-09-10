import React from 'react';
import { connect } from 'react-redux';
import { Upload, Icon } from 'antd';

const ImgUpload = props => {
  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      fileList={props.images}
      showUploadList={false}
    >
      <Icon type="plus" />
      <div className="ant-upload-text">Upload</div>
    </Upload>
  );
};

const mapStateToProps = state => {
  return {
    images: state.imgUpload.images,
    isLoading: state.imgUpload.isLoading
  };
};

export default connect(
  mapStateToProps,
  null
)(ImgUpload);
