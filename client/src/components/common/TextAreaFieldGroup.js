import React from "react";
import PropTypes from "prop-types";
import BasicTextFields from "./textField";

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  onChange
}) => {
  return (
    <div>
      <BasicTextFields
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></BasicTextFields>
      {error}
      {info}
    </div>
  );
};

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextAreaFieldGroup;
