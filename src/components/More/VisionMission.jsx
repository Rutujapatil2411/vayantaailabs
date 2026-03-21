import React from "react";
import { motion } from "framer-motion";
import visionBg from "../../assets/bgImages/v1.png";
import vmImg from "../../assets/img/vm.jpg"; 

const VisionMission = () => {
  return (
    <div className="w-full">
     
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 overflow-hidden">
        
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${vmImg})` }}
        />
        
        
<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 to-purple-600/15 z-10" />
        <div className="relative z-20 max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <p className="text-cyan-600 font-bold uppercase tracking-widest text-sm mb-4">
              Intelligence. Innovation. Impact.
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                Vision & Mission
              </span>
            </h1>

            <p className="text-white max-w-3xl mx-auto leading-relaxed text-lg font-medium">
              Building an intelligent logistics ecosystem through advanced AI,
              automation, and data-driven enterprise platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Dark Background Section  --- */}
      <section className="relative min-h-screen text-white overflow-hidden bg-[#030712]">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110 opacity-20"
          style={{ backgroundImage: `url(${visionBg})` }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

        <div className="absolute top-32 left-20 w-72 h-72 bg-cyan-500/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-32 right-20 w-72 h-72 bg-purple-500/20 blur-[140px] rounded-full" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="space-y-32">
            {/* Our Vision */}
            <motion.div
              className="relative grid md:grid-cols-2 gap-20 items-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-cyan-400 to-transparent opacity-40 hidden md:block" />

              <div>
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">
                  Our Vision
                </h2>

                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                  To become a global leader in intelligent logistics technology by
                  delivering scalable, secure, and AI-powered enterprise solutions
                  across container yards, transportation, and supply chains.
                </p>

                <motion.ul
                  className="space-y-4 text-gray-400 text-sm"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.2,
                      },
                    },
                  }}
                >
                  {[
                    "Premier IT partner for global logistics enterprises",
                    "AI-driven automation and optimization platforms",
                    "Seamless integration with CFS, ICD, WMS, and ERP systems",
                    "High-availability cloud and hybrid infrastructure",
                    "Continuous innovation in digital logistics ecosystems",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.5 },
                        },
                      }}
                      whileHover={{ x: 8, color: "#22d3ee" }}
                      className="flex items-start gap-3 cursor-pointer"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="relative w-56 h-56 mx-auto hidden md:block"
              >
                <div className="absolute inset-0 rounded-full border border-cyan-400/40"></div>
                <div className="absolute inset-6 rounded-full border border-purple-400/40"></div>
                <div className="absolute inset-12 rounded-full border border-cyan-400/40"></div>
              </motion.div>
            </motion.div>

            {/* Our Mission */}
            <motion.div
              className="relative grid md:grid-cols-2 gap-20 items-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="relative w-56 h-56 mx-auto hidden md:block"
              >
                <div className="absolute inset-0 rounded-full border border-purple-400/40"></div>
                <div className="absolute inset-6 rounded-full border border-cyan-400/40"></div>
                <div className="absolute inset-12 rounded-full border border-purple-400/40"></div>
              </motion.div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">
                  Our Mission
                </h2>

                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                  To empower enterprises with intelligent automation, predictive
                  analytics, and secure digital platforms that accelerate
                  operational excellence and sustainable growth.
                </p>

                <motion.ul
                  className="space-y-4 text-gray-400 text-sm"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.2,
                      },
                    },
                  }}
                >
                  {[
                    "Strategic partnerships for long-term digital transformation",
                    "End-to-end AI-enabled logistics platforms",
                    "Cost-efficient and scalable cloud deployments",
                    "Continuous employee upskilling and innovation culture",
                    "Measurable business impact through data intelligence",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.5 },
                        },
                      }}
                      whileHover={{ x: 8, color: "#22d3ee" }}
                      className="flex items-start gap-3 cursor-pointer"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;