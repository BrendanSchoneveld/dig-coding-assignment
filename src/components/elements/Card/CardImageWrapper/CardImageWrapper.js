import React from "react";
import DefaultImage from "../../../atoms/Images/DefaultImage";

const CardImageWrapper = ({ altText, images }) => {
  const imgSrc = images ? images[0].thumb : null;
  return (
    <div className="card__image-wrapper flex flex--center-v col-12 col-sm-3">
      <DefaultImage
        customClasses="img-responsive"
        altText={altText}
        imgSrc={imgSrc}
      />
    </div>
  );
};

export default CardImageWrapper;
