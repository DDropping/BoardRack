import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Form, Row, Col, Input } from 'antd';

import { AInput } from '../formAntComponents';

const AdditionalDetailsOpinion = () => {
  return (
    <div>
      <div>Opinion</div>
    </div>
  );
};

export default compose(
  connect(
    null,
    null
  ),
  reduxForm({ form: 'createPost' })
)(AdditionalDetailsOpinion);
