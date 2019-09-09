import React from 'react';
import { Upload, Button, Icon } from 'antd';

const upload = () => {
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

export default upload;
