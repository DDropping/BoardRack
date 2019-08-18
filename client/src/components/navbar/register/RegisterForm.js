import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Form, Icon, Button } from 'antd';
import { reduxForm, Field } from 'redux-form';

import { changeToLoginModal } from '../../../actions/registerModal';
import { registerUser } from '../../../actions/auth';
import { AInput } from '../../formAntComponents';

class RegisterForm extends Component {
  onSubmit = formProps => {
    console.log(formProps);
    this.props.registerUser(formProps);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.onSubmit)}>
        {/* FIX: force antd to load input style */}
        <div style={{ color: 'red' }}>{this.props.errorMessage}</div>
        <Field
          name="email"
          component={AInput}
          prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Email"
          size="large"
        />
        <Field
          name="username"
          component={AInput}
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Username"
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
        <Field
          name="confirmPassword"
          type="password"
          component={AInput}
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Confirm Password"
          size="large"
        />
        <small style={{ color: 'rgba(0,0,0,.50)' }}>
          By clicking Register, you agree to our Terms and Service.
        </small>
        <Button
          type={this.props.registerButton}
          loading={this.props.isRegisterButtonLoading}
          size="large"
          htmlType="submit"
          className="login-form-button"
          style={{ width: '100%' }}
        >
          Register
        </Button>
        <div style={{ marginTop: '20px' }}>
          Already have an account?{' '}
          <Link to="/" onClick={this.props.changeToLoginModal}>
            Log In
          </Link>
        </div>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.errorMessage,
    registerButton: state.auth.registerButton,
    isRegisterButtonLoading: state.auth.isRegisterButtonLoading
  };
};

export default compose(
  connect(
    mapStateToProps,
    { changeToLoginModal, registerUser }
  ),
  reduxForm({ form: 'register' })
)(RegisterForm);
