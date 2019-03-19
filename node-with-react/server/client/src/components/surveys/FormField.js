import React from 'react';

export default ({ input, label, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <input {...input} style={{ marginBottom: '.1em' }} />
    <div className="red-text" style={{ marginBottom: '1.5em' }}>
      {touched && error}
    </div>
  </div>
);
