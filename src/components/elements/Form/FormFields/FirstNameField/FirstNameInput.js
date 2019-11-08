import React from "react";
import Label from "../../../../atoms/FormAtoms/Label";

import Input from "../../../../atoms/FormAtoms/Input";

const FirstNameField = ({
  groupClasses,
  inputProps,
  labelProps,
  register,
  errors,
  setFirstname,
  value
}) => {
  return (
    <div className={groupClasses}>
      <Label labelProps={labelProps} />

      <Input
        inputProps={inputProps}
        setValue={setFirstname}
        value={value}
        register={register}
        error={errors}
      />
    </div>
  );
};

export default FirstNameField;
