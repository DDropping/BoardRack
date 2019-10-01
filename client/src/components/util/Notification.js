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

export const CreatePostSuccessNotification = () => {
  notification.open({
    message: 'New Post Created!',
    description: 'Your Post Has Been Created And Is Live For The World To See',
    duration: 4.5,
    icon: <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
  });
};

export const CreatePostFailNotification = () => {
  notification.open({
    message: 'Uhh Ohh, Something Went Wrong',
    description: 'Sorry, Your Post Could Not Be Created At This Time',
    duration: 4.5,
    icon: <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
  });
};
