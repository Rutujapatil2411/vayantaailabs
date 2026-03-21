import React from 'react';
import { motion } from 'framer-motion';
import bgg from "../../assets/bgImages/bgg.jpg"; 
import { FaLinkedin, FaTwitter, FaEnvelope, FaUsers } from 'react-icons/fa';

function AboutSection3() {
  const teamMembers = [
    { name: "Shivraj", role: "CEO & Founder", image: "" }, 
    { name: "Sanket", role: "Technical Lead", image: "" },
    { name: "Tukaram", role: "Sr. Developer", image: "" },
    { name: "Mayur", role: " AI Developer", image: "" },
    { name: "Rushikesh", role: "UI Designer", image: "" }
  ];

  return (
    <section
      className="py-16 bg-fixed bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: `url(${bgg})` }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 font-medium mb-6">
            <FaUsers className="mr-2" />
            Our Leadership
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet the <span className="text-transparent bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text">Visionaries</span>
          </h2>
        </div>

        {/* Team List - Overlapping Circle Design */}
        <div className="flex flex-col items-center gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center w-full max-w-4xl group`}
            >
              {/* Text Card Area */}
              <div className={`w-full md:w-[620px] ${index % 2 === 0 ? 'md:pr-28 md:pl-10' : 'md:pl-28 md:pr-10'} p-8 bg-gradient-to-r ${index % 2 === 0 ? 'from-cyan-500 to-cyan-600 text-left' : 'from-purple-500 to-purple-600 text-right'} text-white shadow-xl relative z-10 rounded-2xl`}>
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide">{member.name}</h3>
                <p className="text-cyan-100 font-medium mb-3 text-sm uppercase tracking-widest">{member.role}</p>
                
                <div className={`h-1 w-20 bg-white/30 rounded mb-4 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`} />
                
                <p className="text-sm text-white/90 mb-4 font-light leading-relaxed">
                  Innovative leader driving excellence and pushing the boundaries of technology.
                </p>
                
                <div className={`flex space-x-4 opacity-80 group-hover:opacity-100 transition-opacity ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <FaLinkedin className="cursor-pointer hover:scale-110 transition-all" />
                  <FaTwitter className="cursor-pointer hover:scale-110 transition-all" />
                  <FaEnvelope className="cursor-pointer hover:scale-110 transition-all" />
                </div>
              </div>

              {/* Image Area - Circle with Image Placeholder */}
              <div className={`relative z-20 -mt-10 md:mt-0 ${index % 2 === 0 ? 'md:-ml-25' : 'md:-mr-25'}`}>
                <div className="w-36 h-36 md:w-50 md:h-50 rounded-full border-[6px] border-white shadow-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
                   <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover" 
                   />
                </div>
                {/* Hover Effect Ring */}
                <div className={`absolute inset-0 rounded-full border-2 ${index % 2 === 0 ? 'border-cyan-300' : 'border-purple-300'} scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection3;