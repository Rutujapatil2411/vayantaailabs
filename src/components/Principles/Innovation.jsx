import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroBg from "../../assets/bgImages/Inno.jpg";

const Innovation = () => {
  const navigate = useNavigate();

  const popupVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.2 },
    }),
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

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* HERO */}
      <section className="relative h-[70vh] overflow-hidden text-white flex items-center justify-center">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${heroBg})`,
              filter: "brightness(0.5) saturate(1.4) contrast(1.1)",
              backgroundPosition: "center 30%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-purple-900/40 to-gray-900/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/80" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(90deg, transparent 79px, #4299e1 79px, #4299e1 81px, transparent 81px),
                linear-gradient(transparent 79px, #4299e1 79px, #4299e1 81px, transparent 81px)
              `,
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        {/* Hero Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={popupVariant}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <motion.p
            initial="hidden"
            whileInView="visible"
            custom={0}
            variants={popupVariant}
            className="uppercase tracking-widest text-cyan-400 mb-4"
          >
            Innovation Framework
          </motion.p>

          <motion.h1
            initial="hidden"
            whileInView="visible"
            custom={0.1}
            variants={popupVariant}
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">Innovation &</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
              Strategic Agility
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            variants={popupVariant}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Empowering enterprises with intelligent, scalable, and adaptive AI
            solutions.
          </motion.p>
        </motion.div>
      </section>

      {/* INTRO */}

      <section className="relative py-28 overflow-hidden bg-gray-50">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
        <AnimatedShapes />
        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={popupVariant}
            custom={0}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              initial="hidden"
              whileInView="visible"
              custom={0}
              variants={popupVariant}
            >
              Driving <br />
              <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                Digital Transformation
              </span>
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 20 }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mb-6"
            />

            <motion.p
              className="text-gray-600 text-lg leading-relaxed"
              initial="hidden"
              whileInView="visible"
              custom={0.2}
              variants={popupVariant}
            >
              We enable organizations to adopt AI-driven solutions, cloud-native
              architecture, and predictive insights that accelerate growth and
              optimize operations.
            </motion.p>
          </motion.div>

          <motion.div
            className="relative flex justify-center md:justify-end space-x-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {["AI", "Cloud", "Analytics", "Automation"].map((tech, i) => (
              <motion.div
                key={i}
                className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 flex items-center justify-center text-white font-semibold shadow-lg"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.2, type: "spring", stiffness: 120 }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- INNOVATION JOURNEY --- */}
      <section className="relative py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-gradient-to-b from-cyan-400/40 to-purple-400/40" />
        <AnimatedShapes />
        <div className="relative max-w-6xl mx-auto px-6 space-y-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={0}
            variants={popupVariant}
            className="text-center"
          >
            <motion.h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                Innovation Journey
              </span>
            </motion.h2>
            <motion.p className="text-gray-600 max-w-2xl mx-auto">
              From ideation to execution — our lifecycle ensures quality,
              scalability, and performance without compromise.
            </motion.p>
          </motion.div>

          {/* Steps */}

          <div className="grid md:grid-cols-2 gap-16">
            {[
              {
                title: "Core Innovations",
                items: [
                  "AI Automation & OCR Systems",
                  "Smart Yard Management",
                  "Predictive Analytics Engine",
                  "Digital Twin Simulation",
                  "Cloud-Native Architecture",
                  "API & System Integration",
                ],
              },
              {
                title: "Innovation Lifecycle",
                items: [
                  "Research & Data Collection",
                  "AI Model Development",
                  "Quality Testing",
                  "Secure Deployment",
                  "Continuous Enhancement",
                  "Performance Audits",
                ],
              },
            ].map((section, idx) => (
              <motion.div
                key={idx}
                className="relative"
                initial="hidden"
                whileInView="visible"
                custom={idx * 0.1}
                variants={popupVariant}
              >
                <motion.h3 className="text-3xl font-bold mb-6 mt-2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                    {section.title}
                  </span>
                </motion.h3>

                <motion.div className="space-y-4">
                  {section.items.map((item, i) => (
                    <motion.p
                      key={i}
                      className="flex items-center gap-3 text-gray-800 font-medium cursor-pointer"
                      custom={i}
                      variants={popupVariant}
                      whileHover={{ scale: 1.05, color: "#0891b2" }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <span className="text-cyan-600 text-xl">▸</span>
                      {item}
                    </motion.p>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative bg-slate-900 py-28 text-white overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={0}
            variants={popupVariant}
            className="text-center mb-16"
          >
            <motion.h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                Performance Highlights
              </span>
            </motion.h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Measuring our impact through innovation and excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-10 text-center">
            {[
              {
                value: "40%",
                label: "Faster Processing",
                icon: "⚡",
                color: "cyan",
              },
              {
                value: "35%",
                label: "Cost Optimization",
                icon: "💰",
                color: "purple",
              },
              {
                value: "99.8%",
                label: "System Accuracy",
                icon: "🎯",
                color: "cyan",
              },
              {
                value: "24/7",
                label: "Smart Monitoring",
                icon: "📡",
                color: "purple",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                custom={i * 0.1}
                variants={popupVariant}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative group bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl"
              >
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition blur-xl bg-${stat.color}-500/20`}
                />
                <div className="relative">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-white/80">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gray-50 py-24 text-gray-900 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
        <AnimatedShapes />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            custom={0}
            variants={popupVariant}
            className="text-4xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Ready to Innovate with Us?
            </span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            custom={0.1}
            variants={popupVariant}
            className="mb-8 text-lg text-gray-600"
          >
            Transform your operations with intelligent enterprise systems.
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="group px-10 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:from-black hover:to-black hover:text-white"
          >
            <span className="flex items-center justify-center gap-2">
              Let’s Start
              <span className="opacity-0 group-hover:opacity-100 transform transition-all duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Innovation;
