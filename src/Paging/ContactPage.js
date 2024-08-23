import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome
import Footer from '../Components/Footer';
import Navbar6 from '../Navbar/Navbar6';
import Contact from '../Components/contact';


function ContactPage() {
  return (
    <>
      <Navbar6/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default ContactPage;
