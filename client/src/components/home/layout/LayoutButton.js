import React, { useState, useCallback, useRef } from 'react';
import { Icon, Button } from 'antd';

import './layoutButton.css';
import { useOnClickOutside } from '../../../hooks/onClickOutside';

const LayoutButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [layoutValue, setLayoutValue] = useState('Gallery');
  const ref = useRef();
  useOnClickOutside(ref, useCallback(() => setIsVisible(false)));

  return (
    <div className="br-layout-button" ref={ref}>
      <Button
        onClick={() => setIsVisible(!isVisible)}
        style={{ marginRight: '30px' }}
        type="link"
      >
        {layoutValue === 'List' && <Icon type="menu" />}
        {layoutValue === 'Thumb' && <Icon type="unordered-list" />}
        {layoutValue === 'Gallery' && <Icon type="appstore" />}
        {layoutValue}
      </Button>
      {isVisible && (
        <div className="br-layout-options">
          <Button
            onClick={() => {
              setLayoutValue('List');
              setIsVisible(false);
            }}
            type="link"
          >
            <Icon type="menu" /> List
          </Button>
          <br />
          <Button
            onClick={() => {
              setLayoutValue('Thumb');
              setIsVisible(false);
            }}
            type="link"
          >
            <Icon type="unordered-list" /> Thumb
          </Button>
          <br />
          <Button
            onClick={() => {
              setLayoutValue('Gallery');
              setIsVisible(false);
            }}
            type="link"
          >
            <Icon type="appstore" /> Gallery
          </Button>
        </div>
      )}
    </div>
  );
};

export default LayoutButton;
