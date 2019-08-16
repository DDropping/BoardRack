import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';
import { reduxForm, Field } from 'redux-form';
import { SelectField, TextField } from 'redux-form-antd';
import { changeToLoginModal } from '../../../actions/registerModal';

const RegisterForm = props => {
  return (
    <form>
      <fieldset>
        <Field
          name="email"
          component={TextField}
          prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
          size="large"
          placeholder="Email"
        />
      </fieldset>
      <Field
        name="username"
        component={TextField}
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        size="large"
        placeholder="Username"
      />
      <Field
        name="password"
        component={TextField}
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        size="large"
        type="password"
        placeholder="Password"
      />
      <Field
        name="confirmPassword"
        component={TextField}
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        size="large"
        type="password"
        placeholder="Confirm Password"
      />
      <small>By clicking Register, you agree to our Terms and Service.</small>
      <Button
        type="primary"
        size="large"
        htmlType="submit"
        className="login-form-button"
        style={{ width: '100%' }}
      >
        Register
      </Button>
      <div style={{ paddingTop: '20px' }}>
        Already have an account?
        <Link onClick={props.changeToLoginModal}>Log In</Link>
      </div>
    </form>
  );
};

export default compose(
  connect(
    null,
    { changeToLoginModal }
  ),
  reduxForm({ form: 'register' })
)(RegisterForm);
