import React from "react";
import { scrollToSection } from "../utils/scrollToSection";
import { assets } from "../assets/assets";
import { portfolioItems } from "../assets/assets";
import { FaAward, FaCamera } from "react-icons/fa";
const About = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className=" flex flex-col md:flex-row items-center gap-12">
          {/* image */}
          <div className="lg:w-1/2 relative " data-aos="fade-right">
            <div className="relative rounded-e-2xl  overflow-hidden shadow-2xl animate-float">
              <img
                src={assets.aboutImg}
                alt="Photographer"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6  -right-6 bg-gradient-rose  text-white px-6 py-3  rounded-full shadow-lg">
              <span className="font-bold">12+ Years Experience</span>
            </div>
          </div>
          {/* content */}
          <div className="lg:w-1/2" data-aos="fade-left">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
             Learn From Our Experience,
              <span className="text-gradient-rose"> Create Your Own Success</span>
            </h2>

            <p className="text-lg text-charcoal/80 mb-6">
             With years of experience and a passion for what we do,
             we believe that knowledge becomes truly valuable when it is shared. 
             Through our trainee education programs, we give aspiring professionals
              the opportunity to learn from our journey, understand concepts, 
              and gain practical insights from real-world experienced faculties.

            </p>

            <p className="text-lg text-charcoal/80 mb-8">
             Our aim is to help trainees build valuable skills, develop confidence, and discover their potential. By learning from our experiences and applying that knowledge in their own journey, trainees can take meaningful steps toward creating a successful future.

            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-gold p-3 rounded-full">
                  <FaCamera className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Courses and Opportunities</h4>
                  <p className="text-charcoal/70">
                  Empowering Learners Through Technology
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-gold p-3 rounded-full">
                  <FaAward className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Award Winning </h4>
                  <p className="text-charcoal/70">
                   Redefining Excellence in Computer Education
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-rose text-white px-8 py-4 rounded-full font-medium hover:shadow-xl hover:shadow-rose/30 transition duration-300 cursor-pointer"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
