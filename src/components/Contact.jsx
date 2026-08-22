import React from "react";
import { useState } from "react";
import { contactInfo } from "../assets/assets";
import { faqs } from "../assets/assets";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    weddingDate: "",
    package: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you for your message! We will get back to you within 24 hours",
    );
    setFormData({
      name: "",
      email: "",
      weddingDate: "",
      package: "",
      message: "",
    });
  };

  return (
    <div id="contact" className="py-20 relative">
      <div className=" inset-0 bg-linear-to-r from-champagne/20 to-cream/20 z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-4xl md:text-5xl font-bold font-playfair mb-6"
                data-aos="fade-up"
              >
                Let's <span className="text-gradient-gold">Connect</span>
              </h2>
              <p
                className="text-xl text-charcoal/80 max-w-3xl  mx-auto"
                data-aos="fade-up"
                data-aos-delay="200"
              >
              Get in touch with Traineea Education and discover the skills, courses, and opportunities waiting for you.
              </p>
            </div>

            {/* GRID */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div
                className="bg-white rounded-2xl p-8 shadow-xl"
                data-aos="fade-right"
              >
                <h3 className="text-2xl font-playfair font-bold mb-8">
                  Send a Message
                </h3>

                <form action="" onSubmit={handleSubmit} className="space-y-4">
                  {/* name and email field */}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2">
                        Your Name
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        name="name"
                        id="name"
                        className="w-full px-4 py-3 border border-champagne rounded focus:outline-none focus:ring-2 focus:ring-gold placeholder:text-xs"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        name="email"
                        id="email"
                        className="w-full px-4 py-3 border border-champagne rounded focus:outline-none focus:ring-2 focus:ring-gold placeholder:text-xs"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  {/* wedding date */}
                  <div>
                    <label className="block mb-2" htmlFor="weddingDate">
                     Joining Date
                    </label>
                    <input
                      type="date"
                      name="weddingDate"
                      id="weddingDate"
                      required
                      type="date"
                      className="w-full px-4 py-3 border border-champagne rounded focus:outline-none focus:ring-2 focus:ring-gold"
                      value={formData.weddingDate}
                      onChange={handleChange}
                    />
                  </div>

                  {/* packages */}
                  <div>
                    <label htmlFor="package" className="block mb-2">
                      Package
                    </label>

                    <select
                      name="package"
                      id="package"
                      onChange={handleChange}
                      value={formData.package}
                      required
                      className="w-full px-4 py-3 border border-champagne rounded focus:outline-none focus:ring-2 focus:ring-gold"
                    >
                      <option value="">Select a Package</option>
                      <option value="essential"> Graphics Designing</option>
                      <option value="premium">Web development</option>
                      <option value="luxary">Digital Marketing</option>
                      <option value="custom">Others</option>
                    </select>
                  </div>
                  {/* messege */}
                  <div>
                    <label htmlFor="message" className="block mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-champagne rounded focus:outline-none focus:ring-2 focus:ring-gold"
                      rows={4}
                    >
                      {" "}
                    </textarea>
                  </div>

                  <button className="w-full bg-gradient-gold text-white py-4 rounded font-medium hover:shadow-xl transition duration-300 cursor-pointer">
                    Send Message
                  </button>
                </form>
              </div>
              {/* contact  info*/}

              <div data-aos="fade-left">
                <h3 className="text-2xl font-playfair font-bold mb-8">
                  Get in Touch
                </h3>
                <div className="space-y-8">
                  {contactInfo.map((info, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="bg-gradient-gold p-4 rounded-full text-xl">
                        <info.icon />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">{info.title}</h4>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-charcoal/80">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* FAQ */}
                <div className="bg-cream rounded-2xl p-8">
                  <h4 className="font-bold text-2xl mb-6">
                    Freqently Asked Questions
                  </h4>
                  <div className="space-y-4">
                    {faqs.map((faq, i) => (
                      <div
                        key={i}
                        className="border-b border-champagne pb-4 last:border-0"
                      >
                        <h5 className="font-bold mb-2">{faq.question}</h5>
                        <p className="text-charcoal/70 text-sm">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
