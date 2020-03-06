import React from "react";
import Header from "./Header";
import Slogan1 from "./Slogan1";
import Slogan2 from "./Slogan2";
import Slogan3 from "./Slogan3"
import Slogan4 from "./Slogan4";
import "./App.css";


const FirstCombo = () => {
  return (
    
      <div className="TopCombo">
        <Slogan1 />
        <Slogan2/>
        <Slogan3 />
        <Slogan4 />
      </div>
    
  );
};

export default FirstCombo;
