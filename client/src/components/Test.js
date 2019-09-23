import React, { Component } from 'react';
import axios from 'axios';
import { Upload, Icon, Button } from 'antd';

class Test extends Component {
  state = {
    selectedFile: null
  };

  fileUploadHandler = event => {
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

  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div>
        <div className="upload-btn-wrapper">
          <button className="btn">{uploadButton}</button>
          <input type="file" onChange={this.fileUploadHandler} />
        </div>
      </div>
    );
  }
}

export default Test;
