import React from "react";

const AppFooterMessage = ({ author }) => {
  return (
    <p className="fs-14 fc-white">
      Made with <i className="fas fa-heart fc-red" /> by {author}
    </p>
  );
};

export default AppFooterMessage;
