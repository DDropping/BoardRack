import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { reduxForm, Field } from 'redux-form';

import { AInput } from '../../formAntComponents';
import { changeToRegisterModal } from '../../../actions/overlay';
import { loginUser } from '../../../actions/auth';

const LoginForm = props => {
  const onSubmit = formProps => {
    props.loginUser(formProps);
  };

  let errors = null;
  if (props.loginErrors) {
    errors = props.loginErrors.map(error => {
      return <li key={error}>{error}</li>;
    });
  }

  return (
    <Form onSubmit={props.handleSubmit(onSubmit)}>
      {/* FIX: force antd to load input style */}
      <Input style={{ display: 'none' }} />
      <Field
        name="email"
        component={AInput}
        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder="Email"
        size="large"
      />
      <Field
        name="password"
        type="password"
        component={AInput}
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder="Password"
        size="large"
      />
      <ul style={{ color: 'red' }}>{errors}</ul>

      <Checkbox>Remember me</Checkbox>
      <Link to="" className="login-form-forgot" style={{ float: 'right' }}>
        Forgot password
      </Link>
      <Button
        type="primary"
        loading={props.isLoading}
        size="large"
        htmlType="submit"
        className="login-form-button"
        style={{ width: '100%' }}
      >
        Login
      </Button>
      <div style={{ paddingTop: '20px' }}>
        Don't have an account yet?{' '}
        <Link to="" onClick={props.changeToRegisterModal}>
          register now!
        </Link>
      </div>
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    loginErrors: state.auth.loginErrors,
    isLoading: state.overlay.isLoginModalLoading
  };
};

export default compose(
  connect(
    mapStateToProps,
    { changeToRegisterModal, loginUser }
  ),
  reduxForm({ form: 'login' })
)(LoginForm);
