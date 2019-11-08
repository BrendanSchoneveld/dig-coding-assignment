import React from "react";

const Textarea = ({
  inputProps: { customClasses, id, inputType, name, placeholder, numRows },
  setValue,
  value,
  register,
  errors
}) => {
  return (
    <textarea
      rows={numRows}
      id={id}
      type={inputType}
      name={name}
      className={customClasses}
      placeholder={placeholder}
      ref={register}
    ></textarea>
  );
};

export default Textarea;
