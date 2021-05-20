import React from "react";
import { MainContainer } from "./app/components/MainContainer";
import { MainNavbar } from "./app/components/navbar/MainNavbar";
import "./style.scss";

const App = () => {
  return (
    <div className="App bg-light min-vh-100">
      <MainNavbar />
      <MainContainer />
    </div>
  );
};

export default App;
