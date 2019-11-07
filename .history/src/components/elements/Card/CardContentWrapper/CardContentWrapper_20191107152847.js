import React from "react";
import { Link } from "react-router-dom";
import SubTitle from "../../../atoms/Typography/Headers/Subtitle";

import "../../../atoms/Buttons/ButtonStyling.scss";
import Strong from "../../../atoms/Typography/Misc/Strong";

const CardContentWrapper = ({ title, price, id, match }) => {
  const LinkText = `View product`;
  return (
    <div className="card__content-wrapper col-12 col-sm-9 col-md-8 offset-md-1">
      <SubTitle customClasses="card__title  fc-purple" text={title} />

      <Strong
        customClasses="card__price fs-20 mv-20"
        text={price}
        currencyPrefix="€"
      />

      <Link
        className="fs-16 fc-white bg-purple btn btn--default btn--right pv-10 ph-20 border-r-5"
        to={`${match.path}products/${id}`}
      >
        {LinkText}
      </Link>
    </div>
  );
};

export default CardContentWrapper;
