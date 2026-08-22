import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { services } from "../assets/assets";
const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        {/* section head */}

        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-playfair font-bold mb-6"
            data-aos="fade-  up"
          >
            Our <span className="text-gradient-rose">Services</span>
          </h2>
          <p
            className="text-xl text-charcoal/80  max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Industry-focused courses designed to build real-world skills
          </p>
        </div>
        {/* service card */}

        <div
          className=" grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          data-aos="fade-up"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:transition-all hover-duration-300 cursor-pointer"
            >
              <div
                className={`bg-gradient-${service.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white text-2xl`}
              >
                <service.icon />
              </div>
              <h3 className="text-2xl font-playfair font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-charcoal/70 mb-6">{service.description}</p>
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, ind) => (
                  <li key={ind} className="flex items-center">
                    <IoCheckmarkCircle
                      className={`text-${service.color} mr-3 text-xl `}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
