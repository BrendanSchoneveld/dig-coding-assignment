import React from "react";
import { Switch, Route } from "react-router-dom";

import "./AppMainStyling.scss";

import routes from "../../../routing/routes";

const AppMain = ({ productList, isLoading }) => {
  // Render routes into AppMain component
  const setRoutes = routes.map(({ path, Component, id }) => (
    <Route
      exact
      key={id}
      path={path}
      render={props => (
        <Component {...props} productList={productList} isLoading={isLoading} />
      )}
    />
  ));

  return (
    <main className="app-main pv-100" role="main">
      <Switch>{setRoutes}</Switch>
    </main>
  );
};

export default AppMain;
