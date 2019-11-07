import React from "react";
import Label from "../../../../atoms/FormAtoms/Label";

import Input from "../../../../atoms/FormAtoms/Input";

const FirstNameField = ({
  groupClasses,
  inputProps,
  labelProps,
  setFirstname,
  value
}) => {
  return (
    <div className={groupClasses}>
      <Label labelProps={labelProps} />

      <Input inputProps={inputProps} setValue={setFirstname} value={value} />
    </div>
  );
};

export default FirstNameField;
