import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { reduxForm, Field } from 'redux-form';

import { AInput } from '../../formAntComponents';
import { changeToRegisterModal } from '../../../actions/loginModal';
import { loginUser } from '../../../actions/auth';

class LoginForm extends Component {
  onSubmit = formProps => {
    this.props.loginUser(formProps);
  };

  render() {
    const { handleSubmit } = this.props;
    let errors = null;
    if (this.props.loginErrors) {
      errors = this.props.loginErrors.map(error => {
        return <li key={error}>{error}</li>;
      });
    }
    return (
      <Form onSubmit={handleSubmit(this.onSubmit)}>
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
          size="large"
          htmlType="submit"
          className="login-form-button"
          style={{ width: '100%' }}
        >
          Login
        </Button>
        <div style={{ paddingTop: '20px' }}>
          Don't have an account yet?{' '}
          <Link to="" onClick={this.props.changeToRegisterModal}>
            register now!
          </Link>
        </div>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginErrors: state.auth.loginErrors,
    isLoginButtonLoading: state.auth.isLoginButtonLoading
  };
};

export default compose(
  connect(
    mapStateToProps,
    { changeToRegisterModal, loginUser }
  ),
  reduxForm({ form: 'login' })
)(LoginForm);
