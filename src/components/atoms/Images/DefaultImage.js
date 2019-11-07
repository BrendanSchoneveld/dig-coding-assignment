import React from "react";

const DefaultImage = ({ customClasses, imgSrc, altText }) => {
  return <img className={customClasses} src={imgSrc} alt={altText} />;
};

export default DefaultImage;
