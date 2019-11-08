import React from "react";
import ProductReview from "./ProductReview/ProductReview";

import uuid from "uuid/v4";
import Paragraph from "../../atoms/Typography/Misc/Paragraph";
import ParagraphHeader from "../../atoms/Typography/Headers/ParagraphHeader";

const Reviews = ({ reviews, currentProductID, reviewsTitle }) => {
  const noReviewsAlert = `No reviews yet, be the first!`;

  const displayReviews = reviews.length ? (
    reviews.map(review => {
      if (review.productID === currentProductID) {
        return <ProductReview {...review} key={uuid()} />;
      }
      return null;
    })
  ) : (
    <div>
      <Paragraph customClasses="fs-16 fc-black" text={noReviewsAlert} />
    </div>
  );

  return (
    <div>
      <ParagraphHeader text={reviewsTitle} customClasses="fc-purple mb-20" />
      {displayReviews}
    </div>
  );
};

export default Reviews;
