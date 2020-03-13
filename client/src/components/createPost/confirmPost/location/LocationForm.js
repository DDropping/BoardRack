import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Row, Col } from 'antd';
import { reduxForm, Field } from 'redux-form';

import { AInput } from '../../../formAntComponents';
import { saveLocation } from '../../../../actions/user/location';

const LocationForm = props => {
  const dispatch = useDispatch();
  const location = useSelector(state => state.location.location);
  const isSaving = useSelector(state => state.location.isSaving);

  const onSubmit = formProps => {
    //create action to get geolocation from address and set user location
    dispatch(saveLocation(formProps));
  };
  return (
    <Form
      style={{ display: 'inline-block' }}
      onSubmit={props.handleSubmit(onSubmit)}
    >
      {/* FIX: force antd to load input style */}
      <Input style={{ display: 'none' }} />
      *Your exact location will not be public
      <Row gutter={4}>
        <Col xs={22} sm={10} md={9}>
          <Field
            name="address"
            component={AInput}
            placeholder="Address..."
            size="default"
          />
        </Col>
        <Col xs={8} sm={5} md={6}>
          <Field
            name="city"
            component={AInput}
            placeholder={location.city ? location.city : 'City'}
            size="default"
          />
        </Col>
        <Col xs={4} sm={2} md={2}>
          <Field
            name="state"
            component={AInput}
            placeholder={location.state ? location.state : 'State'}
            size="default"
          />
        </Col>
        <Col xs={6} sm={3} md={3}>
          <Field
            name="postalCode"
            component={AInput}
            placeholder={
              location.postalCode ? location.postalCode : 'Postal Code'
            }
            size="default"
          />
        </Col>
        <Col xs={4} sm={4} md={4}>
          <Button
            type="primary"
            style={{ marginTop: '4px', width: '100%' }}
            loading={isSaving}
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

export default reduxForm({ form: 'locationForm' })(LocationForm);
