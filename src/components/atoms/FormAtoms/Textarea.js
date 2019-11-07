import React from "react";

const Textarea = ({ inputProps, setValue, value }) => {
  const { customClasses, id, inputType, placeholder, numRows } = inputProps;
  return (
    <textarea
      rows={numRows}
      id={id}
      type={inputType}
      onChange={setValue}
      value={value}
      className={customClasses}
      placeholder={placeholder}
    ></textarea>
  );
};

export default Textarea;
