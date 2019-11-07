import React from "react";

import { css } from "@emotion/core";
import { FadeLoader } from "react-spinners";
import SubTitle from "../../atoms/Headers/Subtitle";

import "./LoadingSpinnerStyling.scss";

const LoadingSpinner = ({ isLoading, text }) => {
  const override = css`
    position: relative;
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <div className="spinner-wrapper flex flex--direction-col flex--center">
      <SubTitle text={text} customClasses="mb-20 fc-purple" />
      <FadeLoader
        css={override}
        sizeUnit={"px"}
        size={150}
        color={"#3b0256"}
        loading={isLoading}
      />
    </div>
  );
};

export default LoadingSpinner;
