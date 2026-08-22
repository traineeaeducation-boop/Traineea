import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaYoutube
} from "react-icons/fa";
import { quickLinks } from "../assets/assets";
import { serviceLinks } from "../assets/assets";
import { socialLinks } from "../assets/assets";
import { scrollToSection } from "../utils/scrollToSection";
const Footer = () => {
  return (
    <div className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* logo and description */}
          <div className="md:col-span-1 ">
            <div className="text-3xl font-playfair font-bold text-gradient-gold mb-4 ">
            Traineea
            </div>
            <p className="text-white/70 mb-6">
             Building skills, shaping careers, and preparing students for the future.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((link, i) => (
                <a key={i} target="_blank"
                  className="bg-white/10 w-10 h-10 rounded-full flex  items-center justify-center hover:bg-gold trasition duration-300"
                  href={link.href}
                >
                  <link.icon/>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className="text-white/70 hover:text-gold transition duration-300 text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* services
           */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className="text-white/70 hover:text-gold transition duration-300 text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* news letter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Stay Updated</h4>
            <p className="text-white mb-4">
          Stay updated with new courses, training tips, and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                name=""
                id=""
                className="newsletter border border-gold focus:outline-none px-4 py-3 rounded-l-lg w-full text-white"
              />
              <button className="bg-gradient-gold px-4 py-3 rounded-r-lg font-medium text-white ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* COPYRIGHT */}

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p className="text-xs">
            ©️ 2026 Techeatcode. All rights reserved.
            <span>Created for Traineea Education</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
