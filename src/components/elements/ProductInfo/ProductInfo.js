import React, { Fragment } from "react";
import PageTitle from "../../atoms/Typography/Headers/PageTitle";
import Paragraph from "../../atoms/Typography/Misc/Paragraph";
import Strong from "../../atoms/Typography/Misc/Strong";

const ProductInfo = ({ product }) => {
  const { title, price, description } = product;
  return (
    <Fragment>
      <PageTitle text={title} customClasses="fs-40 mb-10 fc-purple" />

      <Strong text={price} currencyPrefix="€" customClasses="fs-28" />

      <Paragraph text={description} customClasses="mt-40" />
    </Fragment>
  );
};

export default ProductInfo;
