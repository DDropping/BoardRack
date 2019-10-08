import React from 'react';
import { notification, Icon, Button } from 'antd';

import store from '../../store';
import { updateUserLocation } from '../../actions/user/location';

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
    icon: (
      <Icon type="exclamation-circle" theme="twoTone" twoToneColor="#ffdc17" />
    )
  });
};

export const UpdateDefaultLocationNotification = body => {
  const key = `open${Date.now()}`;
  const btn = (
    <Button
      type="primary"
      size="small"
      onClick={() => {
        notification.close(key);
        store.dispatch(updateUserLocation(body));
      }}
    >
      Confirm
    </Button>
  );
  notification.open({
    message: 'Update Default Location',
    description: 'Would you like to set this as your default location?',
    duration: 10,
    btn,
    key
  });
};
