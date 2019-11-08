import React from "react";
import Label from "../../../../atoms/FormAtoms/Label";
import Textarea from "../../../../atoms/FormAtoms/Textarea";

const ReviewField = ({
  groupClasses,
  inputProps,
  labelProps,
  setReview,
  register,
  errors,
  value
}) => {
  return (
    <div className={groupClasses}>
      <Label labelProps={labelProps} />

      <Textarea
        inputProps={inputProps}
        setValue={setReview}
        value={value}
        register={register}
        errors={errors}
      />
    </div>
  );
};

export default ReviewField;
