import React from "react";
import Card from "../../elements/Card/Card";

import LoadingSpinner from "../../elements/LoadingSpinner/LoadingSpinner";

const HomeView = ({ productList, match, isLoading }) => {
  const displayProducts = isLoading ? (
    <LoadingSpinner isLoading={isLoading} text="Producten laden..." />
  ) : (
    productList.map(({ id, title, price, images }) => {
      return (
        <Card
          key={id}
          id={id}
          title={title}
          price={price}
          images={images}
          match={match}
        />
      );
    })
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <div className="row">{displayProducts}</div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
