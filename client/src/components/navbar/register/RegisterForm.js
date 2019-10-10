import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Form, Icon, Button } from 'antd';
import { reduxForm, Field } from 'redux-form';

import { changeToLoginModal } from '../../../actions/overlay';
import { registerUser } from '../../../actions/auth';
import { AInput } from '../../formAntComponents';

class RegisterForm extends Component {
  onSubmit = formProps => {
    this.props.registerUser(formProps);
  };

  render() {
    const { handleSubmit } = this.props;
    let errors = null;
    if (this.props.registrationErrors) {
      errors = this.props.registrationErrors.map(error => {
        return <li key={error}>{error}</li>;
      });
    }
    return (
      <Form onSubmit={handleSubmit(this.onSubmit)}>
        {/* FIX: force antd to load input style */}
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
        <ul style={{ color: 'red' }}>{errors}</ul>
        <small style={{ color: 'rgba(0,0,0,.50)' }}>
          By clicking Register, you agree to our Terms and Service.
        </small>
        <Button
          type="primary"
          loading={this.props.isLoading}
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
    registrationErrors: state.auth.registrationErrors,
    isLoading: state.overlay.isRegisterModalLoading
  };
};

export default compose(
  connect(
    mapStateToProps,
    { changeToLoginModal, registerUser }
  ),
  reduxForm({ form: 'register' })
)(RegisterForm);
