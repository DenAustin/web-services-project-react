import React from 'react';
import ServiceHeader from "./ServiceHeader"
import Texts from "./components/Texts"

const FooterBlock1 = () => {
   return (
      <div className="Footer">
         <ServiceHeader slogan1="ABOUT US"/>
         <Texts text="I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born. Aenean pulvinar luctus turpis, quis commodo metus fringilla at. "/>
         <Texts text="Aenean pulvinar luctus turpis, quis commodo metus fringilla at."/>
      </div>
   )
}

export default FooterBlock1
