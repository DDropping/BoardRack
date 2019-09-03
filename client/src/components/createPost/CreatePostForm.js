import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Form, Icon, Button, Row, Col } from 'antd';

import { AInput, ASelect, ACheckbox } from '../formAntComponents';

const CreatePostForm = () => {
  return (
    <Form>
      <Row>
        <Col xs={0} sm={4}>
          <h2 style={{ textAlign: 'center' }}>Title:</h2>
        </Col>
        <Col xs={24} sm={10}>
          <Field
            name="title"
            component={AInput}
            placeholder="Title..."
            size="large"
            styel={{ width: '200px' }}
          />
        </Col>
        <Col xs={0} sm={4}>
          <h2 style={{ textAlign: 'center' }}>Price:</h2>
        </Col>
        <Col xs={24} sm={4}>
          <Field
            name="price"
            component={AInput}
            placeholder="Price..."
            size="large"
            prefix="$"
            styel={{ width: '200px' }}
          />
        </Col>
      </Row>

      <Row></Row>
    </Form>
  );
};

export default compose(
  connect(
    null,
    null
  ),
  reduxForm({ form: 'createPost' })
)(CreatePostForm);
