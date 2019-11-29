import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon, Tooltip, Input, Row, Col, Button } from 'antd';

import { getUsersLocationWithCityStateZip } from '../../../../actions/user/location';

const InputGroup = Input.Group;

const LocationText = () => {
  const dispatch = useDispatch();
  const location = useSelector(state => state.location.location);
  const [isLocationForm, setIsLocationForm] = useState(false);
  const [formCity, setFormCity] = useState('');
  const [formState, setFormState] = useState('');
  const [formPostalCode, setFormPostalCode] = useState('');

  const handleEditClick = () => {
    setIsLocationForm(!isLocationForm);
  };

  return (
    <div>
      <h2 style={{ display: 'inline-block' }}>
        {location.city + ', '}
        {location.state + ' '}
        <Tooltip title="Edit Location">
          <Icon onClick={handleEditClick} type="edit" />
        </Tooltip>
        {isLocationForm ? (
          <div>
            <InputGroup size="large">
              <Row gutter={8}>
                <Col span={18}>
                  <Input
                    style={{ marginBottom: '10px' }}
                    placeholder={location.city ? location.city : 'City'}
                    onChange={e => {
                      setFormCity(e.target.value);
                    }}
                  />
                </Col>
                <Col span={6}>
                  <Input
                    style={{ marginBottom: '10px' }}
                    placeholder={location.state ? location.state : 'CA'}
                    onChange={e => setFormState(e.target.value)}
                  />
                </Col>
              </Row>
              <Input
                style={{ marginBottom: '10px' }}
                placeholder={
                  location.postalCode ? location.postalCode : 'Postal Code'
                }
                onChange={e => setFormPostalCode(e.target.value)}
              />
              <Button
                onClick={() =>
                  dispatch(
                    getUsersLocationWithCityStateZip(
                      formCity,
                      formState,
                      formPostalCode
                    )
                  )
                }
                type="primary"
                ghost
                block
              >
                Update Location
              </Button>
            </InputGroup>
          </div>
        ) : null}
      </h2>
    </div>
  );
};

export default LocationText;
