import React from "react";
import Label from "../../../../atoms/FormAtoms/Label";

import Input from "../../../../atoms/FormAtoms/Input";
import FormFieldErrors from "../../FormFieldErrors/FormFieldErrors";

const FirstNameField = ({
  groupClasses,
  inputProps,
  labelProps,
  register,
  errors
}) => {
  const displayErrors = errors ? (
    <FormFieldErrors errors={errors} name={inputProps.name} />
  ) : null;

  return (
    <div className={groupClasses}>
      <Label labelProps={labelProps} />

      <Input inputProps={inputProps} register={register} />

      {displayErrors}
    </div>
  );
};

export default FirstNameField;
