import React from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import aiFeaturesBg from "../../assets/img/AIFeatures.jpg";
import controlPanelImg from "../../assets/img/Features.png";

const steps = [
  {
    stepNumber: "01",
    title: "Data Foundation",
    desc: "Establishing the core data layer by aggregating real-time inputs and historical logs to fuel the AI engine.",
    icon: "🛰️",
    features: [
      "GPS & Telemetry from Trucks/Trailers",
      "CCTV Sensors for OCR & Safety",
      "IoT: Weighbridge, Fuel, Gate Scanners",
      "Data Lake Construction (MySQL/Cloud DB)",
      "Historical Dataset Aggregation"
    ]
  },
  {
    stepNumber: "02",
    title: "Gate Automation",
    desc: "Automating entry/exit protocols using Computer Vision and Deep Learning to ensure compliance and speed.",
    icon: "👁️",
    features: [
      "Computer Vision OCR (Container/Truck Plates)",
      "Auto Damage Detection (Dents/Rust)",
      "EIR Copy Data Extraction",
      "Anomaly Detection (Wrong Truck/Overstay)",
      "NLP Chatbot for Driver Assistance"
    ]
  },
  {
    stepNumber: "03",
    title: "Smart Slot Allocation",
    desc: "Using Supervised ML to predict dwell times and optimization algorithms to assign the perfect yard slot.",
    icon: "⚙️",
    features: [
      "Supervised ML Prediction Models",
      "Import vs Export Demand Forecasting",
      "Seasonal Peak Detection (Diwali/Xmas)",
      "Optimization Algorithms (Minimize Re-handles)",
      "Short-Stay Near Gate Logic"
    ]
  },
  {
    stepNumber: "04",
    title: "Yard Traffic Optimization",
    desc: "Deploying Reinforcement Learning agents to dynamically manage traffic flow and equipment routing.",
    icon: "🚦",
    features: [
      "Reinforcement Learning (DQN/PPO)",
      "Real-time Truck Flow Management",
      "Optimal Route Calculation for Stackers",
      "Reduced Waiting Times",
      "Equipment Telemetry Integration"
    ]
  },
  {
    stepNumber: "05",
    title: "Real-Time Visibility",
    desc: "Creating a digital mirror of the yard to simulate scenarios and provide actionable insights via dashboards.",
    icon: "🖥️",
    features: [
      "Digital Twin Yard Simulation",
      "AI-Powered Dashboard & Heatmaps",
      "Predicted Truck Turnaround Times",
      "Bottleneck & Congestion Alerts",
      "Live Slot Occupancy Tracking"
    ]
  },
  {
    stepNumber: "06",
    title: "Continuous Improvement",
    desc: "Closing the loop with continuous learning systems that retrain and refine operations based on feedback.",
    icon: "📈",
    features: [
      "Weekly/Monthly Model Retraining",
      "AI vs Manual Benchmarking",
      "Feedback Loop with Supervisors",
      "System Self-Learning Capabilities",
      "KPI Performance Modeling"
    ]
  },
];

const aiModels = [
  { name: "YOLO / OpenCV", type: "Computer Vision", desc: "Gate OCR & Damage Detection" },
  { name: "XGBoost / OR-Tools", type: "Supervised ML", desc: "Slot Allocation & Optimization" },
  { name: "DQN / PPO", type: "Reinforcement Learning", desc: "Traffic Flow & Routing" },
  { name: "Prophet / ARIMA", type: "Time Series AI", desc: "Demand Forecasting" },
];

const stats = [
  { value: "40%", label: "Faster Turnaround" },
  { value: "35%", label: "Cost Reduction" },
  { value: "30%", label: "Throughput Increase" },
  { value: "25%", label: "Manual Effort Reduction" },
];

const glow =
  "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-cyan-500 before:to-purple-600 before:blur-xl before:opacity-30 before:-z-10 before:transition-opacity before:duration-500 group-hover:before:opacity-60";

const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseFloat(value);
  const isDecimal = value.includes(".");
  const endValue = numericValue;

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(easeOutQuart * endValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [endValue, duration]);

  return (
    <span>
      {isDecimal ? count.toFixed(1) : Math.floor(count)}%
    </span>
  );
};

const StatCard = ({ item, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, scale: 0.8, y: 50 },
        visible: { 
          opacity: 1, 
          scale: 1, 
          y: 0,
          transition: { duration: 0.5, delay: index * 0.1, type: "spring" }
        }
      }}
    >
      
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-75 transition duration-500"></div>
      
      <div className="relative h-full bg-[#050B1A] border border-white/5 rounded-2xl p-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <motion.div
            className="mb-4 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
          >
            <AnimatedCounter value={item.value} />
          </motion.div>
          <div className="h-1 w-12 bg-gray-700 rounded-full overflow-hidden mb-3">
            <motion.div 
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
            />
          </div>
          <p className="text-gray-400 text-sm font-medium tracking-wider uppercase">{item.label}</p>
        </div>
      </div>
    </motion.div>
  );
};

