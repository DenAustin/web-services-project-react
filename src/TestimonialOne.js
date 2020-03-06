import React from 'react'
import ServiceHeader from "./ServiceHeader"
import Texts from './components/Texts'


const TestimonialOne = () => {
   return (
      <div>
         <ServiceHeader slogan1="John Smith"/>
         <Texts text="Nunc blandit nisi ullamcorper elementum faucibus. Sed vitae dui sit amet nisl venenatis finibus. Aenean pulvinar luctus turpis, quis commodo metus fringilla at."/>
         <div className="pointerDiv">
         </div>
      </div>
   )
}

export default TestimonialOne
