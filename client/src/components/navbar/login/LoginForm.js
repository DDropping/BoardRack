import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { reduxForm, Field } from 'redux-form';

import { AInput } from '../../formAntComponents';
import { changeToRegisterModal } from '../../../actions/overlay';
import { loginUser } from '../../../actions/auth';

const LoginForm = props => {
  const dispatch = useDispatch();
  const loginErrors = useSelector(state => state.auth.loginErrors);
  const isLoading = useSelector(state => state.overlay.isLoginModalLoading);

  const onSubmit = formProps => {
    dispatch(loginUser(formProps));
  };

  let errors = null;
  if (loginErrors) {
    errors = loginErrors.map(error => {
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
        loading={isLoading}
        size="large"
        htmlType="submit"
        className="login-form-button"
        style={{ width: '100%' }}
      >
        Login
      </Button>
      <div style={{ paddingTop: '20px' }}>
        Don't have an account yet?{' '}
        <Link to="" onClick={() => dispatch(changeToRegisterModal)}>
          register now!
        </Link>
      </div>
    </Form>
  );
};

export default reduxForm({ form: 'login' })(LoginForm);
