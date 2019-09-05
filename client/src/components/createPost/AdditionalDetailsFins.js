import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Form, Row, Col, Select } from 'antd';

import { ASelect } from '../formAntComponents';

const AdditionalDetailsFins = () => {
  return (
    <Form>
      <Row>
        <Col xs={6} sm={7} md={7} lg={7}>
          <h3 style={{ textAlign: 'center' }}>Tail:</h3>
        </Col>
        <Col xs={18} sm={15} md={16} lg={17}>
          <Field
            name="Tail"
            component={ASelect}
            size="default"
            defaultActiveFirstOption
          >
            <Select.Option value="Assymetrical">Assymetrical</Select.Option>
            <Select.Option value="Bat">Bat</Select.Option>
            <Select.Option value="Chop">Chop</Select.Option>
            <Select.Option value="Diamond">Diamond</Select.Option>
            <Select.Option value="Halfcrest Moon">Halfcrest Moon</Select.Option>
            <Select.Option value="Pin">Pin</Select.Option>
            <Select.Option value="Rocket">Rocket</Select.Option>
            <Select.Option value="Rounded Diamond">
              Rounded Diamond
            </Select.Option>
            <Select.Option value="Rounded Pin">Rounded Pin</Select.Option>
            <Select.Option value="Rounded Square">Rounded Square</Select.Option>
            <Select.Option value="Round">Round</Select.Option>
            <Select.Option value="Square">Square</Select.Option>
            <Select.Option value="Squash">Squash</Select.Option>
            <Select.Option value="Star">Star</Select.Option>
            <Select.Option value="Swallow">Swallow</Select.Option>
            <Select.Option value="Wing Swallow">Wing Swallow</Select.Option>
          </Field>
        </Col>
      </Row>

      <Row gutter={8}>
        <Col xs={6} sm={7} md={7} lg={7}>
          <h3 style={{ textAlign: 'center' }}>Fins:</h3>
        </Col>
        <Col xs={9} sm={8} md={8} lg={8}>
          <Field name="finSystem" component={ASelect} size="default">
            <Select.Option value="Future">Future</Select.Option>
            <Select.Option value="FCS">FCS</Select.Option>
            <Select.Option value="FCS II">FCS II</Select.Option>
            <Select.Option value="Other">Other</Select.Option>
          </Field>
        </Col>
        <Col xs={9} sm={8} md={8} lg={8}>
          <Field
            name="finConfiguration"
            component={ASelect}
            size="default"
            defaultActiveFirstOption
          >
            <Select.Option value="Single Fin">1 - Single Fin</Select.Option>
            <Select.Option value="Twin Fin">2 - Twin Fin</Select.Option>
            <Select.Option value="Thruster">3 - Thruster</Select.Option>
            <Select.Option value="Quad">4 - Quad</Select.Option>
            <Select.Option value="5 Fin">5 - 5 Fin</Select.Option>
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
  reduxForm({ form: 'createPost', destroyOnUnmount: false })
)(AdditionalDetailsFins);
