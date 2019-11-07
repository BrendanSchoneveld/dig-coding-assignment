import React from "react";

const Button = ({ customClasses, iconClasses, text, type }) => {
  const displayText = text ? text : null;
  const displayIcon = iconClasses ? <i class={iconClasses}></i> : null;

  return (
    <button className={customClasses} type={type}>
      {displayText}
      {displayIcon}
    </button>
  );
};

export default Button;
