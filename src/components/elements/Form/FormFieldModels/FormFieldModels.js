const formFieldModels = {
  firstNameProps: {
    groupClasses: "form-group col-md-6",
    inputProps: {
      inputTag: "input",
      id: "firstName",
      type: "text",
      name: "firstName",
      customClasses: "form-control",
      placeholder: "Firstname here..."
    },
    labelProps: {
      target: "firstName",
      text: "Firstname",
      customClasses: ""
    }
  },
  lastNameProps: {
    groupClasses: "form-group col-md-6",
    inputProps: {
      inputTag: "input",
      id: "review",
      type: "text",
      name: "lastName",
      customClasses: "form-control",
      placeholder: "Lastname here..."
    },
    labelProps: {
      target: "lastName",
      text: "Lastname",
      customClasses: ""
    }
  },
  reviewProps: {
    groupClasses: "form-group col-md-12",
    inputProps: {
      inputTag: "textarea",
      id: "review",
      type: "text",
      name: "review",
      numRows: 8,
      customClasses: "form-control",
      placeholder: "Type your review here..."
    },
    labelProps: {
      target: "review",
      text: "Review",
      customClasses: ""
    }
  }
};

export default formFieldModels;
