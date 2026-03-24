import React from "react";
import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";

const AboutSection3 = () => {
  const teamMembers = [
    {
      name: "Shivraj",
      role: "CEO & Founder",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Sanket",
      role: "Technical Lead",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Tukaram",
      role: "Sr. Developer",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Mayur",
      role: "AI Developer",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Rushikesh",
      role: "UI Designer",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-[#f8fafc] overflow-hidden font-sans">
    
<div
  className="absolute top-0 left-0 w-full h-64 bg-purple-600 opacity-20 transition-all"
  style={{ borderRadius: "0 0 50% 50% / 0 0 20% 20%" }}
></div>
     
      <div
        className="absolute bottom-0 left-0 w-full h-40 bg-purple-600 opacity-20 transition-all"
        style={{ borderRadius: "50% 50% 0 0 / 20% 20% 0 0" }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Main White Card Wrapper */}
        <div className="bg-white shadow-2xl rounded-sm p-8 md:p-16 min-h-screen">
          <div className="flex flex-col items-center text-center mb-10 border-b pb-8 border-gray-100">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 font-medium mb-4">
                <FaUsers className="mr-2" />
                Our Leadership
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Meet the{" "}
                <span className="text-transparent bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text">
                  Visionaries
                </span>
              </h2>
            </motion.div>
          </div>

          {/* Team Flex Container */}
          <div className="flex flex-wrap justify-center gap-y-12 gap-x-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center w-full md:w-[28%] min-w-[280px]"
              >
                {/* Image Circle */}
                <div className="relative w-48 h-48 mb-6">
                  <div className="absolute inset-0 bg-[#e1bee7] rounded-full translate-x-3 translate-y-3 -z-10"></div>
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img
                      src={member.image}
                      alt=""
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-110"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full px-4">
                  <h3 className="font-bold text-xl uppercase tracking-widest text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#7e57c2] mb-4 italic font-semibold">
                    {member.role}
                  </p>

                  <div className="flex flex-col items-center">
                    <ul className="space-y-2 text-[13px] text-gray-600 text-left inline-block">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-[#00acc1] rounded-full mr-2"></span>{" "}
                        Expertise in Core Field
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-[#00acc1] rounded-full mr-2"></span>{" "}
                        Dedicated Team Member
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-[#00acc1] rounded-full mr-2"></span>{" "}
                        Innovation Specialist
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          {/* <div className="mt-10  pt-8 border-t border-gray-100 text-center text-xs text-gray-500 tracking-widest uppercase">
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection3;
