import React, { useState, useEffect } from "react";
import axios from "axios";

import AppMain from "./components/layout/AppMain/AppMain";
import AppFooter from "./components/layout/AppFooter/AppFooter";

import "./AppStyling.scss";

const App = () => {
  const [productList, setProductList] = useState([]),
    [isLoading, updateIsLoading] = useState(false);

  
  useEffect(() => {
    // Benodigde URL om producten op te halen
  const fetchParams = {
    URL: `http://private-5815fe-recommendationsknip.apiary-mock.com/products`
  };

    // Haal de data asynchroon op met de benodigde URL
    const fetchData = async ({URL}) => {
      // Loading spinner activeren
      updateIsLoading(true);
      // Voor error handling, logica binnen een try catch statement gezet
      try {
        const result = await axios(URL);

        // Vul de productList met de data vanuit de Async Await promise
        setProductList(result.data);

        // Loading spinner deactiveren
        updateIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(fetchParams);
  }, []);

  return (
    <div className="app">
      <AppMain productList={productList} isLoading={isLoading} />

      <AppFooter author="Brendan" />
    </div>
  );
};

export default App;