const PipelineCard = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative md:col-span-1"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute -inset-1 rounded-2xl blur transition-all duration-500
        ${
          isHovered
            ? "bg-gradient-to-r from-cyan-500 to-purple-600 opacity-40 scale-105"
            : "opacity-0"
        }`}
      ></div>

      
      <div
        className={`relative h-full bg-[#050B1A] border border-white/10 rounded-2xl p-6
        transition-all duration-300 z-10 overflow-hidden
        ${
          isHovered
            ? "scale-105 shadow-2xl shadow-cyan-900/30 border-cyan-500/40"
            : ""
        }`}
      >
      
        
       
        <div
          className={`text-4xl mb-4 relative z-20 transition-transform duration-300
          ${isHovered ? "scale-110" : ""}`}
        >
          {item.icon}
        </div>

       
        <h3
          className={`text-xl font-bold mb-2 relative z-20 transition-colors
          ${isHovered ? "text-cyan-400" : "text-white"}`}
        >
          {item.title}
        </h3>

        
        <p className="text-gray-400 text-sm mb-4 leading-relaxed relative z-20 line-clamp-2">
          {item.desc}
        </p>

        
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden relative z-20"
            >
              <ul className="space-y-2 mt-2 border-t border-white/10 pt-4">

               {item.features.map((feature, i) => (
  <motion.li
    key={i}
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: i * 0.05 }}
    whileHover={{
      scale: 1.08,
      color: "#22d3ee", // cyan color
    }}
    className="flex items-start gap-2 text-xs text-gray-300 cursor-pointer transition-all duration-200"
  >
    <motion.span
      whileHover={{ scale: 1.3 }}
      className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500 flex-shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
    ></motion.span>

    {feature}
  </motion.li>
))}


              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-600"
            initial={{ width: "0%" }}
            animate={isHovered ? { width: "100%" } : { width: "0%" }}
            transition={{ duration: 0.6 }}
          />
        </div>

       
        {isHovered && (
          <div className="absolute bottom-4 right-4 z-20">
            <span className="text-[10px] text-cyan-400 uppercase tracking-widest font-bold">
              Explore →
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const AIFeatures = () => {
  return (
    <div className="w-full text-white overflow-hidden">
     
      <section className="relative h-[1100vh] md:h-[100vh] flex items-center bg-[#050B1A]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aiFeaturesBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <motion.div
          className="absolute bottom-12 left-8 md:left-16 z-10 max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
             AI Features
            </span>
          </h1>

          <p className="text-gray-300 text-lg mb-8 max-w-xl">
            A sophisticated cognitive AI ecosystem engineered to autonomously orchestrate yard management, gate operations, and vehicular traffic dynamics with unprecedented precision and efficiency.
          </p>
        </motion.div>
      </section>

      
     
      <section className="py-28 relative bg-white text-gray-900 overflow-visible"> 
        <div className="max-w-7xl mx-auto px-6 relative z-10">

         <div className="text-center mb-24 relative">
          
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-4 
                       bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 
                       bg-clip-text text-transparent tracking-wide"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            AI Processing Pipeline
          </motion.h2>
           <p className="text-gray-500 max-w-2xl mx-auto">
            A step-by-step cognitive journey transforming raw logistics data into intelligent operational decisions.
          </p>
        </div>

          <div className="grid md:grid-cols-3 gap-8">

            {steps.map((item, i) => (
              <PipelineCard key={i} item={item} index={i} />
            ))}

          </div>
        </div>
      </section>

    
      <section className="py-20 relative bg-gray-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-6">
         <div className="text-center mb-20 relative">
          
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold 
                       bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500
                       bg-clip-text text-transparent tracking-wide"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
           Integrated AI Models & Optimization Engines
          </motion.h2>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiModels.map((model, i) => (
              <motion.div
                key={i}
                
                className={`relative bg-[#050B1A] border border-white/10 p-6 rounded-lg overflow-hidden group hover:bg-[#0a1525] transition-colors duration-300 ${glow}`}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10, 
                  borderColor: "rgba(34, 211, 238, 0.5)" 
                }}
                transition={{ 
                  delay: i * 0.1, 
                  duration: 0.5, 
                  type: "spring" 
                }}
                viewport={{ once: true }}
              >
                <div className="relative z-10">
                  <div className="text-cyan-400 font-bold text-lg mb-2 group-hover:text-cyan-300 transition-colors">{model.name}</div>
                  <div className="text-xs text-purple-400 uppercase tracking-wider mb-2 group-hover:text-purple-300 transition-colors">{model.type}</div>
                  <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{model.desc}</div>
                </div>
                
               
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      
      <section className="py-28 bg-white text-gray-900">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

         
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-8 relative">
             
              <motion.h2
                className="text-3xl md:text-4xl font-extrabold
                           bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500
                           bg-clip-text text-transparent tracking-wide"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Cognitive Command & Control Interface
              </motion.h2>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Exert granular control over the entire logistics ecosystem through our unified cognitive dashboard, designed for predictive monitoring, strategic foresight, and automated operational optimization.
            </p>

            <div className="space-y-4">
              {[
                "Real-Time Asset Density Heatmap",
                "Proactive Queue Forecasting & Mitigation",
                "Intelligent Anomaly & Compliance Alerting",
                "Predictive KPI & Performance Modeling",
                "Digital Twin Simulations", 
                "NLP Chatbot for Drivers ",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 text-gray-800 font-medium cursor-pointer"
                  whileHover={{ scale: 1.05, color: "#0891b2" }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="text-cyan-600 text-xl">▸</span>
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={controlPanelImg}
              alt="Cognitive Command & Control Interface"
              className="w-full h-auto object-cover rounded-xl shadow-2xl border border-gray-200"
            />
          </motion.div>

        </div>
      </section>

     
      
      <section className="py-24 relative bg-[#020617]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 relative">
            
            <motion.h2
              className="text-3xl md:text-4xl font-extrabold
                         bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500
                         bg-clip-text text-transparent tracking-wide"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Performance Impact
            </motion.h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((item, i) => (
              <StatCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIFeatures;