import React from 'react'
//import { View, Text } from 'react-native'
import image from "./Header.svg"
//import PhoneIcone from "./icons/PhoneIcone"

const Services = () => {
   return (
      <div className="services">
         <img src={image} className="App-logo" alt="logo" />
         <div className="h2">
            <h2 className="startWord">Superbly</h2>
            <h2 className="secondWord">Responsive</h2>
         </div>
         <p> Lorem ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy since the 1500s
         </p>
         <button className="ReadMoreBtn">READ MORE</button>
      </div>
   )
}

export default Services

