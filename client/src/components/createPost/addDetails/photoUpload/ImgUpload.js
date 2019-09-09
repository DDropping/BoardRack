import React from 'react';
import { connect } from 'react-redux';
import { Upload, Icon } from 'antd';

const ImgUpload = () => {
  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    >
      <Icon type="plus" />
      <div className="ant-upload-text">Upload</div>
    </Upload>
  );
};

const mapStateToProps = state => {
  return {
    images: state.ImgUpload.images,
    isLoading: state.ImgUpload.isLoading
  };
};

export default connect(
  mapStateToProps,
  null
)(ImgUpload);
