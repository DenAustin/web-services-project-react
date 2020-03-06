import React from 'react'
import ServiceHeader from "./ServiceHeader"
import Texts from './components/Texts'
import ReadMore from "./components/ReadMore"


const Development = () => {
   return (
      <div>
         <div className="DevTopH3">
            <ServiceHeader slogan1="DESIGN" className="Design"/>
            <ServiceHeader slogan1="Production"/>
         </div>

         <div>
            <ServiceHeader slogan1="The Design"/>
            <Texts text="Nullam luctus libero et tincidunt laoreet. Nam ut interdum augue, nec laoreet turpis. In sagittis tortor magna, et venenatis leo malesuada quis." text="Luctus libero et tincidunt laoreet. Nam ut interdum augue, nec laoreet turpis."/>
            <Texts text="Ut imperdiet tempus elit, id sagittis ligula semper gravida. Cras vestibulum tempor augue a bibendum. Cras feugiat congue dui vitae rutrum."/>
         </div>
         <ReadMore label="Read More"/>
      </div>
   )
}

export default Development
