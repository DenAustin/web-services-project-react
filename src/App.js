import React from 'react';
import Header from "./Header";
import FirstCombo from "./FirstCombo";
import SecondCombo from "./SecondCombo";
import ThirdCombo from "./ThirdCombo";
import Footer from "./Footer";
import SlocialMediaButtom from "./SocialMediaBarButtom"
import SocialMediaBarButtom from './SocialMediaBarButtom';
import Border from "./Border"

function App() {
  return (
    <div className="App">
      <Header />
      <FirstCombo />
      <Border />
      <SecondCombo />
      <ThirdCombo />
      <Footer />
      <SocialMediaBarButtom />

    </div>
  );
}

export default App;
