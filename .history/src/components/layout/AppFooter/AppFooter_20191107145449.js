import React from "react";

const AppFooter = ({ author }) => {
  return (
    <footer className="app-footer bg-black min-h-50 flex flex--center">
      <p className="fs-14 fc-white">
        Made with <i className="fas fa-heart fc-red" /> by {author}
      </p>
    </footer>
  );
};

export default AppFooter;
