import React from "react";
import CardImageWrapper from "./CardImageWrapper/CardImageWrapper";
import CardContentWrapper from "./CardContentWrapper/CardContentWrapper";

import "./CardStyling.scss";

const Card = ({ images, title, match, price, id }) => {
  return (
    <div className="col-12 mt-4 mb-4">
      <div className="card card--shadow bg-white min-h-170 pv-20 ph-20">
        <div className="row">
          <CardImageWrapper
            images={images}
            altText={title}
            customClasses="card__image-wrapper flex flex--center-v col-8 offset-2 col-sm-4 offset-sm-0 col-lg-5 mv-20"
          />

          <CardContentWrapper
            title={title}
            price={price}
            match={match}
            id={id}
            customClasses="card__image-wrapper col-12 col-sm-7"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
