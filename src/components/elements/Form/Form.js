import React, { useEffect } from "react";
import useForm from "react-hook-form";
import moment from "moment";
import "moment/locale/nl";

import "./FormStyling.scss";

import formFieldModels from "./FormFieldModels/FormFieldModels";

import FirstNameField from "./FormFields/FirstNameField/FirstNameInput";
import LastNameField from "./FormFields/LastNameField/LastNameInput";
import ReviewField from "./FormFields/ReviewField/ReviewField";

const Form = ({ productID }) => {
  // Fetch methods from useForm hook
  const { register, handleSubmit, errors } = useForm();

  // Destructure formfields from formFieldModels
  const { firstNameProps, lastNameProps, reviewProps } = formFieldModels;

  const additionalReviewProps = {
    // Datestamp for review
    dateOfPost: moment()
      .locale("nl")
      .format("D MMMM YYYY"),
    // ID of specific product
    productID
  };

  // Onsubmit handler which gets data from form, and adds two
  const onSubmit = formData => {
    const addAdditionalPropsTo = (formData, addReviewProps) => {
      for (const [key, value] of Object.entries(addReviewProps)) {
        formData[key] = value;
      }
      return formData;
    };

    const setReviewToLocalstorage = reviewData => {
      const { firstName, lastName } = reviewData;
      const localStorageKey = `reviewOf${firstName}${lastName}`;
      localStorage.setItem(localStorageKey, JSON.stringify(reviewData));
    };

    const productReview = addAdditionalPropsTo(formData, additionalReviewProps);

    setReviewToLocalstorage(productReview);
  };

  return (
    <form className="review-form fs-18" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-row">
        <FirstNameField
          {...firstNameProps}
          errors={errors}
          register={register({
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i
          })}
        />

        <LastNameField
          {...lastNameProps}
          errors={errors}
          register={register({
            required: true,
            maxLength: 40,
            pattern: /^[A-Za-z]+$/i
          })}
        />
      </div>

      <div className="form-row">
        <ReviewField
          {...reviewProps}
          errors={errors}
          register={register({ required: true, maxLength: 250 })}
        />
      </div>

      <div className="form-row">
        <div className="form-group col-md-12">
          <input
            className="fs-16 fc-white bg-purple btn btn--default btn--right mt-20 pv-10 ph-20 border-r-5"
            type="submit"
            value="submit"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
