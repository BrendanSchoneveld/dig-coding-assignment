import React from "react";
import Span from "../../../atoms/Typography/Misc/Span";

import "./ProductReviewStyling.scss";
import Paragraph from "../../../atoms/Typography/Misc/Paragraph";
import Strong from "../../../atoms/Typography/Misc/Strong";

const ProductReview = ({ dateOfPost, firstName, lastName, review }) => {
  return (
    <div className="review bg-purple border-r-5 p-20">
      <div className="review__head">
        <Span text={`${dateOfPost}`} customClasses="fs-14 fc-white block" />

        <Strong
          text={`Placed by: ${firstName} ${lastName}`}
          customClasses="fs-16 fc-white mb-20 block"
        />
      </div>

      <div className="review__body">
        <Paragraph text={review} customClasses="fc-white" />
      </div>
    </div>
  );
};

export default ProductReview;
