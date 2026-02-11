import React from "react";
import { motion } from "framer-motion";
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
    desc: "Leveraging state-of-the-art computer vision, the system performs meticulous, real-time diagnostics of vehicle integrity, container identification, and compliance verification at the gate.",
    icon: "👁️",
  },
  {
    title: "Intelligent Asset Orchestration",
    desc: "A proprietary machine learning engine dynamically calculates and assigns optimal yard positions (slots), maximizing spatial utilization and minimizing asset dwell times.",
    icon: "⚙️",
  },
  {
    title: "Dynamic Flow Optimization",
    desc: "The 'Traffic Brain' AI module continuously analyzes and optimizes vehicular flow dynamics, implementing predictive routing and real-time traffic decongestion protocols.",
    icon: "🧭",
  },
  {
    title: "Cognitive Command Nexus",
    desc: "A unified analytics and supervisory hub providing holistic, real-time visibility and predictive insights into all operational facets for strategic decision-making.",
    icon: "🖥️",
  },
  {
    title: "Autonomous Reinforcement Learning",
    desc: "The system is built on a self-improving neural architecture that continuously refines its predictive models and operational strategies through autonomous learning cycles.",
    icon: "♻️",
  },
];

const stats = [
  { value: "40%", label: "Operational Velocity Augmentation" },
  { value: "35%", label: "Capital Expenditure Reduction" },
  { value: "30%", label: "Asset Throughput Amplification" },
  { value: "99.9%", label: "Predictive Model Precision" },
];

const glow =
  "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-cyan-500 before:to-purple-600 before:blur-xl before:opacity-30 before:-z-10";

const AIFeatures = () => {
  return (
    <div className="w-full bg-[#050B1A] text-white overflow-hidden">

      {/* ================= HERO ================= */}
      {/* --- बदल: सेक्शनची उंची कमी केली (min-h-screen ऐवजी h-[90vh]) --- */}
      <section className="relative h-[90vh] md:h-[80vh] flex items-center">

        {/* --- बदल: इमेजवरून scale-110 हटवला --- */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aiFeaturesBg})` }}
        />

        {/* --- बदल: ग्रेडिएंट बदलला, आता फक्त खाली गडद --- */}
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

      {/* ================= TIMELINE ================= */}
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

      
      <section className="py-28 bg-gradient-to-b from-[#050B1A] to-[#0A122A]">

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
            <motion.div
              key={i}
              className="relative bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/10"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >

              <h3 className="text-4xl font-bold text-cyan-400 mb-2">
                {item.value}
              </h3>

              <p className="text-gray-300 tracking-wide">
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>
      </section>
    </div>
  );
};

export default AIFeatures;