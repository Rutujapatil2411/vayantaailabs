import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFax } from "react-icons/fa";

const cardHover = {
  whileHover: {
    y: -10,
    scale: 1.03,
    boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
  },
  transition: { type: "spring", stiffness: 200 },
};

const iconHover = {
  whileHover: { scale: 1.2, rotate: 5 },
  transition: { type: "spring", stiffness: 300 },
};


const Sparkles = () => {
  const particles = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-[3px] h-[3px] bg-cyan-400 rounded-full"
          initial={{
            y: -20,
            x: Math.random() * 300,
            opacity: 0
          }}
          animate={{
            y: 320,
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
};


const ContactSection2 = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-cyan-100 via-white to-purple-200">
      <div className="max-w-7xl mx-auto">


        {/* CONTACT FORM */}
        <div className="bg-[#c7e4e8] mt-4 p-12 shadow-2xl max-w-3xl mx-auto ">

        <h2 className="text-3xl font-bold text-center mt-4 mb-8 bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
  Send Us a Business Inquiry
</h2>

          <form className="space-y-6">

            <div className="grid md:grid-cols-2 gap-4">
  <input
  type="text"
  placeholder="First Name"
  className="w-full px-4 py-3 border border-gray-300 bg-white  focus:outline-none focus:border-cyan-500"
/>

  <input
    type="text"
    placeholder="Last Name"
    className="w-full px-4 py-3 border border-gray-300 bg-white  focus:outline-none focus:border-cyan-500"

  />
</div>

            <input
              type="email"
              placeholder="Enter a valid email address"
             className="w-full px-4 py-3 border border-gray-300 bg-white  focus:outline-none focus:border-cyan-500"
/>

            <textarea
              rows="4"
              placeholder="Enter your message"
              className="w-full px-4 py-3 border border-gray-300 bg-white  focus:outline-none focus:border-cyan-500"
/>

            <motion.button
  whileHover={{
    scale: 1.05,
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
  }}
  whileTap={{ scale: 0.95 }}
  type="submit"
  className="group block mx-auto mt-6 px-10 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:from-black hover:to-black hover:text-white"
>
 Send Message
</motion.button>

          </form>
        </div>

        {/* Bottom  CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

          {/* MAIN OFFICE */}
          <motion.div
            {...cardHover}
           className="bg-white shadow-xl p-4 text-center cursor-pointer"
          >
            
            <motion.div {...iconHover}>
              <FaMapMarkerAlt className="text-2xl text-cyan-500 mx-auto mb-4" />
            </motion.div>

            <div className="overflow-hidden ">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5860675932972!2d73.7449598!3d18.592691300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb8f19f03b7b%3A0x13da2894436bf943!2sRapportsoft%20Consulting%20%26%20Technology%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1772599969782!5m2!1sen!2sin"
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* PHONE */}
          <motion.div
            {...cardHover}
            className=" group relative overflow-hidden bg-white shadow-xl p-6 text-center flex flex-col items-center justify-center  cursor-pointer"
          >
            {/** Sparkles */}
<div className="opacity-0 group-hover:opacity-100 transition duration-500">
  <Sparkles/>
</div>
            <motion.div {...iconHover}>
              <FaPhoneAlt className="text-3xl text-cyan-500 mb-4" />
            </motion.div>

            <h3 className="font-bold mb-2">PHONE NUMBER</h3>

            <p className="text-gray-600 text-sm">
              +91-90110 75932
            </p>

            <p className="text-gray-600 text-sm">
              +91-83294 69330
            </p>
          </motion.div>

          {/* ADDRESS */}
          <motion.div
            {...cardHover}
            className=" group relative overflow-hidden bg-white shadow-xl p-6 text-center  cursor-pointer"
          >
            {/** Sparkles */}
<div className="opacity-0 group-hover:opacity-100 transition duration-500">
  <Sparkles/>
</div>
            <motion.div {...iconHover}>
              <FaFax className="text-xl text-cyan-500 mx-auto mb-4" />
            </motion.div>

            <h3 className="font-bold mb-2">OFFICE LOCATIONS</h3>

            <p className="text-gray-600 mb-3" >
              Rapportsoft Consulting & Technology Pvt Ltd,
              Office No-321, XION, Hinjawadi,Pune,
              Maharashtra-411057
            </p>

            <p className="text-gray-600 mb-3">
              Akansha Plaza, Talegaon Pune, India - 410507
            </p>

            <p className="text-gray-600">
              Shree Heritage A 501, Sangam Nagar, Sangavi, Pune,
              India - 411027
            </p>
          </motion.div>

          {/* EMAIL */}
          <motion.div
            {...cardHover}
            className="group relative overflow-hidden bg-white shadow-xl p-6 text-center flex flex-col items-center justify-center  cursor-pointer"
          >
            {/** Sparkles */}
<div className="opacity-0 group-hover:opacity-100 transition duration-500">
  <Sparkles/>
</div>
            <motion.div {...iconHover}>
              <FaEnvelope className="text-3xl text-cyan-500 mb-4" />
            </motion.div>

            <h3 className="font-bold mb-2">EMAIL</h3>

            <a
              href="mailto:corp@rapportsoft.co.in"
              className="text-gray-600 text-sm hover:text-cyan-600 transition block"
            >
              corp@rapportsoft.co.in
            </a>

            <a
              href="mailto:shivraj@rapportsoft.co.in"
              className="text-gray-600 text-sm hover:text-cyan-600 transition block"
            >
              shivraj@rapportsoft.co.in
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection2;