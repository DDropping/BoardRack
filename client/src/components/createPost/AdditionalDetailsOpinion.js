import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Form, Row, Col } from 'antd';

import { AInput } from '../formAntComponents';

const AdditionalDetailsOpinion = () => {
  return (
    <Form>
      <Row>
        <Col xs={8} sm={8}>
          <h3 style={{ textAlign: 'center' }}>Wave Size:</h3>
        </Col>
        <Col xs={8} sm={6}>
          <Field
            name="waveSize"
            component={AInput}
            placeholder="4-7"
            size="default"
            suffix="ft."
          />
        </Col>
      </Row>

      <Row>
        <Col xs={8} sm={10}>
          <h3 style={{ textAlign: 'center' }}>Drive & Speed:</h3>
        </Col>
        <Col xs={8} sm={4}>
          <Field
            name="drive"
            component={AInput}
            placeholder="5"
            size="default"
            suffix="/5"
          />
        </Col>
      </Row>

      <Row>
        <Col xs={8} sm={10}>
          <h3 style={{ textAlign: 'center' }}>Paddle Power:</h3>
        </Col>
        <Col xs={8} sm={4}>
          <Field
            name="paddlePower"
            component={AInput}
            placeholder="5"
            size="default"
            suffix="/5"
          />
        </Col>
      </Row>

      <Row>
        <Col xs={8} sm={10}>
          <h3 style={{ textAlign: 'center' }}>Movability</h3>
        </Col>
        <Col xs={8} sm={4}>
          <Field
            name="movability"
            component={AInput}
            placeholder="4"
            size="default"
            suffix="/5"
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
  reduxForm({ form: 'createPost', destroyOnUnmount: false })
)(AdditionalDetailsOpinion);
