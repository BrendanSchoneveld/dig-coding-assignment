import React from "react";
import Label from "../../../../atoms/FormAtoms/Label";

import Input from "../../../../atoms/FormAtoms/Input";
import FormFieldErrors from "../../FormFieldErrors/FormFieldErrors";

const LastNameField = ({
  groupClasses,
  inputProps,
  labelProps,
  errors,
  register
}) => {
  return (
    <div className={groupClasses}>
      <Label labelProps={labelProps} />

      <Input inputProps={inputProps} register={register} errors={errors} />

      <FormFieldErrors errors={errors} name={inputProps.name} />
    </div>
  );
};

export default LastNameField;
