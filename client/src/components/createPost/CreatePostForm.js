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
          <h3 style={{ textAlign: 'center' }}>Title:</h3>
        </Col>
        <Col xs={19} sm={19}>
          <Field
            name="title"
            component={AInput}
            placeholder="Title..."
            size="medium"
          />
        </Col>
      </Row>

      <Row>
        <Col xs={5} sm={4}>
          <h3 style={{ textAlign: 'center' }}>Price:</h3>
        </Col>
        <Col xs={19} sm={4}>
          <Field
            name="price"
            component={AInput}
            placeholder="Price..."
            size="medium"
            prefix="$"
          />
        </Col>
      </Row>

      <Row>
        <Col xs={5} sm={4}>
          <h3 style={{ textAlign: 'center' }}>Type:</h3>
        </Col>
        <Col xs={19} sm={10}>
          <Field
            name="boardType"
            component={ASelect}
            size="medium"
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
          <h3 style={{ textAlign: 'center' }}>Condition:</h3>
        </Col>
        <Col xs={19} sm={10}>
          <Field
            name="boardType"
            component={ASelect}
            size="medium"
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
          <h3 style={{ textAlign: 'center' }}>Shaper:</h3>
        </Col>
        <Col xs={19} sm={10}>
          <Field
            name="shaper"
            component={AInput}
            placeholder="Shaper..."
            size="medium"
          />
        </Col>
      </Row>

      <Row>
        <Col xs={5} sm={4}>
          <h3 style={{ textAlign: 'center' }}>Model:</h3>
        </Col>
        <Col xs={19} sm={10}>
          <Field
            name="model"
            component={AInput}
            placeholder="Model..."
            size="medium"
          />
        </Col>
      </Row>

      <Divider orientation="left">Dimensions</Divider>

      <Input.Group size="medium">
        <Row gutter={8}>
          <Col xs={5} sm={4}>
            <h3 style={{ textAlign: 'center' }}>Length:</h3>
          </Col>
          <Col xs={8} sm={6} md={4}>
            <Field
              name="lengthFt"
              component={AInput}
              placeholder="6"
              size="medium"
              suffix="ft."
            />
          </Col>
          <Col xs={8} sm={6} md={4}>
            <Field
              name="lengthIn"
              component={AInput}
              placeholder="2"
              size="medium"
              suffix="in."
            />
          </Col>
        </Row>
      </Input.Group>

      <Row>
        <Col xs={5} sm={4}>
          <h3 style={{ textAlign: 'center' }}>Width:</h3>
        </Col>
        <Col xs={8} sm={6} md={4}>
          <Field
            name="width"
            component={AInput}
            placeholder="18 3/4"
            size="medium"
            suffix="in."
          />
        </Col>
      </Row>

      <Row>
        <Col xs={5} sm={4}>
          <h3 style={{ textAlign: 'center' }}>Depth:</h3>
        </Col>
        <Col xs={8} sm={6} md={4}>
          <Field
            name="depth"
            component={AInput}
            placeholder="2 3/8"
            size="medium"
            suffix="in."
          />
        </Col>
      </Row>

      <Row>
        <Col xs={5} sm={4}>
          <h3 style={{ textAlign: 'center' }}>Volume:</h3>
        </Col>
        <Col xs={8} sm={6} md={4}>
          <Field
            name="volume"
            component={AInput}
            placeholder="28"
            size="medium"
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
