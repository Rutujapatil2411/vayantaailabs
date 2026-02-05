import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

import aiImage from '../../assets/img/ai.jpg';
import team from '../../assets/img/team.jpg';
import ship from '../../assets/img/shipping.jpg';
import Ai from '../../assets/img/ai.jpg'

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
  FaHandshake
} from 'react-icons/fa';

const HomeSection2 = () => {
  const navigate = useNavigate();
  
  const stats = [
    {
      icon: <FaGlobe className="text-3xl text-blue-500" />,
      value: "11+",
      label: "Countries Served",
      description: "Global presence across multiple continents"
    },
    {
      icon: <FaUsers className="text-3xl text-purple-500" />,
      value: "120+",
      label: "Growing Clients Portfolio",
      description: "Trusted by businesses worldwide"
    },
    {
      icon: <FaBox className="text-3xl text-green-500" />,
      value: "10+",
      label: "Specialized Shipping Products",
      description: "Comprehensive logistics solutions"
    },
    {
      icon: <FaClock className="text-3xl text-yellow-500" />,
      value: "15+",
      label: "Years of Experience",
      description: "Industry expertise since 2009"
    },
    {
      icon: <FaAward className="text-3xl text-red-500" />,
      value: "3",
      label: "ISO Certifications",
      description: "Quality and security standards"
    },
    {
      icon: <FaChartLine className="text-3xl text-indigo-500" />,
      value: "150+",
      label: "Team Professionals",
      description: "Expert developers and consultants"
    }
  ];

  const aiFeatures = [
    {
      icon: <FaEye className="text-2xl text-blue-500" />,
      title: "Automated Gate OCR",
      description: "Using CCTV & ANPR technology"
    },
    {
      icon: <FaRobot className="text-2xl text-purple-500" />,
      title: "AI-based Container Damage Detection",
      description: "Real-time identification and reporting"
    },
    {
      icon: <FaBrain className="text-2xl text-green-500" />,
      title: "Predictive Dwell Time & Yard Congestion Alerts",
      description: "AI-powered forecasting"
    },
    {
      icon: <FaCogs className="text-2xl text-yellow-500" />,
      title: "Smart Slot Allocation",
      description: "Reduce re-handling by 30%"
    },
    {
      icon: <FaChartLine className="text-2xl text-red-500" />,
      title: "Real-time Yard Heatmap & Digital Twin View",
      description: "Complete operational visibility"
    },
    {
      icon: <FaEnvelope className="text-2xl text-indigo-500" />,
      title: "WhatsApp / SMS Notifications & Alerts",
      description: "Instant communication system"
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaClock className="text-2xl text-blue-500" />,
      title: "15+ years of proven logistics domain expertise",
      description: "Deep industry knowledge since 2009"
    },
    {
      icon: <FaCertificate className="text-2xl text-purple-500" />,
      title: "ISO 9001, 20000 & 27001 certified processes",
      description: "Quality and security assured"
    },
    {
      icon: <FaCogs className="text-2xl text-green-500" />,
      title: "Scalable enterprise-grade software architecture",
      description: "Built to grow with your business"
    },
    {
      icon: <FaRobot className="text-2xl text-yellow-500" />,
      title: "AI-powered automation with real business impact",
      description: "30-40% efficiency improvements"
    },
    {
      icon: <FaHandshake className="text-2xl text-red-500" />,
      title: "Dedicated support & long-term partnership approach",
      description: "We grow together with our clients"
    }
  ];

  const industries = [
    "Container Freight Stations (CFS)",
    "Inland Container Depots (ICD)",
    "Ports & Terminals",
    "Shipping Lines",
    "Empty Container Yards",
    "Warehousing & Cold Storage",
    "Transportation & Fleet Operators"
  ];

  const countries = [
    "India", "UAE", "Qatar", "Kuwait", "Oman", 
    "Kenya", "Sri Lanka", "Bangladesh", "Nepal", "Senegal", "Madagascar"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const handleLearnMoreClick = () => {
    // Set a flag in localStorage to indicate we want to open the More dropdown
    localStorage.setItem('openMoreDropdown', 'true');
    // Navigate to the key-clientele page which is most relevant to "success"
    navigate('/more/key-clientele');
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Port/Container Yard Background + AI Overlay */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90 z-10"></div>
          <img 
            src={ship}
              alt="Container Yard" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* AI Overlay Animation */}
        <div className="absolute inset-0 z-20 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border-2 border-purple-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 border-2 border-indigo-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 right-1/3 w-12 h-12 border-2 border-pink-400 rounded-full animate-ping"></div>
          
          {/* Scanning Lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
          <div className="absolute top-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-2/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>
        
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Delivering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">IT Excellence</span> in Global Logistics
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Founded in 2009 and headquartered in Pune, Rapportsoft is a trusted IT solutions provider for the shipping, logistics, and transportation industry. With ISO-certified processes and deep domain expertise, we design and deliver scalable, secure, and intelligent enterprise systems that drive operational efficiency and digital transformation.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/about')}
              className="px-8 py-3 bg-white text-blue-900 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Know More About Us →
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {/* Gradient border effect with thinner border */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                <div className="absolute inset-[1px] rounded-xl bg-white group-hover:bg-white transition-colors duration-300 -z-10"></div>
                <div className="relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gray-50 rounded-lg shadow-sm">
                      {stat.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-lg font-medium text-gray-800 mb-2">{stat.label}</div>
                      <div className="text-sm text-gray-600">{stat.description}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
            ))}
          </motion.div>
          
        </div>
      </section>

      {/* Why Choose Us Section */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Client-Focused. Ethically Guided. Excellence Assured.</span>
      </h2>
    </motion.div>
    
    {/* Two small images in one row */}
    <motion.div 
      className="grid grid-cols-2 gap-4 mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.02 }}
      >
        <img 
                src={Ai } 
                alt="Professional team collaboration" 
                className="w-full h-64 object-cover"
              />
      </motion.div>
      <motion.div 
        className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.02 }}
      >
        <img 
          src={team}  
          alt="Excellence in service delivery" 
          className="w-full h-64 object-cover"
        />
      </motion.div>
    </motion.div>
    
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {whyChooseUs.map((item, index) => (
        <motion.div 
          key={index}
          className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
          variants={itemVariants}
          whileHover={{ y: -5 }}
        >
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          <div className="absolute inset-[1px] rounded-lg bg-white group-hover:bg-white transition-colors duration-300 -z-10"></div>
          <div className="relative z-10">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gray-50 rounded-lg shadow-sm">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      {/* Industries We Serve Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Serving the Global Logistics Ecosystem</span>
            </h2>
          </motion.div>

          <motion.div 
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {industries.map((industry, index) => (
    <motion.div 
      key={index}
      className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
      variants={itemVariants}
      whileHover={{ y: -5 }}
    >
      {/* Gradient border effect with thinner border */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      <div className="absolute inset-[1px] rounded-lg bg-white group-hover:bg-white transition-colors duration-300 -z-10"></div>
      <div className="relative z-10 flex items-center space-x-3">
        <FaIndustry className="text-blue-500" />
        <span className="text-gray-800 font-medium">{industry}</span>
      </div>
    </motion.div>
  ))}
</motion.div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Global Presence Across 11+ Countries</span>
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
                whileHover={{ scale: 1.05 }}
              >
                <FaMapMarkerAlt className="text-red-500" />
                <span className="text-gray-800 font-medium">{country}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLearnMoreClick}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Learn More About Our Success
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection2;