import React from "react";

import _ from "lodash";

const FormFieldErrors = ({ errors, name }) => {
  return (
    <div>
      {errors[name] && errors[name].type === "required" && (
        <span>This is required</span>
      )}
      {errors[name] && errors[name].type === "minLength" && (
        <span>More characters required</span>
      )}
      {errors[name] && errors[name].type === "maxLength" && (
        <span>Max characters length exceeded</span>
      )}
      {errors[name] && errors[name].type === "pattern" && (
        <span>Only alphabetic characters are allowed</span>
      )}
    </div>
  );
};

export default FormFieldErrors;
