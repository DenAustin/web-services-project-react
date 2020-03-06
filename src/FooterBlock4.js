import React from 'react'
import ServiceHeader from "./ServiceHeader"
import GridBlocks from "./components/GridBlocks"



const FooterBlock4 = () => {
   return (
      <div>
         <ServiceHeader slogan1="FLICKER" />
         <div className="Grids">
            <div className="FirstGrid">
               <GridBlocks />
               <GridBlocks />
               <GridBlocks />
               <GridBlocks />
            </div>
            <div className="SecondGrid">
               <GridBlocks />
               <GridBlocks />
               <GridBlocks />
               <GridBlocks />
            </div>
         </div>
      </div>
   )
}

export default FooterBlock4
