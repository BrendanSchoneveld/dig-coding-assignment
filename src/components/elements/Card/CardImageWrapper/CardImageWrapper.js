import React from "react";
import DefaultImage from "../../../atoms/Images/DefaultImage";

const CardImageWrapper = ({ altText, images, customClasses }) => {
  const imgSrc = images ? images[0].thumb : null;
  return (
    <div className={customClasses}>
      <DefaultImage
        customClasses="img-responsive"
        altText={altText}
        imgSrc={imgSrc}
      />
    </div>
  );
};

export default CardImageWrapper;
