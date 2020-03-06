import React, { Component } from 'react'
import image from "./Header.svg"
import ServiceHeader from "./ServiceHeader";
import Texts from "./components/Texts";
import ReadMore from "./components/ReadMore" 
import ComputerIcone from "./icons/ComputerIcone"
import './App.css';

class Slogan4 extends Component {
   render() {
      return (
         <div>
            <div className="iconDiv">
               <ComputerIcone /> 
            </div> 
            <ServiceHeader slogan4="Highly Flexible"/>
            <Texts text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
            <ReadMore label="Read More"/>
         </div>
      )
   }
}

export default Slogan4
