import React from "react";
import CardImageWrapper from "./CardImageWrapper/CardImageWrapper";
import CardContentWrapper from "./CardContentWrapper/CardContentWrapper";

import "./CardStyling.scss";

const Card = ({ images, title, match, price, id }) => {
  return (
    <div className="col-12 mt-4 mb-4">
      <div className="card card--shadow bg-white min-h-170 pv-20 ph-20">
        <div className="row">
          <CardImageWrapper images={images} altText={title} />

          <CardContentWrapper
            title={title}
            price={price}
            match={match}
            id={id}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
