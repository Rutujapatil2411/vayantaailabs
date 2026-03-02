import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import serviceBg from "../../assets/bgImages/ser.png";

// Keeping all your imports as is
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

import {
  FaChartLine,
  FaArrowRight,
  FaMoneyBillWave,
  FaFileContract,
  FaRobot,
  FaBrain,
  FaMicrochip,
  FaNetworkWired,
  FaLightbulb,
  FaCogs,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";

const HomeSection1 = () => {
 
  const { scrollY } = useScroll();

  // 1. Background moves SLOWLY (Parallax Depth)
  const yBg = useTransform(scrollY, [300, 1000], [0, 300]); 

  // 2. Text moves FAST (Parallax Depth)
  const yText = useTransform(scrollY, [300, 1000], [0, -150]);

  // 3. Page Flip Effect: Background Zooms OUT as you scroll
  // Starts at 1.15 (zoomed in) -> goes to 1.0 (normal)
  const scaleBg = useTransform(scrollY, [300, 800], [1.15, 1]);

  // 4. Page Flip Effect: Text/Content FADES OUT as you scroll to next section
  const opacityContent = useTransform(scrollY, [300, 700], [1, 0]);

  // --- D) TEXT REVEAL ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      y: 40, 
      opacity: 0, 
      filter: "blur(10px)" 
    },
    visible: {
      y: 0, 
      opacity: 1, 
      filter: "blur(0px)", 
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0, filter: "blur(5px)" },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1, 
        duration: 0.6,
      },
    }),
    hover: {
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  };

  const services = [
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "AI STRATEGY CONSULTING",
      description:
        "Develop comprehensive AI adoption roadmaps tailored to your industry and business objectives.",
      gradient: "from-blue-600/30 to-cyan-600/20",
      border: "border-blue-500/40",
      iconColor: "text-blue-400",
    },
    {
      icon: <FaCogs className="text-3xl" />,
      title: "CUSTOM AI SOLUTIONS",
      description:
        "End-to-end AI system development, from concept to deployment, specifically designed for your needs.",
      gradient: "from-purple-600/30 to-indigo-600/20",
      border: "border-purple-500/40",
      iconColor: "text-purple-400",
    },
    {
      icon: <FaDatabase className="text-3xl" />,
      title: "DATA INTELLIGENCE",
      description:
        "Leverage big data with our AI platforms to uncover hidden patterns and opportunities.",
      gradient: "from-green-600/30 to-emerald-600/20",
      border: "border-green-500/40",
      iconColor: "text-green-400",
    },
    {
      icon: <FaCloud className="text-3xl" />,
      title: "AI CLOUD INFRASTRUCTURE",
      description:
        "Scalable AI infrastructure and MLOps solutions for seamless model deployment and management.",
      gradient: "from-orange-600/30 to-amber-600/20",
      border: "border-orange-500/40",
      iconColor: "text-orange-400",
    },
  ];

  const logos = [
    c2, c3, c4, c5, c6, c7, c8, c9, c10,
    c11, c12, c13, c14, c15, c16, c17,
    c18, c19, c20, c21, c22, c23,
    c24, c25, c26, c27, c28, c29,
    c30, c31, c32, c33, c34, c35,
    c36, c37, c38, c39, c40, c41
  ];

  return (
    <div className="w-full bg-gray-900">
      <div className="relative min-h-[85vh] lg:min-h-[95vh] overflow-hidden">
     
        <motion.div 
          style={{ 
            y: yBg, 
            scale: scaleBg 
          }} 
          className="absolute inset-0 z-0 overflow-hidden origin-center"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          
          >
            <source
              src="https://raw.githubusercontent.com/Rutujapatil2411/project-assets/main/vid6.mp4"
              type="video/mp4"
            />
          </video>

          {/* Overlay for dark effect */}
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-gray-900/40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-gradient-x opacity-30" />
        </motion.div>

        {/* Parallax Foreground Div with Fade Out */}
        <motion.div 
          style={{ 
            y: yText, 
            opacity: opacityContent 
          }} 
          className="relative z-10"
        >
          {/* Hero Content */}
          <section className="min-h-[85vh] lg:min-h-[95vh] flex items-center pb-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-2xl mt-28"
              >
               
                <motion.h1
                  variants={itemVariants} 
                  className="text-4xl md:text-6xl lg:text-8xl font-bold mt-8 mb-6"
                  // className="text-3xl md:text-5xl lg:text-6xl font-bold mt-8 mb-6"
                >
                  <span className="text-white">Artificial</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                    Intelligence,
                  </span>
                  <br />
                  <span className="text-white">Innovation &</span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                    Implementation
                  </span>
                </motion.h1>

                {/* Description - Left Aligned */}
                <motion.p
                  variants={itemVariants}
                  className="text-xl md:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed"
                >
                  Transform complex challenges into intelligent solutions with
                  cutting-edge AI research and scalable implementations that drive
                  real business impact.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 mb-8"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center space-x-3 group"
                  >
                    <span className="text-lg">Contact Us</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-gray-900/60 backdrop-blur-lg border border-gray-700/50 text-white font-bold rounded-xl hover:bg-gray-800/70 hover:border-blue-500/30 transition-all duration-300 flex items-center justify-center space-x-3 group"
                  >
                    <span className="text-lg">Our Services</span>
                    <FaArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </motion.button>
                </motion.div>

                {/* Stats Bar */}
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl"
                >
                  {[
                    { number: "200+", label: "Projects" },
                    { number: "50+", label: "Clients" },
                    { number: "24/7", label: "Support" },
                    { number: "99%", label: "Satisfaction" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -3 }}
                      className="text-center p-4 bg-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300"
                    >
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <div className="text-gray-300 text-sm mt-1 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                
              </motion.div>
            </div>
          </section>

          {/* Logo Sliding Strip */}
          <div className="mt-10 w-full flex items-center overflow-hidden relative px-6 sm:px-8 lg:px-12">
            {/* Left Text */}
            <div className="flex flex-col justify-center mr-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-sm md:text-base font-medium">
                Trusted by
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-lg md:text-xl font-semibold">
                Global Brands
              </span>
            </div>

            {/* Divider */}
            <div className="h-12 w-[3px] bg-gradient-to-b from-blue-500 to-purple-500 mr-8"></div>

            {/* Logos */}
            <div className="overflow-hidden flex-1">
              <div className="flex w-max animate-scroll space-x-12 items-center">
                {[...logos, ...logos].map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt="company logo"
                    className="h-12 md:h-14 object-contain opacity-80 hover:opacity-100 transition duration-300"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- SERVICES SECTION  --- */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <img
            src={serviceBg}
            alt="Services Background"
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-gray-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants} 
            className="text-center mb-12"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Core Services
              </span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-300 text-lg max-w-2xl mx-auto">
              Delivering excellence through innovative solutions and proven
              methodologies
            </motion.p>
          </motion.div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }} 
                whileHover="hover"
                className="relative group"
              >
                {/* Card with enhanced glass effect */}
                <div
                  className={`h-full p-6 rounded-2xl bg-gradient-to-br ${service.gradient} backdrop-blur-xl border ${service.border} transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/20`}
                >
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div
                      className={`${service.iconColor} transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                    {/* Glow effect */}
                    <div
                      className={`absolute -inset-4 ${service.iconColor.replace(
                        "text-",
                        "bg-"
                      )}/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300 relative">
                    {service.title}
                    <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-current to-transparent group-hover:w-12 transition-all duration-300"></div>
                  </h3>

                  {/* Description */}
                  <p className="text-gray-200 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-blue-300 text-sm font-medium flex items-center">
                      Learn more
                      <FaArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-200 text-sm">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
              Ready to transform your business?
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-4 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white text-sm font-medium hover:shadow-lg transition-shadow"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
};

export default HomeSection1;