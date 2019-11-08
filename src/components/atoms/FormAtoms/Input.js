import React, { Fragment } from "react";

const Input = ({
  inputProps: { customClasses, id, type, name, placeholder },
  register
}) => {
  return (
    <Fragment>
      <input
        type={type}
        id={id}
        name={name}
        className={customClasses}
        placeholder={placeholder}
        ref={register}
      />
    </Fragment>
  );
};

export default Input;
