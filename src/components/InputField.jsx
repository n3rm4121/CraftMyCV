import React from 'react';

const InputField = ({ label, id, type, value, onChange }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default InputField;
