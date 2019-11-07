import React from "react";
import Label from "../../../../atoms/FormAtoms/Label";
import Textarea from "../../../../atoms/FormAtoms/Textarea";

const ReviewField = ({
  groupClasses,
  inputProps,
  labelProps,
  setReview,
  value
}) => {
  return (
    <div className={groupClasses}>
      <Label labelProps={labelProps} />

      <Textarea inputProps={inputProps} setValue={setReview} value={value} />
    </div>
  );
};

export default ReviewField;
