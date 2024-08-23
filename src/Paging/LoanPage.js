import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome
import About from '../Components/About';
import Working from '../Components/Work';
import Work2 from '../Components/Work2';
import Slider2 from '../Components/Slider2';
import Footer from '../Components/Footer';
import Navbar3 from '../Navbar/Navbar3';
import Loan from '../Components/Loan';


function LoanPage() {
  return (
    <>
      <Navbar3/>
      <About />
      <Working />
      <Work2 />
      <Loan/>
      <Footer/>
    </>
  );
}

export default LoanPage;
