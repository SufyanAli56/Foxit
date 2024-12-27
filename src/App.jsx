import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Slide from './components/Slide/Slide'
import Card from "./components/Card_page/Card";
import Slide2 from "./components/Slide/Slide2";
import Hero2 from "./components/Hero/Hero2";
import Testnomial_card from "./components/Testnomial_card/Testnomial_card";
import Testnomials2 from "./components/Testnomial_card/Testnomials2";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Slide/>
      <Card/>
      <Slide2/>
      <Hero2/>
      <Testnomial_card/>
      <Testnomials2/>
      <Form/>
      <Footer/>
    </div>
  );
};

export default App;
