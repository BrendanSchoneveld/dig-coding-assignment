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
  return (
    <div className={groupClasses}>
      <Label labelProps={labelProps} />

      <Input inputProps={inputProps} register={register} />

      <FormFieldErrors errors={errors} name={inputProps.name} />
    </div>
  );
};

export default FirstNameField;
