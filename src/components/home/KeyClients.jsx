import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMemo } from "react";

import c2 from "../../assets/companies/c2.png";
import c3 from "../../assets/companies/c3.png";
import c4 from "../../assets/companies/c4.png";
import c5 from "../../assets/companies/c5.png";
import c6 from "../../assets/companies/c6.png";
import c7 from "../../assets/companies/c7.png";
import c8 from "../../assets/companies/c8.png";
import c9 from "../../assets/companies/c9.png";
import c10 from "../../assets/companies/c10.png";
import c11 from "../../assets/companies/c11.png";
import c12 from "../../assets/companies/c12.png";
import c13 from "../../assets/companies/c13.png";
import c14 from "../../assets/companies/c14.png";
import c15 from "../../assets/companies/c15.png";
import c16 from "../../assets/companies/c16.png";
import c17 from "../../assets/companies/c17.png";
import c18 from "../../assets/companies/c18.png";
import c19 from "../../assets/companies/c19.png";
import c20 from "../../assets/companies/c20.png";
import c21 from "../../assets/companies/c21.png";
import c22 from "../../assets/companies/c22.png";
import c23 from "../../assets/companies/c23.png";
import c24 from "../../assets/companies/c24.png";
import c25 from "../../assets/companies/c25.png";
import c26 from "../../assets/companies/c26.png";
import c27 from "../../assets/companies/c27.png";
import c28 from "../../assets/companies/c28.png";
import c29 from "../../assets/companies/c29.png";
import c30 from "../../assets/companies/c30.png";
import c31 from "../../assets/companies/c31.png";
import c32 from "../../assets/companies/c32.png";
import c33 from "../../assets/companies/c33.png";
import c34 from "../../assets/companies/c34.png";
import c35 from "../../assets/companies/c35.png";
import c36 from "../../assets/companies/c36.png";
import c37 from "../../assets/companies/c37.png";
import c38 from "../../assets/companies/c38.png";
import c39 from "../../assets/companies/c39.png";
import c40 from "../../assets/companies/c40.png";
import c41 from "../../assets/companies/c41.png";

const clients = [
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
  c10,
  c11,
  c12,
  c13,
  c14,
  c15,
  c16,
  c17,
  c18,
  c19,
  c20,
  c21,
  c22,
  c23,
  c24,
  c25,
  c26,
  c27,
  c28,
  c29,
  c30,
  c31,
  c32,
  c33,
  c34,
  c35,
  c36,
  c37,
  c38,
  c39,
  c40,
  c41,
];


const OutlineTriangle = ({ size = 20, color = "#a855f7" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: `drop-shadow(0 0 6px ${color})` }}
    >
      <motion.polygon
        points="100,20 180,160 20,160"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </svg>
  );
};

const AnimatedTriangles = () => {
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`triangle-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            rotate: [0, 360],
            x: [0, Math.random() * 30 - 15],
            y: [0, Math.random() * 30 - 15],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <OutlineTriangle
            size={20}
            color={i % 2 === 0 ? "#a855f7" : "#6366f1"}
          />
        </motion.div>
      ))}

      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`big-triangle-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <OutlineTriangle
            size={30}
            color={i % 2 === 0 ? "#9333ea" : "#4f46e5"}
          />
        </motion.div>
      ))}
    </div>
  );
};

const KeyClients = () => {
  const [showAll, setShowAll] = useState(false);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const ClientCard = ({ logo, index, delay = 0 }) => {
    return (
      <motion.div
        className="group relative flex items-center justify-center p-4 bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden "
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay }}
        // whileHover={{
        //   y: -8,
        //   scale: 1.05,
        //   boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        // }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* <motion.img
            src={logo}
            alt="Client"
            className="max-h-16 max-w-full object-contain"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          /> */}
<motion.img
  src={logo}
  alt="Client"
  className="max-h-16 max-w-full object-contain transition-transform duration-300"
