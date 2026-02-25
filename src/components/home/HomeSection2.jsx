import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import aiImage from "../../assets/img/ai.jpg";
import team from "../../assets/img/team.jpg";
import AI from "../../assets/img/ai1.jpg";
import AI2 from "../../assets/img/ai2.jpg";
import AI3 from "../../assets/img/ai3.jpg";
import AI4 from "../../assets/img/ai4.jpg";
import portBg from "../../assets/img/shipping.jpg";
import c2 from "../../assets/companies/c2.png";
import c3 from "../../assets/companies/c3.png";
import c4 from "../../assets/companies/c4.png";
import c5 from "../../assets/companies/c5.png";
import c6 from "../../assets/companies/c6.png";
import c7 from "../../assets/companies/c7.png";
import c8 from "../../assets/companies/c8.png";
import c9 from "../../assets/companies/c9.png";

import {
  FaGlobe,
  FaUsers,
  FaBox,
  FaClock,
  FaAward,
  FaChartLine,
  FaShip,
  FaRobot,
  FaEye,
  FaBrain,
  FaIndustry,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaUserTie,
  FaCheckCircle,
  FaCertificate,
  FaCogs,
  FaHandshake,
  FaWarehouse,
  FaTruck,
  FaAnchor,
  FaBuilding,
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
  FaArrowRight,
  FaPlay,
} from "react-icons/fa";

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

