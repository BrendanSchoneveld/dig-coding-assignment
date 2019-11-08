import React from "react";
import { Link } from "react-router-dom";

import "./BackLinkStyling.scss";

const BackLink = ({ customClasses, path, linkClasses, text }) => {
  return (
    <Link className={customClasses} to={path}>
      <i className={linkClasses}></i> {text}
    </Link>
  );
};

export default BackLink;
