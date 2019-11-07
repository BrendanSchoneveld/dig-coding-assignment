import React from "react";

const ParagraphHeader = ({ customClasses, text }) => {
  return <h5 className={customClasses}>{text}</h5>;
};

export default ParagraphHeader;
