import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Tech from "./components/Tech";
import Portofolio from "./components/Portofolio";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
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
        <SpeedInsights />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
