import React, { Fragment } from "react";
import DefaultImage from "../../atoms/Images/DefaultImage";
import Slider from "react-slick";
import uuid from 'uuid/v4'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./ProductSliderStyling.scss";

const ProductSlider = ({ settings, images }) => {
  const displaySlides =
    images.length &&
    images.map(({ original }) => {
      return (
        <div className="bg-purple border-r-5 p-20" key={uuid()}>
          <DefaultImage imgSrc={original} customClasses="img-responsive" />
        </div>
      );
    });

  return (
    <Fragment>
      <Slider {...settings}>{displaySlides}</Slider>
    </Fragment>
  );
};

export default ProductSlider;
