import React from 'react';
import { Card, Icon } from 'antd';

import './createPost/addDetails/imageUpload/imgUpload.css';
import { connect } from 'react-redux';
import { deleteImagePreview } from '../actions/createPost/imageUpload';

const Test = props => {
  return (
    <div>
      <Card
        style={{
          width: '150px',
          height: '200px',
          backgroundColor: '#f3f7f9',
          marginBottom: '10px',
          marginRight: '10px',
          display: 'inline-block',
          lineHeight: '150px'
        }}
        hoverable={true}
        bodyStyle={{ padding: 0 }}
        cover={
          <div style={{ width: 150, height: 150, textAlign: 'center' }}>
            <img
              style={{
                maxWidth: '146px',
                maxHeight: '146px',
                verticalAlign: 'middle',
                margin: ' 0 auto'
              }}
              alt="surfboard"
              src={'https://boardrack.s3-us-west-1.amazonaws.com/1569302307889'}
            />
          </div>
        }
        actions={[
          <Icon type="star" key="star" />,
          <Icon onClick={props.deleteImagePreview} type="delete" key="delete" />
        ]}
      ></Card>
    </div>
  );
};

export default connect(
  null,
  { deleteImagePreview }
)(Test);
