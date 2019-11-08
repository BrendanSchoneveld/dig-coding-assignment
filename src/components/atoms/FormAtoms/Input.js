import React, { Fragment } from "react";

const Input = ({
  inputProps: { customClasses, id, type, name, placeholder },
  setValue,
  value,
  register,
  errors
}) => {
  return (
    <Fragment>
      <input
        type={type}
        id={id}
        name={name}
        className={customClasses}
        placeholder={placeholder}
        ref={register({ required: true })}
      />
    </Fragment>
  );
};

export default Input;
