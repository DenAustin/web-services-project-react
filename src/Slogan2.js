import React, { Component } from 'react'
import image from "./Header.svg";
import ServiceHeader from "./ServiceHeader";
import Texts from "./components/Texts";
import ReadMore from "./components/ReadMore"
import ComputerIcone from "./icons/ComputerIcone"

class Slogan2 extends Component {
   render() {
      return (
         <div className="SloganThree">
            <div className="iconDiv">
               <ComputerIcone /> 
            </div> 
            <ServiceHeader slogan2="Squeeky Clean"/>
            <Texts text="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."/>
            <ReadMore label="Read More"/>
         </div>
      )
   }
}

export default Slogan2
