import React from "react";
import { testimonials } from "../assets/assets";
const Testimonials = () => {
  return (
    <div id="testimonials"  className="py-20 bg-white">
      <div className="container mx-auto px-4 ">
        {/* section header */}
        <div className="text-center mb-16">
          <p
            className="text-xl md:text-5xl font-playfair font-bold mb-6"
            data-aos="fade-up"
          >
            Happy <span className="text-gradient-rose">Trainees</span>
          </p>

          <p
            className="text-xl text-charcoal/80 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            What our students have to say about thier experience
          </p>
        </div>
        {/* 
        Testimonials grid */}

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-cream rounded-2xl p-8 testimonial-card hover:translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-charcoal/70 text-xs">
                    {" "}
                    {testimonial.date}
                  </p>
                </div>
              </div>

              <p className="text-charcoal/80 text-xm">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
