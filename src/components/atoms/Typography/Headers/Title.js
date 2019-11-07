import React from "react";

const Title = ({ customClasses, text }) => {
  return <h2 className={customClasses}>{text}</h2>;
};

export default Title;
