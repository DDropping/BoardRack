import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Icon, Form, Input, Button, Row, Col } from 'antd';
import { reduxForm, Field } from 'redux-form';

import { AInput } from '../../../formAntComponents';
import CurrentLocationButton from './GetLocationButton';

const LocationForm = props => {
  const onSubmit = formProps => {
    props.loginUser(formProps);
  };
  return (
    <Form
      style={{ display: 'inline-block' }}
      onSubmit={props.handleSubmit(onSubmit)}
    >
      {/* FIX: force antd to load input style */}
      <Input style={{ display: 'none' }} />
      <Row gutter={4}>
        <Col xs={12} sm={6} md={6}>
          <Field
            name="city"
            component={AInput}
            placeholder={props.location.city ? props.location.city : 'City'}
            size="default"
          />
        </Col>
        <Col xs={5} sm={4} md={2}>
          <Field
            name="state"
            component={AInput}
            placeholder={props.location.state ? props.location.state : 'State'}
            size="default"
          />
        </Col>
        <Col xs={7} sm={4} md={3}>
          <Field
            name="postalCode"
            component={AInput}
            placeholder={
              props.location.postalCode
                ? props.location.postalCode
                : 'Postal Code'
            }
            size="default"
          />
        </Col>
        <Col>
          <Button
            type="primary"
            style={{ marginTop: '4px' }}
            loading={props.isLoading}
            htmlType="submit"
          >
            Save
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    location: state.location,
    isLoading: state.location.isLoading
  };
};

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  reduxForm({ form: 'location' })
)(LocationForm);