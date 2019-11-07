import React from "react";

const Input = ({ inputProps, setValue, value }) => {
  const { customClasses, id, type, placeholder } = inputProps;
  return (
    <input
      type={type}
      id={id}
      onChange={setValue}
      className={customClasses}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
