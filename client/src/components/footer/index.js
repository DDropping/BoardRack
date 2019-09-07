import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';

const index = () => {
  return (
    <div
      style={{
        height: '100px',
        backgroundColor: '#0058B0',
        textAlign: 'center',
        margin: '0 auto'
      }}
    >
      <Typography.Title
        style={{ color: 'white', paddingTop: '20px' }}
        level={4}
      >
        BoardRack
      </Typography.Title>
      <Link to="/" style={{ color: '#d6d6d6', padding: '0 10px' }}>
        Home
      </Link>
      <Link to="/" style={{ color: '#d6d6d6', padding: '0 10px' }}>
        About BoardRack
      </Link>
      <Link to="/" style={{ color: '#d6d6d6', padding: '0 10px' }}>
        Support Center
      </Link>
      <Link to="/" style={{ color: '#d6d6d6', padding: '0 10px' }}>
        My Account
      </Link>
      <Link to="/" style={{ color: '#d6d6d6', padding: '0 10px' }}>
        Terms of Use and Privacy Policy
      </Link>
    </div>
  );
};

export default index;
