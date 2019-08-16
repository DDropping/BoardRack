import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { reduxForm, Field } from 'redux-form';
import { SelectField, TextField } from 'redux-form-antd';

import {
  toggleLoginModal,
  changeToRegisterModal
} from '../../../actions/loginModal';

const LoginForm = props => {
  return (
    <Form>
      {/* FIX: force antd to load input style */}
      <Input style={{ display: 'none' }} />
      <Field
        name="email"
        component={TextField}
        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder="Email"
        size="large"
      />
      <Field
        name="password"
        component={TextField}
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder="Email"
        size="large"
      />
      <Checkbox>Remember me</Checkbox>
      <Link to="" className="login-form-forgot" style={{ float: 'right' }}>
        Forgot password
      </Link>
      <Button
        type="primary"
        size="large"
        htmlType="submit"
        className="login-form-button"
        style={{ width: '100%' }}
      >
        Log in
      </Button>
      <div style={{ paddingTop: '20px' }}>
        Don't have and account yet?{' '}
        <Link onClick={props.changeToRegisterModal}>register now!</Link>
      </div>
    </Form>
  );
};

export default compose(
  connect(
    null,
    { toggleLoginModal, changeToRegisterModal }
  ),
  reduxForm({ form: 'login' })
)(LoginForm);
