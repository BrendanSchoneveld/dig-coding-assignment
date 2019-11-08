import React from "react";

const FormFieldErrors = ({ errors, name }) => {
  return <div>{errors[name] && `${name} is required`}</div>;
};

export default FormFieldErrors;
