import React from "react";

const Label = ({ labelProps }) => {
  const { customClasses, target, text } = labelProps;
  return (
    <label className={customClasses} htmlFor={target}>
      {text}
    </label>
  );
};

export default Label;
