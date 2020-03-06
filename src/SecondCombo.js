import React from 'react'
//import Texts from "./components/Texts";
import Header from "./Header"
import ReadMore from "./components/ReadMore";
import Blog from './Blog';
import Blog3 from './Blog3';
import Slogan2 from "./Slogan2";



const SecondCombo = () => {
   return (
      <div className="BlogCombo">
        
         <div className="Blogs">
            <Blog />
            <Blog3 />
            <Blog />
            <Blog3 />
         </div>
      </div>

   )
}

export default SecondCombo
