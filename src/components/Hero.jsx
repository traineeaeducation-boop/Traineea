import React from "react";
import { assets } from "../assets/assets";
import { scrollToSection } from "../utils/scrollToSection";
const Hero = () => {
  return (
    <section id="home" className="pt-20 md:pt-24 relative clip-path-hero">
      <div className="relative h-screen flex items-center">
        {/* 
      BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0 hero-bg ">
          <img
            className="h-full w-full object-cover"
            src={assets.bgImg}
            alt="background image"
          />
          <div className="absolute inset-0 bg-linear-to-r from charcoal/70 to-charcoal/50"></div>
        </div>

        {/* hero content */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative  z-10 ">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair text-white mb-6 font-bold">
              Start Your Learning {" "}<span className="text-gradient-gold"> Journey Today</span>
            </h1>
            <p className="text-xl  md:text-2xl text-white/90 mb-10">
        Transform your passion for technology into a profession with our comprehensive, practical, and industry-relevant computer courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="bg-gradient-gold text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl hover:shadow-gold/30 transition duration-300 cursor-pointer"
              >
                view our work
              </button>
              <button  onClick={() => scrollToSection("contact")}   className="bg-transparent border-2 border-white text-white py-8 px-4 rounded-full text-lg font-medium hover:bg-white/10 transition duration-300 cursor-pointer">
                get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
