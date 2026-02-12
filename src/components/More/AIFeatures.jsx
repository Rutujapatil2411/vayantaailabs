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

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.7,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      boxShadow: "0 20px 40px rgba(0, 255, 255, 0.3)",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const glowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.3,
      transition: {
        delay: index * 0.15 + 0.3,
        duration: 0.8
      }
    },
    hover: {
      opacity: 0.6,
      scale: 1.2,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className="relative bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/10 overflow-hidden group min-w-[350px]"
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      whileHover="hover"
    >

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur-xl -z-10"
        variants={glowVariants}
        initial="hidden"
        animate={controls}
        whileHover="hover"
      />

      <div className="absolute inset-0 overflow-hidden rounded-xl">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <motion.h3
          className="text-4xl font-bold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
        >
          <AnimatedCounter value={item.value} />
        </motion.h3>

        <motion.p
          className="text-gray-300 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.15 + 0.7, duration: 0.5 }}
        >
          {item.label}
        </motion.p>
      </div>


      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const AIFeatures = () => {
  return (
    <div className="w-full bg-[#050B1A] text-white overflow-hidden">
      <section className="relative h-[1100vh] md:h-[100vh] flex items-center">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aiFeaturesBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <motion.div
          className="relative z-10 max-w-4xl px-8"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Cognitive AI Ecosystem
            </span>
            <br /> For Next-Generation Logistics Orchestration
          </h1>

          <p className="text-gray-300 text-lg mb-8 max-w-xl">
            A sophisticated cognitive AI ecosystem engineered to autonomously orchestrate yard management, gate operations, and vehicular traffic dynamics with unprecedented precision and efficiency.
          </p>
        </motion.div>

      </section>

      <section className="py-28 relative">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.15),transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-6 relative">

          <h2 className="text-4xl font-bold text-center mb-20">
            AI Processing Pipeline
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            {steps.map((item, i) => (
              <motion.div
                key={i}
                className={`relative bg-white/5 backdrop-blur-xl p-8 rounded-xl border border-white/10 ${glow}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 1 }}
              >

                <div className="text-5xl mb-6">{item.icon}</div>

                <h3 className="text-xl font-semibold mb-3">
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

      
      <section className="py-20 relative bg-gradient-to-b from-[#050B1A] to-[#0A122A]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">
            Powered by State-of-the-Art Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiModels.map((model, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-6 rounded-lg hover:bg-white/10 transition duration-300"
              >
                <div className="text-cyan-400 font-bold text-lg mb-2">{model.name}</div>
                <div className="text-xs text-purple-400 uppercase tracking-wider mb-2">{model.type}</div>
                <div className="text-gray-400 text-sm">{model.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#0A122A]">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-4xl font-bold mb-6">
              Cognitive Command & Control Interface
            </h2>

            <p className="text-gray-400 mb-8 leading-relaxed">
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
                  className="flex items-center gap-3 text-gray-200 cursor-pointer"
                  whileHover={{ scale: 1.05, color: "#67e8f9" }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="text-cyan-400">▸</span>
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
              className="w-full h-auto object-cover rounded-xl shadow-2xl shadow-cyan-500/20"
            />
          </motion.div>

        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="py-28 relative">

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-purple-900/20" />

        <div className="max-w-7xl mx-auto px-6 relative grid md:grid-cols-4 gap-10 text-center">
          {stats.map((item, i) => (
            <StatCard key={i} item={item} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AIFeatures;