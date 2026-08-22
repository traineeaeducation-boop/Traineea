import React from "react";
import { packages } from "../assets/assets";
import { IoCheckmarkCircle } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";
const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-20 bg-linear-to-r from-champagne/50 to-cream"
    >
      <div className="container mx-auto px-4">
        {/* section header */}
        <div className="text-center mb-16">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl  font-playfair font-bold mb-6"
          >
        Popular  <span className="text-gradient-gold">Courses</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl text-charcoal/80  max-w-3xl mx-auto"
          >
            Explore some of our most popular and in-demand training programs.
          </p>
        </div>

        {/* Pricing Card */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {packages.map((pkg, ind) => (
            <div
              key={ind}
              className={`bg-white rounded-2xl  p-8 shadow-lg relative ${pkg.featured ? "shadow-2xl transform scale-105 border-2 border-rose" : ""} hover:-translate-y-2 transition-all duration-200`}
            >
              {pkg.featured && (
                <div className="absolute top-0 right-0 bg-gradient-rose text-white px-6 py-2 rounded-tr-2xl rounded-bl-lg">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-playfair font-bold mb-4">
                  {pkg.name}
                </h3>
                <div
                  className={`text-5xl font-bold text-gradient ${pkg.color} mb-2 line-through decoration-red-500 `}
                >
                  {pkg.price}
                </div>
                <p className="text-charcoal/70">{pkg.description}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    {feature.included ? (
                      <IoCheckmarkCircle
                        className={`text-${pkg.color} mr-3 text-xl`}
                      />
                    ) : (
                      <IoCloseCircle className="text-charcoal/30 mr-3 text-xl" />
                    )}
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  scrollToSection("contact");
                }}
                className={`w-full bg-gradient-${pkg.color} text-white py-4 rounded-full font-medium hover:shadow-lg transition duration-300 cursor-pointer`}
              >
               Contact For Price
              </button>
            </div>
          ))}
        </div>
        {/* Custom packages */}
        <div className="text-center mt-12" data-aos="fade-up">
          <p className="text-xl text-charcoal/80 mb-6">
            Need a custom package? We'd love to create just one for you
          </p>
          <button className="inline-block border-2  border-gold text-gold px-8 py-4 rounded-full font-medium hover-gradient-gold hover:text-white transition duration-300  cursor-progress">
            Request Custom Package
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
