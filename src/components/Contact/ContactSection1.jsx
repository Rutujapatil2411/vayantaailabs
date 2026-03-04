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
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] overflow-hidden flex items-end justify-center pb-24">
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

      {/*  MAP  SECTION */}
      <section className="bg-gray-100 py-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden"
          >
            
            <div
              className="p-12 text-center 
                bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900"
            >
              <motion.h2
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Get in Touch
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              >
                Visit our office or schedule a meeting with our experts . Let’s collaborate
                and build intelligent digital solutions together.
              </motion.p>
            </div>

            {/* MAP SECTION */}
            <div className="w-full h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5860675932972!2d73.7449598!3d18.592691300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb8f19f03b7b%3A0x13da2894436bf943!2sRapportsoft%20Consulting%20%26%20Technology%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1772599969782!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rapportsoft Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactSection1;
