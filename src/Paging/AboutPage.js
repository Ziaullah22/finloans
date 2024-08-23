import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome
import About from '../Components/About';
import Working from '../Components/Work';
import Work2 from '../Components/Work2';
import Slider from '../Components/Slider';
import Slider2 from '../Components/Slider2';
import Footer from '../Components/Footer';
import Navbar2 from '../Navbar/Navbar2';


function AboutPage() {
  return (
    <>
      <Navbar2/>
      <About />
      <Working />
      <Work2 />
      <Slider/>
      <Slider2/>
      <Footer/>
    </>
  );
}

export default AboutPage;
