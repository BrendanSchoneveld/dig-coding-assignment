import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductSlider from "../../elements/ProductSlider/ProductSlider";
import ProductInfo from "../../elements/ProductInfo/ProductInfo";
import LoadingSpinner from "../../elements/LoadingSpinner/LoadingSpinner";
import Form from "../../elements/Form/Form";
import ProductReviews from "../../elements/Reviews/Reviews";
import ParagraphHeader from "../../atoms/Typography/Headers/ParagraphHeader";

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
      });

    setProduct(fetchCurrentProduct);
  });

  const fetchReviewsOfCurrentProduct = (reviews, review, productID) => {
    if (productID === currentProductID) {
      reviews.push(review);
    }
  };

  useEffect(() => {
    const fetchReviews = () => {
      let reviews = [];
      for (let i = 0; i < localStorage.length; i++) {
        const parsedReview = JSON.parse(
          localStorage.getItem(localStorage.key(i))
        );

        fetchReviewsOfCurrentProduct(
          reviews,
          parsedReview,
          parsedReview.productID
        );

        /* if (parsedReview.productID === currentProductID) {
          reviews.push(parsedReview);
        } */
      }
      setReviews(reviews);
    };

    fetchReviews();
  }, []);

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
          <Link className="fs-16 fc-purple" to="/">
            Vorige pagina
          </Link>
        </div>
      </div>

      <div className="row">{displaySelectedProduct}</div>

      <div className="row mt-40">
        <div className="col-12 col-md-6 mv-20">
          <ParagraphHeader customClasses="fc-purple mb-20" text={formTitle} />
          <Form productID={currentProductID} />
        </div>

        <div className="col-12 col-md-5 offset-md-1 mv-20">
          <ParagraphHeader
            text={reviewsTitle}
            customClasses="fc-purple mb-20"
          />
          <ProductReviews
            reviews={reviews}
            currentProductID={currentProductID}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;
