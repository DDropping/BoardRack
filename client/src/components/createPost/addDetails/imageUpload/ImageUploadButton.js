import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from 'antd';

import './imgUpload.css';
import { uploadImage } from '../../../../actions/createPost/imageUpload';

const ImageUploadButton = props => {
  const dispatch = useDispatch();
  const imgKey = useSelector(state => state.imgUpload.imgKey);
  const imgList = useSelector(state => state.imgUpload.imgList);

  const handleChange = file => {
    dispatch(uploadImage(imgKey, file));
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

        <div className="ant-upload-text">Upload {imgList.length}/8</div>

        {imgList.length < 8 && (
          <input
            type="file"
            onChange={event => handleChange(event.target.files[0])}
          />
        )}
      </button>
    </div>
  );
};

export default ImageUploadButton;
