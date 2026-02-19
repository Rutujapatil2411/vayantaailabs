import React from "react";
import { motion } from "framer-motion";
import contactBg from "../../assets/bgImages/contact.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const ContactSection1 = () => {
  return (
    <section className="relative min-h-[85vh] overflow-hidden flex items-end justify-center pb-24">

      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${contactBg})`,
            filter: "brightness(0.5) saturate(1.4) contrast(1.1)",
            backgroundPosition: "center 30%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-purple-900/40 to-gray-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/80" />    
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="text-white">Let’s Connect With</span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
            Our Team
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
        >
          Have a project in mind? We transform ideas into intelligent
          solutions through innovation, technology, and collaboration.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ContactSection1;
