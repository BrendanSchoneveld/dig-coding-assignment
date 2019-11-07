import React from "react";

const Span = ({ customClasses, currencyPrefix, text }) => {
  return (
    <span className={customClasses}>
      {currencyPrefix ? currencyPrefix : null}
      {text}
    </span>
  );
};

export default Span;
