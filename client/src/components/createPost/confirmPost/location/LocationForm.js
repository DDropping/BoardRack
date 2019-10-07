import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Form, Input, Button, Row, Col } from 'antd';
import { reduxForm, Field } from 'redux-form';

import { AInput } from '../../../formAntComponents';
import { saveLocation } from '../../../../actions/user/location';

const LocationForm = props => {
  const onSubmit = formProps => {
    //create action to get geolocation from address and set user location
    props.saveLocation(formProps);
  };
  return (
    <Form
      style={{ display: 'inline-block' }}
      onSubmit={props.handleSubmit(onSubmit)}
    >
      {/* FIX: force antd to load input style */}
      <Input style={{ display: 'none' }} />
      <Row gutter={4}>
        <Col xs={8} sm={8} md={6}>
          <Field
            name="city"
            component={AInput}
            placeholder={props.location.city ? props.location.city : 'City'}
            size="default"
          />
        </Col>
        <Col xs={4} sm={4} md={2}>
          <Field
            name="state"
            component={AInput}
            placeholder={props.location.state ? props.location.state : 'State'}
            size="default"
          />
        </Col>
        <Col xs={6} sm={4} md={3}>
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
        <Col xs={6} sm={4} md={3}>
          <Button
            type="primary"
            style={{ marginTop: '4px' }}
            loading={props.isSaving}
            htmlType="submit"
            ghost
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
    isSaving: state.location.isSaving
  };
};

export default compose(
  connect(
    mapStateToProps,
    { saveLocation }
  ),
  reduxForm({ form: 'locationForm' })
)(LocationForm);
