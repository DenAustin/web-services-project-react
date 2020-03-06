import React, { Component } from 'react'
import ComputerIcone from "./icons/ComputerIcone"
import image from "./Header.svg";
import ServiceHeader from "./ServiceHeader";
import Texts from "./components/Texts";
import ReadMore from "./components/ReadMore"


class Slogan3 extends Component {
   render() {
      return (
         <div className="SloganThree">
            <div className="iconDivThird">
               <ComputerIcone className="iconDivThird"/> 
            </div> 
            <ServiceHeader slogan3="Multi Purpose"/>
            <Texts text="Vivamus at velit at arcu luctus eleifend. Proin sit amet ullamcorper tortor. Vestibulum vel viverra odio. Nam odio magna, bibendum ut augue sit amet, rutrum tincidunt velit. Vestibulum in ligula ut dui interdum gravida eu id leo. Nulla eu consectetur leo."/>
            <ReadMore label="Pointed end"/>
         </div>
      )
   }
}
export default Slogan3





