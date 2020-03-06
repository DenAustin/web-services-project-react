import React from 'react'
import image from "./Header.svg";
import ServiceHeader from "./ServiceHeader";
import Texts from "./components/Texts";
import PhoneIcone from "./icons/PhoneIcone"
import ReadMore from "./components/ReadMore"

//import ReadMore from "./components/ReadMore"

const Slogan1 = () => {
   return (
      <div className="Slogan3">   
         <div className="iconDiv">
            <PhoneIcone className="phoneImage"/> 
         </div> 
         <ServiceHeader slogan1="Superbly Responsive"/>
         <Texts text="Sed ac risus sit amet mi scelerisque iaculis. Aenean sollicitudin dictum nunc vel dignissim. Vestibulum at ipsum ut velit ultrices placerat sit amet a orci. Sed nibh sapien, congue eget dapibus sit amet, malesuada vitae justo."/>  
         <ReadMore label="Read More"/>  
      </div>
   )
}

export default Slogan1
