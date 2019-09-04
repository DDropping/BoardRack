import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Form, Icon, Button, Row, Col, Select, Divider, Input } from 'antd';

import { AInput, ASelect, ACheckbox } from '../formAntComponents';

const CreatePostForm = () => {
  return (
    <Form>
      <Row>
        <Col xs={5} sm={4}>
          <h2 style={{ textAlign: 'center' }}>Title:</h2>
        </Col>
        <Col xs={19} sm={10}>
          <Field
            name="title"
            component={AInput}
            placeholder="Title..."
            size="large"
          />
        </Col>
        <Col xs={5} sm={4}>
          <h2 style={{ textAlign: 'center' }}>Price:</h2>
        </Col>
        <Col xs={19} sm={4}>
          <Field
            name="price"
            component={AInput}
            placeholder="Price..."
            size="large"
            prefix="$"
          />
        </Col>
      </Row>

      <Row>
        <Col xs={5} sm={4}>
          <h2 style={{ textAlign: 'center' }}>Type:</h2>
        </Col>
        <Col xs={19} sm={10}>
          <Field
            name="boardType"
            component={ASelect}
            size="large"
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
        <Col xs={5} sm={4}>
          <h2 style={{ textAlign: 'center' }}>Condition:</h2>
        </Col>
        <Col xs={19} sm={10}>
          <Field
            name="boardType"
            component={ASelect}
            size="large"
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

      <Row>
        <Col xs={5} sm={4}>
          <h2 style={{ textAlign: 'center' }}>Shaper:</h2>
        </Col>
        <Col xs={19} sm={10}>
          <Field
            name="shaper"
            component={AInput}
            placeholder="Shaper..."
            size="large"
          />
        </Col>
      </Row>

      <Row>
        <Col xs={5} sm={4}>
          <h2 style={{ textAlign: 'center' }}>Model:</h2>
        </Col>
        <Col xs={19} sm={10}>
          <Field
            name="model"
            component={AInput}
            placeholder="Model..."
            size="large"
          />
        </Col>
      </Row>

      <Input.Group size="large">
        <Row gutter={8}>
          <Col xs={5} sm={4}>
            <h2 style={{ textAlign: 'center' }}>Length:</h2>
          </Col>
          <Col xs={8} sm={6} md={4}>
            <Field
              name="lengthFt"
              component={AInput}
              placeholder="6"
              size="large"
              suffix="ft."
            />
          </Col>
          <Col xs={8} sm={6} md={4}>
            <Field
              name="lengthIn"
              component={AInput}
              placeholder="2"
              size="large"
              suffix="in."
            />
          </Col>
        </Row>
      </Input.Group>

      <Row>
        <Col xs={5} sm={4}>
          <h2 style={{ textAlign: 'center' }}>Width:</h2>
        </Col>
        <Col xs={8} sm={6} md={4}>
          <Field
            name="width"
            component={AInput}
            placeholder="18 3/4"
            size="large"
            suffix="in."
          />
        </Col>
      </Row>

      <Row>
        <Col xs={5} sm={4}>
          <h2 style={{ textAlign: 'center' }}>Depth:</h2>
        </Col>
        <Col xs={8} sm={6} md={4}>
          <Field
            name="depth"
            component={AInput}
            placeholder="2 3/8"
            size="large"
            suffix="in."
          />
        </Col>
      </Row>

      <Row>
        <Col xs={5} sm={4}>
          <h2 style={{ textAlign: 'center' }}>Volume:</h2>
        </Col>
        <Col xs={8} sm={6} md={4}>
          <Field
            name="volume"
            component={AInput}
            placeholder="28"
            size="large"
            suffix="liters"
          />
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
)(CreatePostForm);
