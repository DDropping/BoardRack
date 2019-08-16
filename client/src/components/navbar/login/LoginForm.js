import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import {
  toggleLoginModal,
  changeToRegisterModal
} from '../../../actions/loginModal';
import { toggleRegisterModal } from '../../../actions/registerModal';

const LoginForm = props => {
  return (
    <div>
      <Form>
        <Form.Item>
          <Input
            size="large"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
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
          <Checkbox>Remember me</Checkbox>
          <Link to="" className="login-form-forgot" style={{ float: 'right' }}>
            Forgot password
          </Link>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: '100%' }}
          >
            Log in
          </Button>
          Or <Link onClick={props.changeToRegisterModal}>register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default connect(
  null,
  { toggleLoginModal, toggleRegisterModal, changeToRegisterModal }
)(LoginForm);
