import React from "react";
import Label from "../../../../atoms/FormAtoms/Label";
import Textarea from "../../../../atoms/FormAtoms/Textarea";
import FormFieldErrors from "../../FormFieldErrors/FormFieldErrors";

const ReviewField = ({
  groupClasses,
  inputProps,
  labelProps,
  register,
  errors
}) => {
  return (
    <div className={groupClasses}>
      <Label labelProps={labelProps} />

      <Textarea inputProps={inputProps} register={register} errors={errors} />

      <FormFieldErrors errors={errors} name={inputProps.name} />
    </div>
  );
};

export default ReviewField;
