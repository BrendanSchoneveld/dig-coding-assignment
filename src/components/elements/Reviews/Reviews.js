import React from "react";
import ProductReview from "./ProductReview/ProductReview";

const Reviews = ({ reviews, currentProductID }) => {
  console.log(reviews);
  const displayReviews = reviews.length ? (
    reviews.map(review => {
      if (review.productID === currentProductID) {
        return <ProductReview {...review} />;
      }
    })
  ) : (
    <div>
      <div>Nog geen reviews, weest de eerste!</div>
    </div>
  );

  return <div>{displayReviews}</div>;
};

export default Reviews;
