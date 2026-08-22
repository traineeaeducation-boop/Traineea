import React, { useState } from "react";
import { portfolioItems } from "../assets/assets";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const filterItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  const filters = [
    { id: "all", lable: "All Photos" },
    { id: "classrooms", lable: "Classrooms" },
    { id: "theory", lable: "Theory Classes" },
    { id: "practical", lable: "Practical Classes" },
        { id: "activity", lable: "Activity" },
  ];

  return (
    <section id="portfolio" className="py-20 bg-champagne/30 ">
      <div className="container mx-auto px-4">
        {/* section header */}
        <div className="text-center mb-16">
          <h2
            data-aos="fade-up"
            className="text-4x md:text-5xl font-playfair font-bold mb-6 "
          >
            Our <span className="text-gradient-gold">Academy</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl text-charcoal/80 max-w-3xl mx-auto"
          >
       A glimpse into our academy, classrooms, and the learning experiences we create
          </p>
        </div>
        {/* filter button */}
        <div
          data-aos="fade-up"
          className="flex flex-wrap justify-center gap-4 mb-12 "
        >
          {filters.map((filterItem, i) => (
            <button
              key={i}
              onClick={() => {
                setFilter(filterItem.id);
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${filter === filterItem.id ? "bg-gradient-gold text-white" : "bg-white text-charcoal hover-gradient-gold"}`}
            >
              {filterItem.lable}
            </button>
          ))}
        </div>
        {/* 
portfolio grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterItems.map((item, i) => (
            <div
              key={i}
              className="image-overlay rounded-e-2xl overflow-hidden shadow-lg cursor-pointer group"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {
                <img
                  className="w-full h-96 object-cover group-hover:scale-110 transition duration-700"
                  src={item.image}
                  alt={item.title}
                />
              }
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white text-xl font-bold">{item.title}</h4>
                  <span className="inline-block mt-2 px-3 py-1 bg-gradient-gold text-charcoal text-sm rounded-full">
                    {item.category.charAt(0).toUpperCase() +
                      item.category.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