/>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0"
            whileHover={{
              background:
                "linear-gradient(to right, rgba(96, 165, 250, 0.1), rgba(167, 139, 250, 0.1))",
              transition: { duration: 0.3 },
            }}
          />

          <div className="absolute top-0 left-0 h-[50%] w-[2px] bg-gray-900 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out" />

          <div className="absolute top-0 left-0 w-[50%] h-[2px] bg-gray-900 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />

          <div className="absolute bottom-0 right-0 h-[50%] w-[2px] bg-gray-900 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out" />

          <div className="absolute bottom-0 right-0 w-[50%] h-[2px] bg-gray-900 origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
        </div>
      </motion.div>
    );
  };

  return (
    <div className="w-full">
      

      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatedTriangles />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Our Clients
            </span>
          </motion.h2>

          <motion.div
            className="text-center max-w-5xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 text-lg font-medium">
              Every successful organization relies on a strong and scalable
              foundation of business processes. Our clients leverage optimized
              workflows and intelligent systems to enhance operational
              efficiency, ensure long-term sustainability, and maximize return
              on investment (ROI).
            </p>
          </motion.div>

          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            {showAll ? (
              <>
                <div className="grid grid-cols-5 gap-6 mb-3">
                  {clients.slice(0, 5).map((logo, index) => (
                    <ClientCard key={index} logo={logo} index={index} />
                  ))}
                </div>

                <div className="grid grid-cols-4 gap-6 mb-3">
                  {clients.slice(5, 9).map((logo, index) => (
                    <ClientCard key={index + 5} logo={logo} index={index} />
                  ))}
                </div>

                <div className="grid grid-cols-5 gap-6 mb-3">
                  {clients.slice(9, 14).map((logo, index) => (
                    <ClientCard key={index + 9} logo={logo} index={index} />
                  ))}
                </div>

                <div className="grid grid-cols-4 gap-6 mb-3">
                  {clients.slice(14, 18).map((logo, index) => (
                    <ClientCard key={index + 14} logo={logo} index={index} />
                  ))}
                </div>

                <div className="grid grid-cols-5 gap-6 mb-3">
                  {clients.slice(18, 23).map((logo, index) => (
                    <ClientCard key={index + 18} logo={logo} index={index} />
                  ))}
                </div>

                <div className="grid grid-cols-4 gap-6 mb-3">
                  {clients.slice(23, 27).map((logo, index) => (
                    <ClientCard key={index + 23} logo={logo} index={index} />
                  ))}
                </div>

                <div className="grid grid-cols-5 gap-6 mb-3">
                  {clients.slice(27, 32).map((logo, index) => (
                    <ClientCard key={index + 27} logo={logo} index={index} />
                  ))}
                </div>

                <div className="grid grid-cols-4 gap-6 mb-3">
                  {clients.slice(32, 36).map((logo, index) => (
                    <ClientCard key={index + 32} logo={logo} index={index} />
                  ))}
                </div>

                <div className="grid grid-cols-5 gap-6 mb-3">
                  {clients.slice(36, 41).map((logo, index) => (
                    <ClientCard key={index + 36} logo={logo} index={index} />
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="grid grid-cols-5 gap-6 mb-3">
                  {clients.slice(0, 5).map((logo, index) => (
                    <ClientCard key={index} logo={logo} index={index} />
                  ))}
                </div>

                <div className="grid grid-cols-4 gap-6">
                  {clients.slice(5, 9).map((logo, index) => (
                    <ClientCard
                      key={index + 5}
                      logo={logo}
                      index={index}
                      delay={(index + 5) * 0.1}
                    />
                  ))}
                </div>
              </>
            )}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-black hover:from-black hover:to-black hover:text-white"
            >
              <span className="flex items-center justify-center gap-2">
                {showAll ? "View Less" : "View All"}
                <span className="opacity-0 group-hover:opacity-100 transform transition-all duration-300 group-hover:translate-x-1">
                  {showAll ? "←" : "→"}
                </span>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default KeyClients;
