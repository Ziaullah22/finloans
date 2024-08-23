import React from 'react';
import Navbar from '../Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome
import Offers from '../Components/Offer';
import About from '../Components/About';
import Working from '../Components/Work';
import Work2 from '../Components/Work2';
import Slider from '../Components/Slider';
import Slider2 from '../Components/Slider2';

import Footer from '../Components/Footer';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Offers />
      <About />
      <Working />
      <Work2 />
      <Slider/>
      <Slider2/>
      <Footer/>
    </div>
  );
}

export default HomePage;
