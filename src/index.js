import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Portofolio from './components/Portofolio';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  

  <React.StrictMode>
    <Navbar />
    <About />
    <Portofolio />
    <Contact />
    <CTA />
    <Footer />
  </React.StrictMode>
);
