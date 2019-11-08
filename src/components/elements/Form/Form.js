import React, { useEffect } from "react";
import useForm from "react-hook-form";
import moment from "moment";
import "moment/locale/nl";

import "./FormStyling.scss";

import formFieldModels from "./FormFieldModels/FormFieldModels";

// Inserting a custom Hook for user input handling
import useInput from "./CustomHooks/useInputHook";
import FirstNameField from "./FormFields/FirstNameField/FirstNameInput";
import LastNameField from "./FormFields/LastNameField/LastNameInput";
import ReviewField from "./FormFields/ReviewField/ReviewField";

const Form = ({ productID }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    const dateOfPost = moment()
      .locale("nl")
      .format("D MMMM YYYY");

    const productReview = {
        productID,
        dateOfPost,
        firstname,
        lastname,
        review
      },
      localStorageKey = `reviewOf${firstname}${lastname}`;

    const setReviewToLocalstorage = (key, data) => {
      localStorage.setItem(key, JSON.stringify(data));
    };

    setReviewToLocalstorage(localStorageKey, productReview);
  };

  const [firstname, setFirstname] = useInput(""),
    [lastname, setLastname] = useInput(""),
    [review, setReview] = useInput("");

  const { firstNameProps, lastNameProps, reviewProps } = formFieldModels;

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
