import React from "react";
import moment from "moment";
import "moment/locale/nl";

import "./FormStyling.scss";

// Inserting a custom Hook for user input handling
import useInput from "./CustomHooks/useInputHook";
import FirstNameField from "./FormFields/FirstNameField/FirstNameInput";
import LastNameField from "./FormFields/LastNameField/LastNameInput";
import ReviewField from "./FormFields/ReviewField/ReviewField";

const Form = ({ productID }) => {
  const [firstname, setFirstname] = useInput(""),
    [lastname, setLastname] = useInput(""),
    [review, setReview] = useInput("");

  const firstNameProps = {
    groupClasses: "form-group col-md-6",
    inputProps: {
      inputTag: "input",
      id: "firstName",
      type: "text",
      customClasses: "form-control",
      placeholder: "Firstname here..."
    },
    labelProps: {
      target: "firstName",
      text: "Firstname",
      customClasses: ""
    }
  };

  const lastNameProps = {
    groupClasses: "form-group col-md-6",
    inputProps: {
      inputTag: "input",
      id: "review",
      type: "text",
      customClasses: "form-control",
      placeholder: "Lastname here..."
    },
    labelProps: {
      target: "lastName",
      text: "Lastname",
      customClasses: ""
    }
  };

  const reviewProps = {
    groupClasses: "form-group col-md-12",
    inputProps: {
      inputTag: "textarea",
      id: "review",
      type: "text",
      numRows: 5,
      customClasses: "form-control",
      placeholder: "Type your review here..."
    },
    labelProps: {
      target: "review",
      text: "Review",
      customClasses: ""
    }
  };

  const dateOfPost = moment()
    .locale("nl")
    .format("D MMMM YYYY");

  const handleSubmit = e => {
    e.preventDefault();

    const productReview = {
      productID,
      dateOfPost,
      firstname,
      lastname,
      review
    };

    const localStorageKey = `reviewOf${firstname}${lastname}`;

    localStorage.setItem(localStorageKey, JSON.stringify(productReview));
  };

  return (
    <form className="review-form fs-18" onSubmit={handleSubmit}>
      <div className="form-row">
        <FirstNameField
          {...firstNameProps}
          setFirstname={setFirstname}
          value={firstname}
        />

        <LastNameField
          {...lastNameProps}
          setLastname={setLastname}
          value={lastname}
        />
      </div>

      <div className="form-row">
        <ReviewField {...reviewProps} setReview={setReview} value={review} />
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
