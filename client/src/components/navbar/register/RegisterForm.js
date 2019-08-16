import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';
import { changeToLoginModal } from '../../../actions/registerModal';

const RegisterForm = props => {
  return (
    <Form>
      <Form.Item>
        <Input
          size="large"
          prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item>
        <Input
          size="large"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item>
        <Input
          size="large"
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Input
          size="large"
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Confirm Password"
        />
      </Form.Item>
      <Form.Item>
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
        Already have an account?{' '}
        <Link onClick={props.changeToLoginModal}>Log In</Link>
      </Form.Item>
    </Form>
  );
};

export default connect(
  null,
  { changeToLoginModal }
)(RegisterForm);
