import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaRocket, 
  FaChartLine,
  FaStar,
  FaGlobe,
  FaBuilding,
  FaLightbulb,
  FaTrophy
} from 'react-icons/fa';

function AboutSection4() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const milestones = [
    { 
      year: "2011", 
      
      title: "The Rapportsoft Foundation", 
      description: "Inception of Rapportsoft Solutions, focused on high-quality software engineering and partner rapport.",
      icon: <FaBuilding />, 
      x: 20, y: 83.5, 
      color: "from-indigo-400 to-purple-400", 
      achievements: ["Founding Year", "Core IT Services"] 
    },
    { 
      year: "2015", 
      title: "Global Delivery Excellence", 
      description: "Expanded Rapportsoft operations to international markets, specializing in robust web & mobile ecosystems.",
      icon: <FaGlobe />, 
      x: 36, y: 64.5, 
      color: "from-orange-400 to-red-400", 
      achievements: ["Global Presence", "Agile Masters"] 
    },
    { 
      year: "2020", 
      title: "Digital Transformation Leaders", 
      description: "Rapportsoft achieves milestone of delivering mission-critical enterprise software across India.",
      icon: <FaChartLine />, 
      x: 57, y: 43, 
      color: "from-green-400 to-emerald-400", 
      achievements: ["Enterprise Scale", "100+ Partners"] 
    },
    { 
      year: "2025", 
      title: "Launch of Vyantra AI Labs", 
      description: "Strategic expansion into Artificial Intelligence, bridging Rapportsoft's experience with modern deep learning.",
      icon: <FaLightbulb />, 
      x: 80, y: 25, 
      color: "from-purple-400 to-pink-400", 
      achievements: ["AI Research Wing", "Mumbai HQ"] 
    },
    { 
      year: "2026", 
      title: "Vyantra AI Labs: The Next Frontier", 
      description: "Completing 1 year of specialized AI research and Generative AI solutions for global enterprises.",
      icon: <FaRocket />, 
      x: 88, y: 18, 
      color: "from-blue-400 to-cyan-400", 
      achievements: ["GenAI Integration", "5+ AI Solutions"] 
    },
  ];

  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* --- BACKGROUND (UNCHANGED) --- */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-purple-900/40 to-gray-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/80" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent 79px, #4299e1 79px, #4299e1 81px, transparent 81px),
                              linear-gradient(transparent 79px, #4299e1 79px, #4299e1 81px, transparent 81px)`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-4 backdrop-blur-sm"
          >
            <FaStar className="mr-2 text-yellow-400" />
            Our Journey
          </motion.div>
          <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Milestones That <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">Define Us</span>
          </motion.h2>
        </div>

       {/* --- COMPACT GLOWING LINE GRAPH --- */}
<div className="relative h-[400px] w-full max-w-5xl mx-auto mt-8">
  
  {/* Vertical Axis (Y-Axis) */}
<div className="absolute left-0 bottom-0 w-[3px] h-full bg-gradient-to-t from-[#22d3ee] via-[#22d3ee]/50 to-transparent z-0 shadow-[0_0_10px_rgba(34,211,238,0.5)]">      <span className="absolute -left-10 top-0 text-[10px] text-white font-bold uppercase rotate-[-90deg] origin-right">Growth</span>
  </div>

  {/* Horizontal Axis (X-Axis) */}
<div className="absolute left-0 bottom-0 w-full h-[3px] bg-gradient-to-r from-[#22d3ee] via-[#22d3ee]/50 to-transparent z-0 shadow-[0_0_10px_rgba(34,211,238,0.5)]">      <span className="absolute right-0 -bottom-6 text-[10px] text-white font-bold uppercase">Timeline</span>
  </div>

  <svg 
    className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
    viewBox="0 0 1100 400" 
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="line-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    
    {[25, 50, 75].map((pos) => (
      <line key={pos} x1="0" y1={`${pos}%`} x2="88%" y2={`${pos}%`} stroke="white" strokeWidth="1" strokeDasharray="5,5" className="opacity-5" />
    ))}

    <motion.path
      d="M 5 395 C 150 390, 350 280, 550 200 S 800 120, 968 72" 
      fill="none"
      stroke="url(#line-gradient)"
      strokeWidth="4"
      filter="url(#glow)"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2.5, ease: "easeInOut" }}
    />
  </svg>

          {milestones.map((item, index) => {
            const isLastMilestones = index >= 3;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + (index * 0.2) }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                
                style={{ left: `${item.x}%`, top: `${item.y}%` }}
              >
                {/* Year + Name Label */}
<div className={`absolute ${isLastMilestones ? '-top-12' : 'top-14'} left-1/2 -translate-x-1/2 text-center`}>
  <div className="text-white font-bold text-xs tracking-widest">
    {item.year}
  </div>
  <div className="text-[10px] text-white font-semibold mt-0.5 whitespace-nowrap">
    {index <= 2 ? "Rapportsoft" : "Vyantra AI Labs"}
  </div>
</div>

                {/* Point Icon */}
                <motion.div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ scale: 1.15 }}
                  className="relative cursor-pointer z-30"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg border border-white/20 backdrop-blur-sm`}>
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  <div className={`absolute inset-[-3px] bg-gradient-to-r ${item.color} rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </motion.div>

                {/* --- CARD ON HOVER --- */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: isLastMilestones ? -15 : 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: isLastMilestones ? -10 : 10, scale: 0.95 }}
                      className={`absolute ${isLastMilestones ? 'top-full mt-6' : 'bottom-full mb-6'} left-1/2 -translate-x-1/2 w-[280px] md:w-[360px] z-50 pointer-events-none`}
                    >
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-xl blur-xl opacity-30`} />
                        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 md:p-7 shadow-2xl border border-gray-700/50">
                          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-400/30 rounded-tl-xl" />
                          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-400/30 rounded-br-xl" />
                          
                          <div className={`absolute -top-3 right-4 px-3 py-0.5 rounded-full bg-gradient-to-r ${item.color} text-white text-[10px] font-bold shadow-lg`}>
                            {item.year}
                          </div>

                          <h3 className="text-lg font-bold text-white mb-2 mt-1">{item.title}</h3>
                          <p className="text-gray-300 text-xs leading-relaxed mb-3">{item.description}</p>
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {item.achievements.map((achieve, i) => (
                              <span key={i} className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-gray-800 text-gray-300 border border-gray-700">
                                {achieve}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Achievement Summary & CTA */}
        <div className="mt-16 md:mt-24 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-3 text-gray-200 bg-gray-800/40 backdrop-blur-md px-6 py-4 rounded-xl border border-gray-700/50 shadow-xl max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-2">
              <FaTrophy className="text-yellow-400 text-sm" />
              <span className="font-semibold text-sm">16 Combined Years of Expertise</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-700" />
            <div className="flex items-center gap-2">
              <FaBuilding className="text-blue-400 text-sm" />
              <span className="font-semibold text-sm">Rapportsoft + Vyantra Collaboration</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 group">
              <span className="text-sm">Explore Our Journey</span>
              <FaRocket className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection4;