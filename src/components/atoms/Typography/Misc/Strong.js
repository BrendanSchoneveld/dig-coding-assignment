import React from "react";

const Strong = ({ customClasses, text, currencyPrefix }) => {
  return (
    <strong className={customClasses}>
      {currencyPrefix}
      {text}
    </strong>
  );
};

export default Strong;
