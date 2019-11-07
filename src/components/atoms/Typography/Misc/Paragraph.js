import React from "react";

const Paragraph = ({ customClasses, text }) => {
  return <p className={customClasses}>{text}</p>;
};

export default Paragraph;
