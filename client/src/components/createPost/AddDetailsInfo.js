import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Form, Icon, Button, Row, Col, Select, Divider, Input } from 'antd';

import { AInput, ASelect, ACheckbox } from '../formAntComponents';

const AddDetailsInfo = () => {
  return (
    <Form>
      <Row>
        <Col xs={5} sm={7} md={6} lg={5}>
          <h3 style={{ textAlign: 'center' }}>Title:</h3>
        </Col>
        <Col xs={19} sm={15} md={16} lg={17}>
          <Field
            name="title"
            component={AInput}
            placeholder="Title..."
            size="default"
          />
        </Col>
      </Row>

      <Row>
        <Col xs={5} sm={7} md={6} lg={5}>
          <h3 style={{ textAlign: 'center' }}>Price:</h3>
        </Col>
        <Col xs={19} sm={6}>
          <Field
            name="price"
            component={AInput}
            placeholder="Price..."
            size="default"
            prefix="$"
          />
        </Col>
      </Row>

      <Row>
        <Col xs={5} sm={7} md={6} lg={5}>
          <h3 style={{ textAlign: 'center' }}>Type:</h3>
        </Col>
        <Col xs={19} sm={15} md={16} lg={17}>
          <Field
            name="boardType"
            component={ASelect}
            size="default"
            defaultActiveFirstOption
          >
            <Select.Option value="Shortboard">Shortboard</Select.Option>
            <Select.Option value="Longboard">Longboard</Select.Option>
            <Select.Option value="Fish">Fish</Select.Option>
            <Select.Option value="Funboard">Funboard</Select.Option>
            <Select.Option value="Hybrid">Hybrid</Select.Option>
            <Select.Option value="Gun">Gun</Select.Option>
            <Select.Option value="Grovler">Grovler</Select.Option>
            <Select.Option value="SUP">SUP</Select.Option>
          </Field>
        </Col>
      </Row>

      <Row>
        <Col xs={5} sm={7} md={6} lg={5}>
          <h3 style={{ textAlign: 'center' }}>Condition:</h3>
        </Col>
        <Col xs={19} sm={15} md={16} lg={17}>
          <Field
            name="condition"
            component={ASelect}
            size="default"
            defaultActiveFirstOption
          >
            <Select.Option value="New">New</Select.Option>
            <Select.Option value="Lightly Used">Lightly Used</Select.Option>
            <Select.Option value="Used">Used</Select.Option>
            <Select.Option value="Heavily Used">Heavily Used</Select.Option>
            <Select.Option value="Thrashed">Thrashed</Select.Option>
          </Field>
        </Col>
      </Row>
    </Form>
  );
};

export default compose(
  connect(
    null,
    null
  ),
  reduxForm({ form: 'createPost' })
)(AddDetailsInfo);
