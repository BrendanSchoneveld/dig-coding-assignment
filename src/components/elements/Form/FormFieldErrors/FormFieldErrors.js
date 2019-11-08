import React from "react";

import _ from "lodash";

const FormFieldErrors = ({ errors, name }) => {
  let hasErrors = _.isEmpty(errors);

  return <div>{errors[name] && `This field is required`}</div>;
};

export default FormFieldErrors;
