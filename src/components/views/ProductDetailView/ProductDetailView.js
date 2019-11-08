import React, { useState, useEffect } from "react";
import ProductSlider from "../../elements/ProductSlider/ProductSlider";
import ProductInfo from "../../elements/ProductInfo/ProductInfo";
import LoadingSpinner from "../../elements/LoadingSpinner/LoadingSpinner";
import Form from "../../elements/Form/Form";
import ProductReviews from "../../elements/Reviews/Reviews";
import BackLink from "../../atoms/Buttons/BackLink";

const ProductDetailView = props => {
  const [product, setProduct] = useState({}),
    [reviews, setReviews] = useState([]);

  const { productList, match, isLoading } = props,
    { id } = match.params,
    currentProductID = parseInt(id);

  const formTitle = `Please submit your experience with this product`,
    reviewsTitle = `Other reviews to this product`;

  // Fetch clicked productdetails with given id through match.params
  useEffect(() => {
    const fetchCurrentProduct =
      productList &&
      productList.find(product => {
        if (product.id === currentProductID) return product;
        return null;
      });

    setProduct(fetchCurrentProduct);
  }, [productList, currentProductID]);

  // Retrieve localStorage reviews
  useEffect(() => {
    // Logic to retrieve the reviews only for the current product
    const fetchReviewsOfCurrentProduct = (reviews, review, productID) => {
      if (productID === currentProductID) {
        reviews.push(review);
      }
    };

    // Fetch all reviews from localStorage
    const fetchReviews = () => {
      let reviews = [];

      for (let i = 0; i < localStorage.length; i++) {
        // Parse every review from a string to an object
        const parsedReview = JSON.parse(
          localStorage.getItem(localStorage.key(i))
        );

        fetchReviewsOfCurrentProduct(
          reviews,
          parsedReview,
          parsedReview.productID
        );
      }

      // set fetched reviews in setReviews state hook
      setReviews(reviews);
    };

    fetchReviews();
  }, [currentProductID]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  // Display product info through ProductSlider and ProductInfo
  const displaySelectedProduct = isLoading ? (
    <LoadingSpinner text="Product laden..." />
  ) : (
    <div className="col-12">
      <div className="row">
        <div className="col-10 offset-1 col-sm-6 offset-sm-0 mv-20">
          <ProductSlider
            images={product.images ? product.images : []}
            settings={sliderSettings}
          />
        </div>

        <div className="col-12 col-md-5 offset-md-1 mv-20">
          <ProductInfo product={product} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <BackLink
            linkClasses="fas fa-arrow-left mr-10"
            customClasses="fs-16 fc-purple lnk lnk--no-hover"
            path="/"
            text="Vorige pagina"
          />
        </div>
      </div>

      <div className="row">{displaySelectedProduct}</div>

      <div className="row mt-40">
        <div className="col-12 col-md-6 mv-20">
          <Form productID={currentProductID} formTitle={formTitle} />
        </div>

        <div className="col-12 col-md-5 offset-md-1 mv-20">
          <ProductReviews
            reviews={reviews}
            currentProductID={currentProductID}
            reviewsTitle={reviewsTitle}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;
