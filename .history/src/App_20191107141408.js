import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppHeader from "./components/layout/AppHeader/AppHeader";
import AppMain from "./components/layout/AppMain/AppMain";
import AppFooter from "./components/layout/AppFooter/AppFooter";

function App() {
  return (
    <div className="App">
      <AppHeader />

      <AppMain />

      <AppFooter />
    </div>
  );
}

export default App;
