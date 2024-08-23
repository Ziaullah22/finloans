import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from './Paging/HomePage';
import AboutPage from './Paging/AboutPage';
import LoanPage from './Paging/LoanPage';
import BlogPage from './Paging/BlogPage';
import FaqPage from './Paging/FaqPage';
import ContactPage from './Paging/ContactPage';
function App() {
  return (
    
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/loan" element={<LoanPage/>} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
