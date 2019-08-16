import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';
import { reduxForm, Field } from 'redux-form';
import { TextField } from 'redux-form-antd';
import { changeToLoginModal } from '../../../actions/registerModal';

const RegisterForm = props => {
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
        required
      />
      <Field
        name="username"
        component={TextField}
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder="Username"
        size="large"
        required
      />
      <Field
        name="password"
        type="password"
        component={TextField}
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder="Password"
        size="large"
        required
      />
      <Field
        name="confirmPassword"
        type="text"
        component={TextField}
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder="Confirm Password"
        size="large"
        required
      />
      <small style={{ color: 'rgba(0,0,0,.50)' }}>
        By clicking Register, you agree to our Terms and Service.
      </small>
      <Button
        type="primary"
        size="large"
        htmlType="submit"
        className="login-form-button"
        style={{ width: '100%' }}
      >
        Register
      </Button>
      <div style={{ marginTop: '20px' }}>
        Already have an account?{' '}
        <Link to="/" onClick={props.changeToLoginModal}>
          Log In
        </Link>
      </div>
    </Form>
  );
};

export default compose(
  connect(
    null,
    { changeToLoginModal }
  ),
  reduxForm({ form: 'register' })
)(RegisterForm);
