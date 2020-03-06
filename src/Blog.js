import React from 'react'
import image from "./components/img-placeholder.png";
import ServiceHeader from "./ServiceHeader";
import Texts from "./components/Texts";

const Blog = () => {
   return (
      <div>
         <img src={image} className="imgPlacehold" alt="img"/>
         <ServiceHeader blog="Blog Title"/>
         <Texts text="Sed nibh sapien, congue eget dapibus sit amet, malesuada vitae justo. Vivamus in enim eget arcu luctus tempus sit amet a sem."/>
      </div>
   )
}

export default Blog
