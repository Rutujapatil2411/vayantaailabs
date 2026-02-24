import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const AnimatedShapes = () => {
  return (
    <>
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20"
          style={{
            width: `${Math.random() * 40 + 10}px`,
            height: `${Math.random() * 40 + 10}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="absolute bottom-20 right-20 w-0 h-0 opacity-20"
        style={{
          borderLeft: "15px solid transparent",
          borderRight: "15px solid transparent",
          borderBottom: "25px solid #4ade80",
        }}
        animate={{
          rotate: [0, 10, 0, -10, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-10 h-10 bg-purple-300 rounded-full opacity-15"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-0 h-0 opacity-20"
        style={{
          borderLeft: "12px solid transparent",
          borderRight: "12px solid transparent",
          borderBottom: "20px solid #a78bfa",
        }}
        animate={{
          rotate: [0, -15, 0, 15, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-20 w-12 h-12 bg-blue-200 rounded-full opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-2/3 left-20 w-10 h-10 bg-indigo-200 rounded-full opacity-20"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/4 left-16 w-8 h-8 bg-green-200 rounded-full opacity-20"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-0 h-0 opacity-20"
        style={{
          borderLeft: "10px solid transparent",
          borderRight: "10px solid transparent",
          borderBottom: "18px solid #f9a8d4",
        }}
        animate={{
          rotate: [0, 20, 0, -20, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
};

const ContactSection2 = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-gray-100 via-white to-gray-100 overflow-hidden">
      <AnimatedShapes />

      <div className="relative z-10">

        {/* Top Center Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent"
          >
            Contact Our Team
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 mt-4 max-w-3xl mx-auto"
          >
            With 15+ years of expertise in logistics and enterprise IT
            solutions, we are committed to delivering excellence. Reach out to
            us for product inquiries, enterprise solutions, or strategic
            partnerships.
          </motion.p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.3fr] gap-20 items-start">
          {/*  Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="space-y-8">

              {/* Address */}
              <div className="flex items-center gap-4 group">
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-green-100 rounded-full text-green-600 group-hover:bg-green-600 group-hover:text-white transition duration-300">
                  <FaMapMarkerAlt className="text-2xl" />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Address
                  </h4>

                  <p className="text-gray-600 mb-3">
                    Rapportsoft Consulting & Technology Pvt Ltd,
                    <br />
                    Office No-321, XION, Hinjawadi,Pune,
                    <br />
                    Maharashtra-411057
                  </p>

                  <p className="text-gray-600 mb-3">
                    Akansha Plaza, Talegaon Pune, India - 410 507
                  </p>

                  <p className="text-gray-600">
                    Shree Heritage A 501, Sangam Nagar, Sangavi, Pune, <br />
                    India - 411 027
                  </p>
                </div>
              </div>

              {/* Email */}

              <div className="flex items-center gap-4 group">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                  <FaEnvelope className="text-2xl" />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Email
                  </h4>

                  <a
                    href="mailto:corp@rapportsoft.co.in"
                    className="block text-gray-600 hover:text-blue-600 transition duration-300"
                  >
                    corp@rapportsoft.co.in
                  </a>

                  <a
                    href="mailto:shivraj@rapportsoft.co.in"
                    className="block text-gray-600 hover:text-blue-600 transition duration-300 mt-2"
                  >
                    shivraj@rapportsoft.co.in
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition duration-300">
                  <FaPhoneAlt className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Contact Numbers
                  </h4>

                  <p className="text-gray-600">+91-90110 75932</p>
                  <p className="text-gray-600">+91-83294 69330</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/*  Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-100 p-12 shadow-xl border border-gray-200 "
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold mb-8 text-center bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent"
            >
              Send Us a Business Inquiry
            </motion.h3>

            <motion.form variants={itemVariants} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition "
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition "
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition "
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Describe your requirements..."
                  className="w-full px-4 py-3 bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition "
                ></textarea>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="group block mx-auto px-10 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:from-black hover:to-black hover:text-white"
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection2;
