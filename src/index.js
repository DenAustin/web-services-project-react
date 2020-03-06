import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import FirstCombo from './FirstCombo';
import Header from "./Header";
import * as serviceWorker from "./serviceWorker";
import App from "./App"
//import SecondCombo from "./SecondCombo"
//import ThirdCombo from "./ThirdCombo"
//import Footer from "./Footer"
//import SocialMediaBarButtom from "./SocialMediaBarButtom"

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
