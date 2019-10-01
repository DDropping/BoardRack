import React from 'react';
import { notification, Icon } from 'antd';

export const LoginSuccessNotification = () => {
  notification.open({
    message: 'Login Successful!',
    description: 'You Are Now Logged In',
    duration: 3,
    icon: <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
  });
};

export const RegisterSuccessNotification = () => {
  notification.open({
    message: 'Registration Successful!',
    description: 'You Are Now Logged In',
    duration: 3,
    icon: <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
  });
};

export const LogoutSuccessNotification = () => {
  notification.open({
    message: 'Logout Successful!',
    description: 'You Are Now Logged Out',
    duration: 3,
    icon: <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
  });
};
