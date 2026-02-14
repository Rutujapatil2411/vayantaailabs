import React from "react";
import { motion } from "framer-motion"; 
import techBg from "../../assets/Technology/techbg.png";

const Technology = () => {
  return (
    
    <div className="relative w-full h-[75vh] overflow-hidden rounded-lg shadow-md mb-6">

     
      <div className="absolute inset-0 bg-black">
        <div
          className="w-full h-full bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${techBg})` }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      </div>

     
      <motion.div
        className="absolute inset-0 bg-black"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-full h-full bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${techBg})` }}
          whileHover={{ scale: 1.1 }} 
          transition={{ duration: 0.3 }}
        />
       
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      </motion.div>

      
      <motion.div
        className="absolute bottom-0 left-0 z-10 p-8 text-left"
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
          }}
          transition={{ duration: 0.3 }}
        >
         
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Our Technology
          </span>
        </motion.h2>

        <motion.p
          className="text-gray-200 max-w-xl"
          whileHover={{
            scale: 1.02,
            textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
          }}
          transition={{ duration: 0.3 }}
        >
          Empowering businesses with cutting-edge AI and Machine Learning solutions. We build intelligent systems that learn, adapt, and evolve.
        </motion.p>

      
        <div className="space-y-4 mt-4">
      
        </div>
      </motion.div>

    </div>
  );
};

export default Technology;