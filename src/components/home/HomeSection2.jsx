import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FaSearchLocation } from "react-icons/fa";
import { useParallax } from "react-scroll-parallax";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import {
  FaClipboardList,
  FaCrosshairs,
  FaSatelliteDish,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa";
import { useEffect } from "react";
import KeyClients from "./KeyClients";

import aiImage from "../../assets/img/ai.jpg";
import team from "../../assets/img/team.jpg";
import AI from "../../assets/img/ai1.jpg";
import AI2 from "../../assets/img/ai2.jpg";
import AI3 from "../../assets/img/ai3.jpg";
import AI4 from "../../assets/img/ai4.jpg";
import portBg from "../../assets/img/shipping.jpg";
import worldMap from "../../assets/img/world-map1.png";

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

const ParallaxCard = ({ children, index, progress }) => {
  const start = index * 0.33;
  const mid = start + 0.15;
  const end = start + 0.33;

  const scale = useTransform(progress, [start, mid, end], [1, 1, 0.8]);
  const opacity = useTransform(progress, [end - 0.05, end + 0.05], [1, 0]);

  return (
    <motion.div
      className="sticky top-32 flex justify-center"
      style={{
        scale,
        opacity,
        zIndex: index,
      }}
    >
      <div className="w-full max-w-6xl">{children}</div>
    </motion.div>
  );
};

const HomeSection2 = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeWhyChoose, setActiveWhyChoose] = useState(0);

  const WorkflowNode = ({ icon, title, desc, position }) => {
    return (
      <div className={`absolute ${position} group`}>
        <div
          className="  w-56 h-56  bg-white rounded-full  border-4 border-gray-200 shadow-md
        flex flex-col  items-center justify-center  text-center p-6  transition-all duration-300 ease-in-out
        group-hover:shadow-xl  group-hover:-translate-y-2  group-hover:scale-105 group-hover:border-blue-500 " >
          <div className="text-3xl text-blue-600 mb-3 transition-transform duration-300 group-hover:rotate-6">
            {icon}
          </div>

          <h3 className="font-bold text-sm mb-2 text-gray-800">{title}</h3>

          <p className="text-xs text-gray-500 leading-snug">{desc}</p>
        </div>
      </div>
    );
  };
  const workflowData = [
    {
      icon: <FaTruck />,
      title: "Gate Automation",
      desc: "60% faster processing",
    },
    {
      icon: <FaCrosshairs />,
      title: "Container OCR",
      desc: "Instant identification",
    },
    {
      icon: <FaMicrochip />,
      title: "Smart Yard Planning",
      desc: "Optimized placement",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Digital Twin",
      desc: "Virtual yard simulation",
    },
    {
      icon: <FaSearchLocation />,
      title: "Equipment Tracking",
      desc: "35% less idle time",
    },
    {
      icon: <FaSatelliteDish />,
      title: "Live Analytics",
      desc: "Real-time insights",
    },
  ];

  const circlePositions = [
    "top-6 left-52",
    "top-[35%] left-12",
    "top-[60%] left-50",
    "top-[60%] right-50",
    "top-[35%] right-12",
    "top-6 right-52",
  ];

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
      title: "Advanced Slot Allocation",
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
      title: "Technology Expertise",
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
        "Vyantra AI Labs's AI solutions transformed our yard Processes. We've reduced processing times by 60% and improved overall efficiency.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      position: "CEO",
      company: "Smart Logistics Ltd.",
      content:
        "The implementation of AI-powered gate Workflows has been a game-changer for our business. Highly recommend their expertise.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "CTO",
      company: "Container Hub Inc.",
      content:
        "The digital twin technology provided by Vyantra AI Labs has enabled us to optimize our yard layout and reduce congestion significantly.",
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
  
  const countryLocations = [
  { name: "India", top: "52%", left: "68%", labelPos: "bottom-left" },
  { name: "UAE", top: "45%", left: "59%", labelPos: "left" },
  { name: "Qatar", top: "44%", left: "58.5%", labelPos: "top-right" },
  { name: "Kuwait", top: "41%", left: "57%", labelPos: "top-left" },
  { name: "Oman", top: "48%", left: "60%", labelPos: "bottom-right" },
  { name: "Kenya", top: "58%", left: "56%", labelPos: "bottom" },
  { name: "Sri Lanka", top: "60%", left: "69%", labelPos: "bottom" },
  { name: "Bangladesh", top: "49%", left: "72%", labelPos: "right" },
  { name: "Nepal", top: "47%", left: "70%", labelPos: "top" },
  { name: "Senegal", top: "51%", left: "42%", labelPos: "bottom" },
  { name: "Madagascar", top: "73%", left: "61%", labelPos: "bottom" }, 
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

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

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
              className="text-xl max-w-3xl mx-auto mb-8 text-justify"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Founded in 2020 and headquartered in Pune, Vyantra AI Labs is a
              trusted technology partner delivering intelligent gate automation
              and terminal management systems. With ISO-certified processes and
              deep AI expertise, we design and deliver scalable, secure, and
              intelligent enterprise systems that drive operational efficiency
              and digital transformation.
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
              Delivering innovation, precision, and measurable impact in Smart
              logistics systems Products for over 15+ years.
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
             transition-all duration-500"
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
                Why Choose Vyantra AI Labs
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine industry expertise with cutting-edge AI technology to
              deliver solutions that transform your Workflows
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

      <section ref={sectionRef} className="relative bg-white h-[340vh] bg-gradient-to-br from-purple-50 via-pink-50 to-violet-100"  >
        <AnimatedShapes />
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 space-y-16">

            {/* CARD 1: AI-Powered Smart Gate Operation   */}
          <ParallaxCard index={0} progress={scrollYProgress}>
            <div
              className="  relative bg-gray-50 rounded-3xl shadow-xl border border-gray-200 px-6 md:px-12 py-6
              overflow-hidden transition-all duration-500 ">

              {/* Section Header */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gray-900 rounded-full text-white text-xs uppercase tracking-wide shadow-lg">
                  <FaMicrochip className="text-blue-400" />
                  <span>Intelligent Workflow</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI-Powered Smart Gate Operation & Yard Management
                </h2>

                <p className="text-gray-600 mt-1 max-w-2xl mx-auto">
                  A centralized AI decision engine that processes real-time
                  vision, tracking, and yard intelligence.
                </p>
              </div>

              {/* TREE CONTAINER (Desktop) */}
              <div className="relative h-[480px] hidden md:block mt-6">
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                  <line
                    x1="50%"
                    y1="50%"
                    x2="26%"
                    y2="16%"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />

                  <line
                    x1="50%"
                    y1="50%"
                    x2="18%"
                    y2="49%"
                    stroke="#8b5cf6"
                    strokeWidth="2"
                  />

                  <line
                    x1="50%"
                    y1="50%"
                    x2="26%"
                    y2="80%"
                    stroke="#06b6d4"
                    strokeWidth="2"
                  />

                  <line
                    x1="50%"
                    y1="50%"
                    x2="74%"
                    y2="16%"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />

                  <line
                    x1="50%"
                    y1="50%"
                    x2="82%"
                    y2="49%"
                    stroke="#8b5cf6"
                    strokeWidth="2"
                  />

                  <line
                    x1="50%"
                    y1="50%"
                    x2="74%"
                    y2="80%"
                    stroke="#06b6d4"
                    strokeWidth="2"
                  />
                </svg>
                {/* CENTER AI CORE */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex flex-col items-center justify-center text-center shadow-2xl px-4">
                    <FaBrain className="text-white text-2xl mb-2" />
                    <span className="text-white text-sm font-semibold leading-tight">
                      Processing Core
                    </span>
                  </div>
                </div>
                {/* ORBITING CARDS */}
                {workflowData.map((item, index) => (
                  <div
                    key={item.title}
                    className={`absolute ${circlePositions[index]} z-10`} >
                    <div className="w-36 h-36 bg-white rounded-full border-4 border-gray-200 shadow-md flex flex-col items-center justify-center text-center p-3 relative">
                      <div className="text-1xl text-blue-600 mb-3">
                        {item.icon}
                      </div>
                      <h3 className="font-bold text-sm mb-2 text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-snug">
                        {item.desc}
                      </p>
                      <span className="absolute -bottom-3 w-7 h-7 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold shadow-md">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              {/* MOBILE FALLBACK (Stacked) */}
              <div className="md:hidden space-y-6 mt-8">
                {workflowData.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-xl shadow-md text-center"
                  >
                    <div className="text-3xl text-blue-600 mb-3">
                      {item.icon}
                    </div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ParallaxCard>

          {/* CARD 2: Automated Container Tracking      */}
          <ParallaxCard index={1} progress={scrollYProgress}>
            <div className=" relative bg-gray-50 rounded-3xl shadow-xl border border-gray-200 px-6 md:px-10 py-6 overflow-hidden " >
              {/* Heading */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-1.5 px-5 py-2 bg-blue-100/70 border border-blue-300 rounded-full text-blue-700 font-medium shadow-sm">
                  <svg
                    className="w-4 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a5 5 0 015 5v1h1a3 3 0 110 6h-1v1a5 5 0 11-10 0v-1H4a3 3 0 110-6h1V7a5 5 0 015-5z" />
                  </svg>
                  <span className="tracking-wide uppercase text-xs">
                    Project Overview
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4 text-gray-900">
                  Automated Container{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Tracking System
                  </span>
                </h2>

                {/* Project Summary Card */}
                <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl border-l-4 border-blue-600 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-800 flex items-center justify-center">
                    <FaClipboardList className="mr-2 text-blue-600" />
                    Core Concept
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-justify mt-2">
                    Your system replaces manual, error-prone container logging
                    with an automated real-time "Digital Twin" of your yard. By
                    mounting cameras on handling equipment like reach stackers
                    or straddle carriers, the system captures data at the point
                    of action, ensuring complete visibility and accuracy.
                  </p>
                </div>
              </div>

              {/* Workflow Section */}
              <motion.div
                className="mb-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}   >
                <h3 className="text-xl md:text-2xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  The Operational Workflow
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                  <div className="hidden md:block absolute left-0 right-0 top-12 z-0">
                    <div className="absolute left-[10%] right-[10%] -top-6 h-[2px] bg-gray-300"></div>
                    <div className="absolute left-0 right-0 h-[4px] bg-gray-200"></div>
                  </div>

                  {[
                    {
                      icon: <FaTruck className="text-3xl text-blue-600" />,
                      title: "1. Pick-up",
                      desc: "Equipment approaches container. Camera feed starts processing.",
                    },
                    {
                      icon: (
                        <FaCrosshairs className="text-3xl text-purple-600" />
                      ),
                      title: "2. YOLO Detection",
                      desc: "YOLO model identifies container and isolates the BIC code area.",
                    },
                    {
                      icon: <FaBrain className="text-3xl text-green-600" />,
                      title: "3. OCR / AI Reading",
                      desc: "OCR engine extracts the alphanumeric ID from container font.",
                    },
                    {
                      icon: (
                        <FaSatelliteDish className="text-3xl text-yellow-600" />
                      ),
                      title: "4. Real-Time Tracking",
                      desc: "Sensor fusion (GPS + AI) tracks path across the yard.",
                    },
                    {
                      icon: (
                        <FaMapMarkedAlt className="text-3xl text-red-600" />
                      ),
                      title: "5. Map Update",
                      desc: "TOS map updates automatically based on final coordinates.",
                    },
                  ].map((step, index) => (
                    <div key={index} className="relative text-center z-10">
                      <div className="w-22 h-22 mx-auto bg-white border-4 border-gray-200 rounded-full flex items-center justify-center mb-4 shadow-lg">
                        {step.icon}
                      </div>
                      <h4 className="font-bold text-lg mb-2 text-gray-800">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-500 px-2">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </ParallaxCard>

          {/* CARD 3: Advanced AI Features   */}
          <ParallaxCard index={2} progress={scrollYProgress}>
            <div className=" relative bg-gray-50 rounded-3xl  shadow-xl border border-gray-200  px-6 md:px-10  py-6  overflow-hidden " >
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Advanced AI Features
                  </span>
                </h2>
                <p className="text-sm text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Built on computer vision, machine learning, and digital twin
                  technology, our Intelligent platform enables real-time
                  container tracking, predictive Space Optimization, and
                  automated gate operations, improving overall operational
                  efficiency.
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
                    className="bg-white rounded-lg p-6 shadow-md relative overflow-hidden border border-gray-300"
                    variants={itemVariants}
                    style={{
                      backgroundColor: "#ffffff", 
                    }}
                  >
                    <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
                      <div className="p-3 bg-gray-50 rounded-lg shadow-sm mb-4 text-2xl text-gray-700">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </ParallaxCard>
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
                and smarter port and Terminal Management.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Presence Section  */}
<section className="relative py-20 bg-gray-50 overflow-hidden">
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Global Presence Across 11+ Countries
        </span>
      </h2>
    </div>

    {/* Map Container */}
    <div className="relative w-full max-w-5xl mx-auto">

      <img
        src={worldMap}
        alt="World Map"
        className="w-full opacity-80"
      />

    
    {/* MARKERS */}

{countryLocations.map((country, index) => {
  
  const getLabelClass = (pos) => {
    switch (pos) {
      case "top-right": return "bottom-full left-full ml-1 mb-1";
      case "top-left": return "bottom-full right-full mr-1 mb-1";
      case "top": return "bottom-full mb-1 left-1/2 -translate-x-1/2";
      case "bottom-right": return "top-full left-full ml-1 mt-1";
      case "bottom-left": return "top-full right-full mr-1 mt-1";
      case "left": return "right-full mr-2 top-1/2 -translate-y-1/2";
      case "right": return "left-full ml-2 top-1/2 -translate-y-1/2";
      default: return "top-full mt-1 left-1/2 -translate-x-1/2"; 
    }
  };

  return (
    <div 
      key={index} 
      className="absolute" 
      style={{ top: country.top, left: country.left, transform: 'translate(-50%, -50%)' }}
    >
      <div className="relative flex items-center justify-center">
        {/* Red Marker Icon */}
        <div className="relative flex items-center justify-center">
          <span className="w-4 h-4 bg-red-500 rounded-full block animate-ping opacity-40 absolute"></span>
          <FaMapMarkerAlt className="text-red-600 text-sm md:text-base relative z-10 drop-shadow-md" />
        </div>

        {/* Dynamic Location Label */}
        <span className={`absolute whitespace-nowrap bg-white/90 backdrop-blur-[2px] px-1.5 py-0.5 rounded shadow-[0_1px_3px_rgba(0,0,0,0.1)] text-[8px] md:text-[10px] font-bold text-gray-800 border border-gray-100 z-20 ${getLabelClass(country.labelPos)}`}>
          {country.name}
        </span>
      </div>
    </div>
  );
})}

    </div>
  </div>
</section>
    </div>
  );
};
export default HomeSection2;
