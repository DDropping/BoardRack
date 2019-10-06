import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { reduxForm, Field } from 'redux-form';

import { AInput } from '../../formAntComponents';

const Location = props => {
  const onSubmit = formProps => {
    props.loginUser(formProps);
  };
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

      <Button
        type="primary"
        loading={false}
        size="large"
        htmlType="submit"
        className="login-form-button"
        style={{ width: '100%' }}
      >
        Login
      </Button>
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    loginErrors: state.auth.loginErrors,
    isLoading: state.loginModal.isLoading
  };
};

export default compose(
  connect(
    mapStateToProps,
    {}
  ),
  reduxForm({ form: 'location' })
)(Location);
