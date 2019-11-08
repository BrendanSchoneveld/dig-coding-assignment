import React from "react";
import { Link } from "react-router-dom";
import SubTitle from "../../../atoms/Typography/Headers/Subtitle";

import "../../../atoms/Buttons/ButtonStyling.scss";
import Strong from "../../../atoms/Typography/Misc/Strong";

const CardContentWrapper = ({ title, price, id, match, customClasses }) => {
  const LinkText = `View product`;
  return (
    <div className={customClasses}>
      <SubTitle customClasses="card__title mv-10 fc-purple" text={title} />

      <Strong
        customClasses="card__price fs-28 txt--r fc-orange mv-20"
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
