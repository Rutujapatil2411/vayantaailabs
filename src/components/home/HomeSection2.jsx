import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

import aiImage from '../../assets/img/ai.jpg';
import team from '../../assets/img/team.jpg';
import AI from '../../assets/img/ai1.jpg'; 
import AI2 from '../../assets/img/ai2.jpg'; 
import AI3 from '../../assets/img/ai3.jpg'; 
import AI4 from '../../assets/img/ai4.jpg';
import portBg from '../../assets/img/shipping.jpg'; 

// Import company logos
import c2 from '../../assets/companies/c2.png';
import c3 from '../../assets/companies/c3.png';
import c4 from '../../assets/companies/c4.png';
import c5 from '../../assets/companies/c5.png';
import c6 from '../../assets/companies/c6.png';
import c7 from '../../assets/companies/c7.png';
import c8 from '../../assets/companies/c8.png';
import c9 from '../../assets/companies/c9.png';

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
  FaBuilding
} from 'react-icons/fa';

const HomeSection2 = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  
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
      label: "AI-Powered Yard Solutions",
      description: "Smart Gate & Yard Automation Systems"
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

  // New data for the AI-Powered Smart Gate Operation & Yard Management section
  const yardManagementData = [
    {
      icon: <FaRobot className="text-xl text-blue-500" />,
      title: "Automated Gate Operations",
      description: "Reduce gate processing time by 60% with AI-powered automation"
    },
    {
      icon: <FaEye className="text-xl text-purple-500" />,
      title: "Container Recognition",
      description: "OCR technology for accurate container identification in seconds"
    },
    {
      icon: <FaBrain className="text-xl text-green-500" />,
      title: "Intelligent Yard Planning",
      description: "AI algorithms optimize container placement for maximum efficiency"
    },
    {
      icon: <FaChartLine className="text-xl text-yellow-500" />,
      title: "Real-time Analytics",
      description: "Monitor operations with live dashboards and predictive insights"
    },
    {
      icon: <FaCogs className="text-xl text-red-500" />,
      title: "Equipment Optimization",
      description: "Reduce equipment idle time by 35% through smart scheduling"
    },
    {
      icon: <FaWarehouse className="text-xl text-indigo-500" />,
      title: "Digital Twin Technology",
      description: "Virtual yard simulation for scenario planning and optimization"
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
      icon: <FaBrain className="text-2xl text-indigo-500" />,
      title: "Digital Twin Simulation",
      description: "Simulate congestion & traffic scenarios"
    },
    {
      icon: <FaChartLine className="text-2xl text-blue-500" />,
      title: "AI Demand Forecasting",
      description: "Predict peak container volumes"
    },
    {
      icon: <FaEnvelope className="text-2xl text-purple-500" />,
      title: "WhatsApp / SMS Notifications & Alerts",
      description: "Instant communication system"
    }
  ];

  const products = [
    "AI Smart Gate Automation",
    "OCR Container Recognition",
    "AI Yard Slot Allocation",
    "Digital Twin Yard System",
    "Predictive Dwell Time System",
    "Damage Detection System"
  ];

  // Updated industries array with specific icons and colors for each industry
  const industries = [
    {
      name: "Smart Container Yards",
      icon: <FaWarehouse className="text-blue-500" />
    },
    {
      name: "AI Enabled Ports",
      icon: <FaShip className="text-teal-500" />
    },
    {
      name: "Automated CFS & ICD",
      icon: <FaRobot className="text-purple-500" />
    },
    {
      name: "Digital Freight Terminals",
      icon: <FaTruck className="text-orange-500" />
    },
    {
      name: "Smart Logistics Parks",
      icon: <FaBuilding className="text-green-500" />
    }
  ];

  const countries = [
    "India", "UAE", "Qatar", "Kuwait", "Oman", 
    "Kenya", "Sri Lanka", "Bangladesh", "Nepal", "Senegal", "Madagascar"
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
    { id: 9, name: "Container Express", logo: c2 } // Using c2 again as an example
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Increased stagger time for better visibility
        delayChildren: 0.3
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

  const handleViewAllClients = () => {
    // Navigate to the key-clientele page when View All Clients button is clicked
    navigate('/more/key-clientele');
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Container Yard Background + AI Overlay */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90 z-10"></div>
          <img 
            src={AI}
            alt="AI-Powered Container Yard" 
            className="w-full h-full object-cover max-h-[600px]"
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
              Delivering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI Excellence</span> in Smart Gate & Yard Management
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Founded in 2009 and headquartered in Pune, Rapportsoft is a trusted AI solutions provider for smart gate operations and yard management. With ISO-certified processes and deep AI expertise, we design and deliver scalable, secure, and intelligent enterprise systems that drive operational efficiency and digital transformation.
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

      {/* Modified Products Section - AI-Powered Smart Gate Operation & Yard Management */}
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AI-Powered Smart Gate Operation & Yard Management</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of AI-driven solutions revolutionizes yard operations, reduces turnaround times, and maximizes efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div 
              className="rounded-lg overflow-hidden shadow-lg h-full relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative w-full h-full overflow-hidden">
                <img 
                  src={isHovered ? AI3 : AI4} 
                  alt="AI-Powered Yard Management" 
                  className="w-full h-full object-cover transition-opacity duration-500"
                  style={{ height: "calc(6 * 76px + 5 * 16px)" }} // Match the height of 6 containers with spacing
                />
                {/* Optional: Add a subtle overlay on hover */}
                {isHovered && (
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent pointer-events-none"></div>
                )}
              </div>
            </motion.div>

            {/* Right side - Data containers with reduced size */}
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
                  className="bg-white rounded-lg p-3 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  <div className="absolute inset-[1px] rounded-lg bg-white group-hover:bg-white transition-colors duration-300 -z-10"></div>
                  <div className="relative z-10 flex items-start space-x-3">
                    <div className="p-2 bg-gray-50 rounded-lg shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-xs">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Showcase Section - Simplified from "Why Choose Us" */}
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
            className="grid grid-cols-2 gap-4"
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
                src={aiImage} 
                alt="AI Control Room" 
                className="w-full h-68 object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
            <motion.div 
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={team}  
                alt="AI Expert Team" 
                className="w-full h-68 object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AI Features Section */}
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Advanced AI Features</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI-powered features deliver measurable results with 30-40% faster truck turnaround, 25-35% reduction in re-handling costs, and 20-30% higher yard throughput.
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
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                <div className="absolute inset-[1px] rounded-lg bg-white group-hover:bg-white transition-colors duration-300 -z-10"></div>
                <div className="relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gray-50 rounded-lg shadow-sm">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve Section - Updated with background image and new layout */}
      <section className="relative py-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={portBg} 
            alt="Port Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 z-10"></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Industry Data */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {industries.map((industry, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-white/20 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                >
                  <div className="relative z-10 flex items-center space-x-3">
                    <div className="text-white/80">
                      {industry.icon}
                    </div>
                    <span className="text-white font-medium">{industry.name}</span>
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
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Serving Smart Ports & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Yard Ecosystem</span>
              </h2>
              <p className="text-lg text-white/90 max-w-md ml-auto">
                Powered by Artificial Intelligence for smart monitoring, automation, and predictive operations. Enabling faster, safer, and smarter port and yard management.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Presence Section - Increased padding to ensure proper display */}
      <section className="py-20 bg-gray-50">
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
                <span className="text-gray-800 font-medium whitespace-nowrap">{country}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Clients Section - Updated with new design */}
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Our Clients</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Any organization needs a strong solid foundation of their business process implementations for it to sustain in the industry and increase ROI.
            </p>
          </motion.div>

          <motion.div 
            className="mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* First row with 5 logos - no rounded corners */}
            <div className="grid grid-cols-5 gap-6 mb-3">
              {clientLogos.slice(0, 5).map((client, index) => (
                <motion.div 
                  key={client.id}
                  className="flex items-center justify-center p-4 bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                  }}
                >
                  <div className="relative w-full h-full">
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="max-h-16 max-w-full object-contain transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 hover:from-blue-600/10 hover:to-purple-600/10 transition-all duration-500"></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Second row with 4 logos - no rounded corners */}
            <div className="grid grid-cols-4 gap-6">
              {clientLogos.slice(5, 9).map((client, index) => (
                <motion.div 
                  key={client.id}
                  className="flex items-center justify-center p-4 bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index + 5) * 0.1 }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                  }}
                >
                  <div className="relative w-full h-full">
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="max-h-16 max-w-full object-contain transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 hover:from-blue-600/10 hover:to-purple-600/10 transition-all duration-500"></div>
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
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewAllClients}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              View All Clients
            </motion.button>
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