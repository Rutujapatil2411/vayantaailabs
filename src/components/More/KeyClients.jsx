import React from "react";
import { motion } from "framer-motion";
import keyClientBg from "../../assets/img/h1.jpg";

const KeyClients = () => {
  return (
    <div className="relative w-full h-[75vh] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 flex items-start justify-center bg-black">

        <div
          className="w-full h-full bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url(${keyClientBg})`,
            // filter: "brightness(0.6) saturate(1.2) contrast(1.1)",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      </div>

      {/* Content - Positioned at Bottom-Left with Animation */}
      <motion.div 
        className="absolute bottom-0 left-0 z-10 p-8 text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Key Clients
          </span>
        </motion.h2>

        <motion.p 
          className="text-gray-200 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Trusted by leading enterprises across industries
        </motion.p>
      </motion.div>

    </div>
  );
};

export default KeyClients;