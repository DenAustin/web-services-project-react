import React from 'react'
import Development from "./Development"
import TestimonialOne from "./TestimonialOne"
import TestimonialTwo from "./TestimonialTwo"
import TestimonialThree from "./TestimonialThree"
import TestimonialFour from "./TestimonialFour"

const ThirdCombo = () => {
   return (
      <div className="TestimonialAndDevelopment">
         <div className="Testimo">
            <div className="TestimoLeft"> 
               <TestimonialOne className="TestimoLeftTop"/>
               <TestimonialTwo className="TestimoLeftButtom"/>
            </div>
            <div className="TestimoRight">
               <TestimonialThree className="TestimoRightTop"/>
               <TestimonialFour className="TestimoRightButtom"/>
            </div>
         </div>

         <Development className="Dev"/>
      </div>
   )
}

export default ThirdCombo



