import React, { Component } from 'react'
import image from "./components/img-placeholder.png";
import ServiceHeader from "./ServiceHeader";
import Texts from "./components/Texts";
import PhoneIcone from "./icons/PhoneIcone"
import "./App.css";

class Blog3 extends Component {
   render() {
      return (
         <div>
            <img src={image} className="imgPlacehold" alt="img"/>
            <ServiceHeader blog="Blog Title"/>
            <Texts text="Vestibulum in ligula ut dui interdum gravida eu id leo. Nulla eu consectetur leo. Aliquam risus eros, ornare et quam quis, commodo ultrices dolor."/> 
         </div>
      )
   }
}

export default Blog3
