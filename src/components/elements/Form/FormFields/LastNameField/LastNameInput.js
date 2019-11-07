import React from "react";
import Label from "../../../../atoms/FormAtoms/Label";

import Input from "../../../../atoms/FormAtoms/Input";

const LastNameField = ({
  groupClasses,
  inputProps,
  labelProps,
  setLastname,
  value
}) => {
  return (
    <div className={groupClasses}>
      <Label labelProps={labelProps} />

      <Input inputProps={inputProps} setValue={setLastname} value={value} />
    </div>
  );
};

export default LastNameField;
