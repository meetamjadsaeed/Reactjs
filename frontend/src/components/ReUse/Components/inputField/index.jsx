import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({ type, placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`input ${className}`}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default Input;
