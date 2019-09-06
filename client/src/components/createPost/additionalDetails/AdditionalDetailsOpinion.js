import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Form, Row, Col, Tooltip, Icon } from 'antd';

import { AInput } from '../../formAntComponents';

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
        <Col xs={8} sm={10}>
          <Tooltip
            placement="topLeft"
            title={'What size waves does your board perform well in?'}
          >
            <Icon
              style={{ padding: '5px', color: '#23b0ba' }}
              type="question-circle"
            />
          </Tooltip>
        </Col>
      </Row>

      <Row>
        <Col xs={8} sm={10}>
          <h3 style={{ textAlign: 'center' }}>Drive & Speed:</h3>
        </Col>
        <Col xs={8} sm={5} md={4}>
          <Field
            name="drive"
            component={AInput}
            placeholder="5"
            size="default"
            suffix="/5"
          />
        </Col>
        <Col xs={8} sm={9} md={10}>
          <Tooltip
            placement="topLeft"
            title={
              'How well does your board accelerate and maintain speed through turns?'
            }
          >
            <Icon
              style={{ padding: '5px', color: '#23b0ba' }}
              type="question-circle"
            />
          </Tooltip>
        </Col>
      </Row>

      <Row>
        <Col xs={8} sm={10}>
          <h3 style={{ textAlign: 'center' }}>Paddle Power:</h3>
        </Col>
        <Col xs={8} sm={5} md={4}>
          <Field
            name="paddlePower"
            component={AInput}
            placeholder="5"
            size="default"
            suffix="/5"
          />
        </Col>
        <Col xs={8} sm={9} md={10}>
          <Tooltip
            placement="topLeft"
            title={'How easy is your board to paddle?'}
          >
            <Icon
              style={{ padding: '5px', color: '#23b0ba' }}
              type="question-circle"
            />
          </Tooltip>
        </Col>
      </Row>

      <Row>
        <Col xs={8} sm={10}>
          <h3 style={{ textAlign: 'center' }}>Movability</h3>
        </Col>
        <Col xs={8} sm={5} md={4}>
          <Field
            name="movability"
            component={AInput}
            placeholder="4"
            size="default"
            suffix="/5"
          />
        </Col>
        <Col xs={8} sm={9} md={10}>
          <Tooltip
            placement="topLeft"
            title={'How easy does your board move in the water?'}
          >
            <Icon
              style={{ padding: '5px', color: '#23b0ba' }}
              type="question-circle"
            />
          </Tooltip>
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
