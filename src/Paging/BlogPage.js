import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome
import Footer from '../Components/Footer';
import Navbar4 from '../Navbar/Navbar4';
import Blog from '../Components/Blogs';


function BlogPage() {
  return (
    <>
      <Navbar4/>
      <br /><br /><br /><br /><br />
      <Blog/>
      <Footer/>
    </>
  );
}

export default BlogPage;
