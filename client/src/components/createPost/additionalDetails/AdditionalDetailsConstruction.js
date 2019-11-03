import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Form, Row, Col, Select } from 'antd';

import { ASelect, AInput } from '../../formAntComponents';

const AdditionalDetailsConstruction = () => {
  return (
    <Form>
      <Row>
        <Col xs={9} sm={10} md={8} lg={7}>
          <h3 style={{ textAlign: 'center' }}>Tail:</h3>
        </Col>
        <Col xs={15} sm={14} md={16} lg={17}>
          <Field
            name="tail"
            component={ASelect}
            size="default"
            defaultActiveFirstOption
          >
            <Select.Option value="Assymetrical">
              Assymetrical Tail
            </Select.Option>
            <Select.Option value="Bat">Bat Tail</Select.Option>
            <Select.Option value="Chop">Chop Tail</Select.Option>
            <Select.Option value="Diamond">Diamond Tail</Select.Option>
            <Select.Option value="Halfcrest Moon">
              Halfcrest Moon Tail
            </Select.Option>
            <Select.Option value="Pin">Pin Tail</Select.Option>
            <Select.Option value="Rocket">Rocket Tail</Select.Option>
            <Select.Option value="Rounded Diamond">
              Rounded Diamond Tail
            </Select.Option>
            <Select.Option value="Rounded Pin">Rounded Pin Tail</Select.Option>
            <Select.Option value="Rounded Square">
              Rounded Square Tail
            </Select.Option>
            <Select.Option value="Round">Round Tail</Select.Option>
            <Select.Option value="Square">Square Tail</Select.Option>
            <Select.Option value="Squash">Squash Tail</Select.Option>
            <Select.Option value="Star">Star Tail</Select.Option>
            <Select.Option value="Swallow">Swallow Tail</Select.Option>
            <Select.Option value="Wing Swallow">
              Wing Swallow Tail
            </Select.Option>
          </Field>
        </Col>
      </Row>

      <Row>
        <Col xs={9} sm={10} md={8} lg={7}>
          <h3 style={{ textAlign: 'center' }}>Construction:</h3>
        </Col>
        <Col xs={15} sm={14} md={16} lg={17}>
          <Field
            name="construction"
            component={ASelect}
            size="default"
            defaultActiveFirstOption
          >
            <Select.Option value="PU">PU(Fiberglass)</Select.Option>
            <Select.Option value="PE">PE(Epoxy)</Select.Option>
            <Select.Option value="EPS">EPS(Epoxy)</Select.Option>
            <Select.Option value="Foam">Foam</Select.Option>
            <Select.Option value="Wood">Wood</Select.Option>
            <Select.Option value="Other">Other</Select.Option>
          </Field>
        </Col>
      </Row>

      <Row>
        <Col xs={9} sm={10} md={8} lg={7}>
          <h3 style={{ textAlign: 'center' }}>Glassing:</h3>
        </Col>
        <Col xs={15} sm={14} md={16} lg={17}>
          <Field
            name="glassing"
            component={ASelect}
            size="default"
            defaultActiveFirstOption
          >
            <Select.Option value="Standard">Performance</Select.Option>
            <Select.Option value="Performance">Standard</Select.Option>
            <Select.Option value="Heavy">Heavy</Select.Option>
            <Select.Option value="Other">Other</Select.Option>
          </Field>
        </Col>
      </Row>

      <Row>
        <Col xs={9} sm={10} md={8} lg={7}>
          <h3 style={{ textAlign: 'center' }}>Contour:</h3>
        </Col>
        <Col xs={15} sm={14} md={16} lg={17}>
          <Field
            name="contour"
            component={AInput}
            placeholder="single to double"
            size="default"
          />
        </Col>
      </Row>
    </Form>
  );
};

export default reduxForm({ form: 'createPost', destroyOnUnmount: false })(
  AdditionalDetailsConstruction
);
