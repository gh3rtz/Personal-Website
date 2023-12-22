import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Tech from "./components/Tech";
import Portofolio from "./components/Portofolio";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { inject } from "@vercel/analytics";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Initialize Vercel Analytics
    inject(); // Use the inject method to initialize Vercel Analytics
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Track event when dark mode is toggled
    // Use other tracking methods or integrations as provided by Vercel Analytics
  };

  return (
    <BrowserRouter>
      <ThemeProvider value={{ isDarkMode, toggleDarkMode }}>
        <div className={`App ${isDarkMode ? "dark" : ""}`}>
          <Navbar />
          <About />
          <Tech />
          <Portofolio />
          <CTA />
          <Contact />
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
