import React from "react";

const ParagraphHeader = ({ customClasses, text }) => {
  return <h4 className={customClasses}>{text}</h4>;
};

export default ParagraphHeader;
