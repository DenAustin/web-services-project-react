import React from 'react'
import ScrollUpIcon from "./icons/ScrollUpIcon"
import Hashtag from "./icons/Hashtag"
import Google from "./icons/Google"
import Twitter from "./icons/Twitter"
import Facebook from "./icons/Facebook"
import Copyright from "./icons/Copyright"
const SocialMediaBarButtom = () => {
   return (
      <div className="FooterButtom"> 
         <div className="copyright">
            <h4>COPYRIGHT</h4>
            <Copyright />
            <h4>2020-2030 Denis INC. ALL RIGHTS RESERVED.</h4>
         </div>        
         <div class="icon-bar">           
            <Facebook />
            <Twitter />
            <Google />
            <Hashtag />            
         </div>
         <ScrollUpIcon />
      </div>
   )
}

export default SocialMediaBarButtom
