import React from "react";

const FormFieldErrors = ({ errors, name }) => {
  //const errorType = errors[name];

  //console.log(errorType.type);

  return <div>{errors[name] && `This field is required`}</div>;
};

export default FormFieldErrors;
