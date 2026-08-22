import React, { useEffect } from "react";
import AOS from "aos";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Portfolio from "./components/Portfolio.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Pricing from "./components/Pricing.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });

    //parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroBG = document.querySelector(".hero-bg");
      if (heroBG) {
        heroBG.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-cream text-charcoal font-inter">
      <Navbar></Navbar>
      <Hero />
      <Stats></Stats>
      <Portfolio></Portfolio>
      <About />
      <Services />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