const HomeSection2 = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeWhyChoose, setActiveWhyChoose] = useState(0);

  const stats = [
    {
      icon: <FaGlobe className="text-3xl text-blue-500" />,
      value: "11+",
      label: "Countries Served",
      description: "Global presence across multiple continents",
    },
    {
      icon: <FaUsers className="text-3xl text-purple-500" />,
      value: "120+",
      label: "Growing Clients Portfolio",
      description: "Trusted by businesses worldwide",
    },
    {
      icon: <FaBox className="text-3xl text-green-500" />,
      value: "10+",
      label: "AI-Powered Yard Solutions",
      description: "Smart Gate & Yard Automation Systems",
    },
    {
      icon: <FaClock className="text-3xl text-yellow-500" />,
      value: "15+",
      label: "Years of Experience",
      description: "Industry expertise since 2009",
    },
    {
      icon: <FaAward className="text-3xl text-red-500" />,
      value: "3",
      label: "ISO Certifications",
      description: "Quality and security standards",
    },
    {
      icon: <FaChartLine className="text-3xl text-indigo-500" />,
      value: "150+",
      label: "Team Professionals",
      description: "Expert developers and consultants",
    },
  ];

  const yardManagementData = [
    {
      icon: <FaRobot className="text-xl text-blue-500" />,
      title: "Automated Gate Operations",
      description:
        "Reduce gate processing time by 60% with AI-powered automation",
    },
    {
      icon: <FaEye className="text-xl text-purple-500" />,
      title: "Container Recognition",
      description:
        "OCR technology for accurate container identification in seconds",
    },
    {
      icon: <FaBrain className="text-xl text-green-500" />,
      title: "Intelligent Yard Planning",
      description:
        "AI algorithms optimize container placement for maximum efficiency",
    },
    {
      icon: <FaChartLine className="text-xl text-yellow-500" />,
      title: "Real-time Analytics",
      description:
        "Monitor operations with live dashboards and predictive insights",
    },
    {
      icon: <FaCogs className="text-xl text-red-500" />,
      title: "Equipment Optimization",
      description: "Reduce equipment idle time by 35% through smart scheduling",
    },
    {
      icon: <FaWarehouse className="text-xl text-indigo-500" />,
      title: "Digital Twin Technology",
      description:
        "Virtual yard simulation for scenario planning and optimization",
    },
  ];

  const aiFeatures = [
    {
      icon: <FaEye className="text-2xl text-blue-500" />,
      title: "Automated Gate OCR",
      description: "Using CCTV & ANPR technology",
    },
    {
      icon: <FaRobot className="text-2xl text-purple-500" />,
      title: "AI-based Container Damage Detection",
      description: "Real-time identification and reporting",
    },
    {
      icon: <FaBrain className="text-2xl text-green-500" />,
      title: "Predictive Dwell Time & Yard Congestion Alerts",
      description: "AI-powered forecasting",
    },
    {
      icon: <FaCogs className="text-2xl text-yellow-500" />,
      title: "Smart Slot Allocation",
      description: "Reduce re-handling by 30%",
    },
    {
      icon: <FaChartLine className="text-2xl text-red-500" />,
      title: "Real-time Yard Heatmap & Digital Twin View",
      description: "Complete operational visibility",
    },
    {
      icon: <FaBrain className="text-2xl text-indigo-500" />,
      title: "Digital Twin Simulation",
      description: "Simulate congestion & traffic scenarios",
    },
    {
      icon: <FaChartLine className="text-2xl text-blue-500" />,
      title: "AI Demand Forecasting",
      description: "Predict peak container volumes",
    },
    {
      icon: <FaEnvelope className="text-2xl text-purple-500" />,
      title: "WhatsApp / SMS Notifications & Alerts",
      description: "Instant communication system",
    },
  ];

  // Why Choose Us data
  const whyChooseUs = [
    {
      icon: <FaCertificate className="text-2xl text-blue-500" />,
      title: "ISO Certified",
      description: "Quality management systems that ensure reliable delivery",
    },
    {
      icon: <FaBrain className="text-2xl text-purple-500" />,
      title: "AI Expertise",
      description: "Deep knowledge in AI, ML and computer vision technologies",
    },
    {
      icon: <FaHandshake className="text-2xl text-green-500" />,
      title: "Client-Centric Approach",
      description: "Customized solutions tailored to your business needs",
    },
    {
      icon: <FaIndustry className="text-2xl text-yellow-500" />,
      title: "Domain Knowledge",
      description:
        "15+ years of logistics and supply chain industry experience",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWhyChoose((prev) =>
        prev === whyChooseUs.length - 1 ? 0 : prev + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [whyChooseUs.length]);

  const testimonials = [
    {
      name: "John Smith",
      position: "Operations Director",
      company: "Global Shipping Co.",
      content:
        "Rapportsoft's AI solutions transformed our yard operations. We've reduced processing times by 60% and improved overall efficiency.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      position: "CEO",
      company: "Smart Logistics Ltd.",
      content:
        "The implementation of AI-powered gate operations has been a game-changer for our business. Highly recommend their expertise.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "CTO",
      company: "Container Hub Inc.",
      content:
        "The digital twin technology provided by Rapportsoft has enabled us to optimize our yard layout and reduce congestion significantly.",
      rating: 5,
    },
  ];

  const products = [
    "AI Smart Gate Automation",
    "OCR Container Recognition",
    "AI Yard Slot Allocation",
    "Digital Twin Yard System",
    "Predictive Dwell Time System",
    "Damage Detection System",
  ];

  const industries = [
    {
      name: "Smart Container Yards",
      icon: <FaWarehouse className="text-blue-500" />,
    },
    {
      name: "AI Enabled Ports",
      icon: <FaShip className="text-teal-500" />,
    },
    {
      name: "Automated CFS & ICD",
      icon: <FaRobot className="text-purple-500" />,
    },
    {
      name: "Digital Freight Terminals",
      icon: <FaTruck className="text-orange-500" />,
    },
    {
      name: "Smart Logistics Parks",
      icon: <FaBuilding className="text-green-500" />,
    },
  ];

  const countries = [
    "India",
    "UAE",
    "Qatar",
    "Kuwait",
    "Oman",
    "Kenya",
    "Sri Lanka",
    "Bangladesh",
    "Nepal",
    "Senegal",
    "Madagascar",
  ];

  // Client logos data
  const clientLogos = [
    { id: 1, name: "Ashte Logistics", logo: c2 },
    { id: 2, name: "SBW Logistics", logo: c3 },
    { id: 3, name: "Mundhra Container", logo: c4 },
    { id: 4, name: "Contrans Logistic", logo: c5 },
    { id: 5, name: "Transworld Logistics", logo: c6 },
    { id: 6, name: "Seaway Logistics", logo: c7 },
    { id: 7, name: "Global Freight", logo: c8 },
    { id: 8, name: "Maritime Solutions", logo: c9 },
    { id: 9, name: "Container Express", logo: c2 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const handleLearnMoreClick = () => {
    localStorage.setItem("openMoreDropdown", "true");

    navigate("/more/key-clientele");
  };

  const handleViewAllClients = () => {
    navigate("/more/key-clientele");
  };

  return (
    <div className="bg-white">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50 z-10"></div>

          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover max-h-[600px]"
          >
            <source
              src="https://raw.githubusercontent.com/Rutujapatil2411/project-assets/main/video2.mp4"
              type="video/mp4"
            />
          </video>
          {/* <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover max-h-[600px]"
          >
<source src="/videos/video2.mp4" type="video/mp4" />
          </video> */}
        </div>

        <div className="absolute inset-0 z-20 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`circle-${i}`}
              className="absolute border-2 rounded-full"
              style={{
                width: `${60 + i * 20}px`,
                height: `${60 + i * 20}px`,
                borderColor:
                  i % 2 === 0
                    ? "rgba(96, 165, 250, 0.4)"
                    : "rgba(167, 139, 250, 0.4)",
                top: `${10 + i * 15}%`,
                left: `${10 + i * 10}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* {[0, 1, 2].map((i) => (
            <motion.div
              key={`scan-${i}`}
              className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              style={{ top: `${i * 33}%` }}
              animate={{
                x: ["-100%", "100%"],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))} */}
        </div>

        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.h1
              className="text-xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Delivering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                AI Excellence
              </span>{" "}
              in Smart Gate & Yard Management
            </motion.h1>
            <motion.p
              className="text-xl max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Founded in 2009 and headquartered in Pune, Rapportsoft is a
              trusted AI solutions provider for smart gate operations and yard
              management. With ISO-certified processes and deep AI expertise, we
              design and deliver scalable, secure, and intelligent enterprise
              systems that drive operational efficiency and digital
              transformation.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/about")}
                className="px-8 py-3 bg-white text-blue-900 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Know More About Us →
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section  */}

      <section className="relative py-20 bg-gray-50 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Our Achievements
              </span>
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Delivering innovation, precision, and measurable impact in
              AI-driven logistics solutions for over 15+ years.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.04 }}
                className="bg-white rounded-xl p-6 shadow-md 
                     border border-gray-200 
                     hover:border-cyan-400 
                     hover:shadow-2xl 
                     transition-all duration-300 
                     relative overflow-hidden group"
              >
                {/* Gradient Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <motion.div
                    className="w-16 h-16 flex items-center justify-center 
             rounded-full 
             bg-gradient-to-r from-cyan-400/10 to-purple-400/10
             border border-cyan-400/30
             shadow-md mb-4
             transition-all duration-500
             group-hover:rotate-[360deg]"
                  >
                    <div className="text-cyan-500 text-xl">{stat.icon}</div>
                  </motion.div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>

                  <div className="text-lg font-semibold text-gray-800 mb-2">
                    {stat.label}
                  </div>

                  <div className="text-sm text-gray-600">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section  */}

      <section className="relative py-16 bg-white overflow-hidden">
        <AnimatedShapes />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Why Choose Rapportsoft
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine industry expertise with cutting-edge AI technology to
              deliver solutions that transform your operations
            </p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: -activeWhyChoose * 100 + "%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <motion.div
                      className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto hover:bg-white hover:shadow-lg transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div className="flex flex-col items-center justify-center text-center">
                        <motion.div
                          className="mb-4"
                          whileHover={{
                            scale: 1.2,
                            rotate: [0, 10, -10, 0],
                            transition: { duration: 0.5 },
                          }}
                        >
                          {item.icon}
                        </motion.div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {whyChooseUs.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveWhyChoose(index)}
                  className={`w-3 h-3 rounded-full ${index === activeWhyChoose ? "bg-blue-600" : "bg-gray-300"}`}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*  AI-Powered Smart Gate Operation & Yard Management section */}
      <section className="relative py-16 bg-gray-50 overflow-hidden">
        <AnimatedShapes />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                AI-Powered Smart Gate Operation & Yard Management
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of AI-driven solutions revolutionizes yard
              operations, reduces turnaround times, and maximizes efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              className="overflow-hidden shadow-lg relative h-[550px] w-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="relative w-full h-full">
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent z-10 pointer-events-none"></div>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source
                    src="https://raw.githubusercontent.com/Rutujapatil2411/project-assets/main/vid1.mp4"
                    type="video/mp4"
                  />
                </video>
                {/* <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                 <source src="/videos/vid1.mp4" type="video/mp4" />
                </video> */}
              </div>
            </motion.div>
            {/* Right side - Data containers  */}
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {yardManagementData.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                    transition: {
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  }}
                >
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  <div className="absolute inset-[2px] rounded-lg bg-white group-hover:bg-white transition-colors duration-500 -z-10"></div>

                  <div className="relative z-10 flex items-center justify-center">
                    <div className="flex items-center space-x-3 w-full">
                      <motion.div
                        className="p-2 bg-gray-50 rounded-lg shadow-sm flex-shrink-0 group-hover:bg-white group-hover:shadow-md transition-all duration-500"
                        whileHover={{
                          scale: 1.2,
                          rotate: [0, 10, -10, 0],
                          transition: { duration: 0.5 },
                        }}
                      >
                        {item.icon}
                      </motion.div>
                      <div className="text-center flex-1">
                        <h3 className="text-base font-semibold text-gray-800 mb-1 group-hover:text-gray-900 transition-colors duration-500">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-xs group-hover:text-gray-700 transition-colors duration-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Showcase Section */}
      <section className="relative py-16 bg-white overflow-hidden">
        <AnimatedShapes />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Client-Focused. Ethically Guided. Excellence Assured.
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 relative group h-[420px]"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              >
                <source
                  src="https://raw.githubusercontent.com/Rutujapatil2411/project-assets/main/vid2.mp4"
                  type="video/mp4"
                />
              </video>
              {/* <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              >
                <source src="/videos/vid2.mp4" type="video/mp4" />
              </video> */}

              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/0 to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            <motion.div
              className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 relative group h-[420px] mt-32"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              >
                <source
                  src="https://raw.githubusercontent.com/Rutujapatil2411/project-assets/main/vid4.mp4"
                  type="video/mp4"
                />
              </video>
              {/* <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              >
                <source src="/videos/vid4.mp4" type="video/mp4" />
              </video> */}

              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/0 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="relative py-16 bg-gray-50 overflow-hidden">
        <AnimatedShapes />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Advanced AI Features
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3.5xl mx-auto">
              Built on computer vision, machine learning, and digital twin
              technology, our AI platform enables real-time container tracking,
              predictive yard planning, and automated gate operations, improving
              overall operational efficiency.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md relative overflow-hidden group border border-gray-100"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: {
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                }}
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #c181f5 50%, #ffffff 50%)",

                  backgroundSize: "200% 100%",

                  backgroundPosition: "100% 0",

                  transition: "background-position 0.5s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundPosition = "0 0";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundPosition = "100% 0";
                }}
              >
                <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
                  <motion.div
                    className="p-3 bg-gray-50 rounded-lg shadow-sm mb-4 group-hover:bg-white group-hover:shadow-md transition-all duration-500"
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, 10, -10, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={portBg}
            alt="Port Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 z-10"></div>
        </div>

        <div className="absolute inset-0 z-15"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Industry Data  */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-white/20 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -5,
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    scale: 1.02,
                  }}
                >
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        className="text-white/80"
                        whileHover={{
                          scale: 1.3,
                          rotate: [0, 10, -10, 0],
                          transition: { duration: 0.5 },
                        }}
                      >
                        {industry.icon}
                      </motion.div>
                      <span className="text-white font-medium">
                        {industry.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right side - Heading */}
            <motion.div
              className="text-right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.h2
                className="text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Serving Smart Ports &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Yard Ecosystem
                </span>
              </motion.h2>
              <motion.p
                className="text-lg text-white/90 max-w-md ml-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Powered by Artificial Intelligence for smart monitoring,
                automation, and predictive operations. Enabling faster, safer,
                and smarter port and yard management.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Presence Section  */}
      <section className="relative py-20 bg-gray-50 overflow-hidden">
        <AnimatedShapes />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Global Presence Across 11+ Countries
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {countries.map((country, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  <FaMapMarkerAlt className="text-red-500" />
                </motion.div>
                <span className="text-gray-800 font-medium whitespace-nowrap">
                  {country}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Clients Section  */}
      <section className="relative py-16 bg-white overflow-hidden">
        <AnimatedShapes />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Our Clients
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Any organization needs a strong solid foundation of their business
              process implementations for it to sustain in the industry and
              increase ROI.
            </p>
          </motion.div>

          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* First row with 5 logos */}
            <div className="grid grid-cols-5 gap-6 mb-3">
              {clientLogos.slice(0, 5).map((client, index) => (
                <motion.div
                  key={client.id}
                  className="group relative flex items-center justify-center p-4 bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <motion.img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-16 max-w-full object-contain transition-transform duration-300"
                      whileHover={{ scale: 1.1 }}
                    />

                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0"
                      whileHover={{
                        background:
                          "linear-gradient(to right, rgba(96, 165, 250, 0.1), rgba(167, 139, 250, 0.1))",
                        transition: { duration: 0.5 },
                      }}
                    />

                    <div className="absolute top-0 left-0 h-[50%] w-[2px] bg-gray-900 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out" />

                    <div className="absolute top-0 left-0 w-[50%] h-[2px] bg-gray-900 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />

                    <div className="absolute bottom-0 right-0 h-[50%] w-[2px] bg-gray-900 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out" />

                    <div className="absolute bottom-0 right-0 w-[50%] h-[2px] bg-gray-900 origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Second row with 4 logos  */}
            <div className="grid grid-cols-4 gap-6">
              {clientLogos.slice(5, 9).map((client, index) => (
                <motion.div
                  key={client.id}
                  className="group relative flex items-center justify-center p-4 bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <motion.img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-16 max-w-full object-contain transition-transform duration-300"
                      whileHover={{ scale: 1.1 }}
                    />

                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0"
                      whileHover={{
                        background:
                          "linear-gradient(to right, rgba(96, 165, 250, 0.1), rgba(167, 139, 250, 0.1))",
                        transition: { duration: 0.5 },
                      }}
                    />
                    <div className="absolute top-0 left-0 h-[50%] w-[2px] bg-gray-900 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out" />

                    <div className="absolute top-0 left-0 w-[50%] h-[2px] bg-gray-900 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />

                    <div className="absolute bottom-0 right-0 h-[50%] w-[2px] bg-gray-900 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out" />

                    <div className="absolute bottom-0 right-0 w-[50%] h-[2px] bg-gray-900 origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                  </div>
                </motion.div>
              ))}
            </div>
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
              onClick={handleViewAllClients}
              className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-black hover:from-black hover:to-black hover:text-white"
            >
              <span className="flex items-center justify-center gap-2">
                View All Clients
                <span className="opacity-0 group-hover:opacity-100 transform transition-all duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section  */}
      {/* <section className="relative py-16 bg-gray-50 overflow-hidden">
        <AnimatedShapes />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex justify-center">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLearnMoreClick}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Learn More About Our Success
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default HomeSection2;
