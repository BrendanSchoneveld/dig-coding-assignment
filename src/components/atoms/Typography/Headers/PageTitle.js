import React from "react";

const PageTitle = ({ customClasses, text }) => {
  return <h1 className={customClasses}>{text}</h1>;
};

export default PageTitle;
