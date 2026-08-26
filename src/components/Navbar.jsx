import React, { useEffect, useState } from "react";
import { navLinks } from "../assets/assets";
import { scrollToSection } from "../utils/scrollToSection";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = function (link) {
    setActiveLink(link);
   
  };
useEffect(()=>{


  if(activeLink){
 scrollToSection(activeLink);

  }
})
  return (
    <div className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 ">
        <div
       
          className="flex items-center justify-between"
        >
          {/* LOGO */}
          <div className="text-3x font-playfair font-bold text-gradient-gold cursor-pointer "    onClick={() => scrollToSection("home")}>
           Traineea Education
          </div>
          {/* Desktop mavigation */}
          <div className="hidden md:flex  space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={`nav-link relative text-charcoal hover:text-gold font-medium transition duration-300 cursor-pointer ${activeLink === link.id ? "active" : ""}`}
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
              </button>
            ))}
            {/* CTA BUTTON */}
            <div className="hidden md:block ">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-gold  text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-gold/30 transition duration-300 cursor-pointer"
              >
                Book a Session
              </button>
            </div>
          </div>

          {/* mobile menu button */}

          <button
            className="md:hidden text-charcoal"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FaXmark className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}{" "}
          </button>
        </div>
        {/* mobile Navigation */}
        <div
          className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden mt-4 p-4`}
        >
          <div className="flex flex-col  space-y-6 ">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setMobileMenuOpen(!isMobileMenuOpen);
                  handleNavClick(link.id);
                }}
                className="text-charcoal hover:text-gold font-medium text-left"
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-gold text-white px-6 py-3 rounded-full font-medium text-center mt-2"
            >
              Book A Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
