import React from "react";
import useForm from "react-hook-form";
import moment from "moment";
import "moment/locale/nl";

import "./FormStyling.scss";

import formFieldModels from "./FormFieldModels/FormFieldModels";

import FirstNameField from "./FormFields/FirstNameField/FirstNameInput";
import LastNameField from "./FormFields/LastNameField/LastNameInput";
import ReviewField from "./FormFields/ReviewField/ReviewField";

import Button from "../../atoms/Buttons/Button";
import ParagraphHeader from "../../atoms/Typography/Headers/ParagraphHeader";

const Form = ({ productID, formTitle }) => {
  // Fetch methods from useForm hook
  const { register, handleSubmit, errors } = useForm();

  // Destructure formfields from formFieldModels
  const { firstNameProps, lastNameProps, reviewProps } = formFieldModels;

  // Onsubmit handler which gets data from form
  const onSubmit = formData => {
    const additionalReviewProps = {
      // Datestamp for review
      dateOfPost: moment()
        .locale("nl")
        .format("D MMMM YYYY"),
      // ID of specific product
      productID
    };

    // Funtion that adds additional data to the review object
    const addAdditionalPropsTo = (formData, addReviewProps) => {
      for (const [key, value] of Object.entries(addReviewProps)) {
        formData[key] = value;
      }
      return formData;
    };

    // Setting the form data with additional properties to localStorage
    const setReviewToLocalstorage = reviewData => {
      const { firstName, lastName } = reviewData;
      const localStorageKey = `reviewOf${firstName}${lastName}`;
      localStorage.setItem(localStorageKey, JSON.stringify(reviewData));

      alert("Thank you for submitting your review");
    };

    const productReview = addAdditionalPropsTo(formData, additionalReviewProps);

    setReviewToLocalstorage(productReview);
  };

  return (
    <form className="review-form fs-18" onSubmit={handleSubmit(onSubmit)}>
      <ParagraphHeader customClasses="fc-purple mb-20 fs-24" text={formTitle} />
      <div className="form-row">
        <FirstNameField
          {...firstNameProps}
          errors={errors}
          register={register({
            required: true,
            maxLength: 20
          })}
        />

        <LastNameField
          {...lastNameProps}
          errors={errors}
          register={register({
            required: true,
            maxLength: 40
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
          <Button
            customClasses="fs-16 fc-white bg-purple btn btn--default btn--right mt-20 pv-10 ph-20 border-r-5"
            type="submit"
            text="submit"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
