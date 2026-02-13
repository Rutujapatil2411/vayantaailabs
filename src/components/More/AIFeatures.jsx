import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import aiFeaturesBg from "../../assets/img/AIFeatures.jpg";
import controlPanelImg from "../../assets/img/Features.png";

const steps = [
  {
    title: "Multi-Modal Data Aggregation",
    desc: "Our AI ingests and synthesizes heterogeneous data streams from a constellation of IoT sensors, high-precision GPS modules, and advanced CCTV networks to create a unified operational truth.",
    icon: "🛰",
  },
  {
    title: "High-Fidelity Vision Analytics",
    desc: "Leveraging state-of-the-art computer vision (YOLO, OpenCV), the system performs meticulous, real-time diagnostics of vehicle integrity, container identification, and compliance verification at the gate.",
    icon: "👁️",
  },
  {
    title: "Intelligent Asset Orchestration",
    desc: "A proprietary machine learning engine (XGBoost) dynamically calculates and assigns optimal yard positions (slots), maximizing spatial utilization and minimizing asset dwell times.",
    icon: "⚙️",
  },
  {
    title: "Digital Twin Simulation",
    desc: "Simulate congestion scenarios and 'what-if' strategies before applying them to the real yard. Visualize outcomes to reduce risks and optimize operations without physical disruption.",
    icon: "🌐",
  },
  {
    title: "Cognitive Command Nexus",
    desc: "A unified analytics and supervisory hub providing holistic, real-time visibility and predictive insights into all operational facets for strategic decision-making.",
    icon: "🖥️",
  },
  {
    title: "NLP Driver Assistant",
    desc: "AI-powered Chatbot integrated with WhatsApp and SMS APIs, allowing truck drivers to query entry status, slot info, and instructions instantly without manual intervention.",
    icon: "💬",
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
  "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-cyan-500 before:to-purple-600 before:blur-xl before:opacity-30 before:-z-10";

const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = React.useState(0);
  const numericValue = parseFloat(value);
  const isDecimal = value.includes(".");
  const endValue = numericValue;

  React.useEffect(() => {
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

      
      <section className="py-28 relative bg-white text-gray-900">
        
        <div className="max-w-7xl mx-auto px-6 relative">

         <div className="text-center mb-24 relative">
          
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-20 
                       bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 
                       bg-clip-text text-transparent tracking-wide"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            AI Processing Pipeline
          </motion.h2>
        </div>

          <div className="grid md:grid-cols-3 gap-12">

            {steps.map((item, i) => (
              <motion.div
                key={i}
                
                className={`relative group bg-[#050B1A] p-8 rounded-xl border border-white/10 ${glow}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <div className="text-5xl mb-6">{item.icon}</div>

                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </motion.div>
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

          {/* Left */}
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
                "Digital Twin Simulations (What-if Analysis)", 
                "NLP Chatbot for Drivers (WhatsApp/SMS)",
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