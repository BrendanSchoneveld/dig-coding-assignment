import React from "react";
import Paragraph from "../../atoms/Typography/Paragraph";
import AppFooterMessage from "./AppFooterMessage";

const AppFooter = ({ author }) => {
  return (
    <footer className="app-footer bg-black min-h-50 flex flex--center">
      <AppFooterMessage author={author} />
    </footer>
  );
};

export default AppFooter;
