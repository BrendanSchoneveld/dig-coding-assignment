import React from "react";
import Label from "../../../../atoms/FormAtoms/Label";

import Input from "../../../../atoms/FormAtoms/Input";

const LastNameField = ({
  groupClasses,
  inputProps,
  labelProps,
  setLastname,
  errors,
  register,
  value
}) => {
  return (
    <div className={groupClasses}>
      <Label labelProps={labelProps} />

      <Input
        inputProps={inputProps}
        setValue={setLastname}
        value={value}
        register={register}
        errors={errors}
      />
    </div>
  );
};

export default LastNameField;
