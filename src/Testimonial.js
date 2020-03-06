import React, { Component } from 'react'
import ReadMore from "./components/ReadMore";

export class Testimonial extends Component {
   render() {
      return (
         <div className="TestimonialDiv   ">
            <ReadMore className="testimonial"/>
            <ReadMore className="development"/>
         </div>
      )
   }
}

export default Testimonial
