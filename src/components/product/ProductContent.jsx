// ProductContent.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "react-icons/fa";
import k2 from "../../assets/product/k2.jpg";
import k1 from "../../assets/product/k1.jpg";
import k4 from "../../assets/product/k4.jpg";
import k5 from "../../assets/product/k5.jpg";

import {
  FaBrain,
  FaRobot,
  FaNetworkWired,
  FaChartLine,
  FaShieldAlt,
  FaEye,
  FaMicrochip,
  FaCloud,
  FaRocket,
  FaCogs,
  FaDatabase,
  FaArrowRight,
  FaDownload,
  FaCheckCircle,
  FaCircle,
} from "react-icons/fa";

// Helper to get icon component
const getIcon = (iconName) => {
  const IconComponent = Icons[iconName] || Icons.FaCube;
  return <IconComponent />;
};

function ProductContent({ product, activeCategory }) {
  const [activeTab, setActiveTab] = useState("overview");

  if (!product) {
    return (
      <div className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-950 to-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
              <span className="text-blue-300 font-medium">
                AI-Powered Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">What our </span>
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                Product Does
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our AI-powered platform automates container verification, analyzes
              EIR documents, and optimizes yard operations to improve
              efficiency, reduce manual work, and ensure faster container
              processing.
            </p>
          </motion.div>

          {/* Core Capabilities Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {[
              {
                title: "Smart Gate Verification",
                description:
                  "Automatically verifies container entry using AI-powered image recognition and OCR, reducing manual checks and improving gate efficiency.",
                icon: <FaEye className="text-3xl" />,
                color: "from-blue-500/20 to-cyan-500/20",
                iconColor: "text-cyan-400",
              },
              {
                title: "EIR Document Analysis",
                description:
                  "Extracts and analyzes data from EIR receipts to validate container details and identify suspicious or non-suspicious container entries.",
                icon: <FaDatabase className="text-3xl" />,
                color: "from-purple-500/20 to-pink-500/20",
                iconColor: "text-purple-400",
              },
              {
                title: "Automated Yard Operations",
                description:
                  "Optimizes yard slot allocation and container movement using intelligent automation to reduce congestion and improve throughput.",
                icon: <FaCogs className="text-3xl" />,
                color: "from-green-500/20 to-emerald-500/20",
                iconColor: "text-green-400",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div
                  className={`h-full p-8 rounded-2xl bg-gradient-to-br ${item.color} backdrop-blur-lg border border-gray-700/30 hover:border-blue-500/40 transition-all duration-300`}
                >
                  <div className="relative mb-6">
                    <div
                      className={`${item.iconColor} transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      {item.icon}
                    </div>
                    <div
                      className={`absolute -inset-4 ${item.iconColor.replace("text-", "bg-")}/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Key Product Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "Reduced Manual Work",
                description:
                  "Automates container verification and documentation to minimize human intervention.",
                icon: <FaRobot className="text-3xl text-blue-400" />,
              },
              {
                title: "Faster Gate Processing",
                description:
                  "Speeds up container entry and exit operations with AI-powered validation.",
                icon: <FaRocket className="text-3xl text-purple-400" />,
              },
              {
                title: "Higher Operational Accuracy",
                description:
                  "Detects inconsistencies in EIR and container data with advanced AI models.",
                icon: <FaShieldAlt className="text-3xl text-green-400" />,
              },
              {
                title: "Scalable Architecture",
                description:
                  "Designed to handle large-scale yard operations and growing container traffic.",
                icon: <FaCloud className="text-3xl text-cyan-400" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-300 text-lg mb-4">
              Select a product from the sidebar to explore detailed solutions
            </p>
            <div className="inline-flex items-center space-x-2 text-blue-300">
              <span>←</span>
              <span>Choose a category to get started</span>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-950 to-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2 text-sm text-gray-400 mb-6"
        >
          <span>Products</span>
          <span>/</span>
          <span className="text-blue-300">
            {activeCategory?.replace("-", " ")}
          </span>
          <span>/</span>
          <span className="text-white">
            {product.shortName || product.name}
          </span>
        </motion.div>

        {/* Product Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-gray-900 border border-gray-800"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent" />
          <div className="relative p-8 md:p-12">
            <div
              className={`grid gap-8 items-center ${
                product.id === "ai-kalmar-yard-operations"
                  ? "md:grid-cols-2"
                  : "grid-cols-1"
              }`}
            >
              {/* LEFT CONTENT */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  {product.hero.title}
                  <span className="block text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text mt-2">
                    {product.hero.subtitle}
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 mb-8">
                  {product.hero.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center space-x-3 group">
                    <span>Request Demo</span>
                    <Icons.FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </button>

                  <button className="px-8 py-4 bg-gray-900/60 backdrop-blur-lg border border-gray-700 text-white font-bold rounded-xl hover:border-blue-500 transition-all duration-300">
                    Watch Video
                  </button>
                </div>
              </div>

              {/* RIGHT IMAGE (only kalmar) */}
              {product.id === "ai-kalmar-yard-operations" && (
                <div className="hidden md:block">
                  <img
                    src={k2}
                    alt="Kalmar Operations"
                    className="w-full h-auto rounded-2xl shadow-2xl border border-gray-700"
                  />
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8 border-b border-gray-800 pb-2"
        >
          {["overview", "roadmap", "capabilities", "specs", "use-cases"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium capitalize transition-all duration-300 relative ${
                  activeTab === tab
                    ? "text-blue-300"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {tab.replace("-", " ")}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                  />
                )}
              </button>
            ),
          )}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Value Proposition Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {product.expectedGains.map((gain, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
                  >
                    <div className="text-blue-300 text-2xl mb-3">
                      {getIcon(gain.icon)}
                    </div>
                    <div className="text-2xl font-bold text-cyan-300 mb-1">
                      {gain.value}
                    </div>
                    <div className="text-gray-300 text-sm">{gain.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Problem & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-red-900/20 to-red-900/5 border border-red-500/20">
                  <h3 className="text-xl font-bold text-white mb-3">
                    The Challenge
                  </h3>
                  <p className="text-gray-300">{product.overview.problem}</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-green-900/20 to-green-900/5 border border-green-500/20">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Our Solution
                  </h3>
                  <p className="text-gray-300">{product.overview.solution}</p>
                </div>
              </div>

              {/* Value Proposition List */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20">
                <h3 className="text-xl font-bold text-white mb-4">
                  Value Proposition
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.overview.valueProposition.map((item, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Icons.FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "roadmap" && (
            <motion.div
              key="roadmap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white mb-8">
                6-Step AI Implementation Roadmap
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {product.roadmap.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="relative"
                  >
                    <div className="flex items-start space-x-6">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}
                      >
                        <span className="text-white font-bold text-2xl">
                          {step.step}
                        </span>
                      </div>
                      <div className="flex-1 p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700">
                        <div className="flex items-center mb-3">
                          <div className="text-blue-300 text-xl mr-3">
                            {getIcon(step.icon)}
                          </div>
                          <h3 className="text-xl font-bold text-white">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    {index < product.roadmap.length - 1 && (
                      <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30" />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "capabilities" && (
            <motion.div
              key="capabilities"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-bold text-white mb-8">
                AI/ML/DL Capabilities
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {product.aiCapabilities.map((capability, index) => {
                  
                  const images = [k5, k4, k1];
                  const imgSrc = images[index % images.length];

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 flex flex-col md:flex-row md:justify-between"
                    >
                      <div className="flex-1">
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="text-2xl text-blue-300">
                            {getIcon(capability.icon)}
                          </div>
                          <h3 className="text-xl font-bold text-white">
                            {capability.title}
                          </h3>
                        </div>

                        <ul className="space-y-3">
                          {capability.items.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start space-x-2 text-gray-300"
                            >
                              <Icons.FaCircle className="text-xs text-blue-400 mt-1.5 flex-shrink-0" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Single image per card for Kalmar product */}
                      {product.id === "ai-kalmar-yard-operations" && (
                        <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                          <img
                            src={imgSrc}
                            alt={capability.title}
                            className="w-94 h-54 object-cover rounded-xl border border-gray-700 shadow-lg"
                          />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {activeTab === "specs" && (
            <motion.div
              key="specs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* AI Models */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Icons.FaBrain className="mr-2 text-blue-300" />
                    AI Models & Algorithms
                  </h3>
                  <div className="space-y-3">
                    {product.technicalSpecs.aiModels.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-700 last:border-0"
                      >
                        <span className="text-gray-300 text-sm">
                          {item.name}
                        </span>
                        <span className="text-blue-300 text-sm font-medium">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Integration */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Icons.FaNetworkWired className="mr-2 text-purple-300" />
                    Integration
                  </h3>
                  <div className="space-y-3">
                    {product.technicalSpecs.integration.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-700 last:border-0"
                      >
                        <span className="text-gray-300 text-sm">
                          {item.name}
                        </span>
                        <span className="text-purple-300 text-sm font-medium">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 md:col-span-2">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Icons.FaChartLine className="mr-2 text-green-300" />
                    Performance Metrics
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {product.technicalSpecs.performance.map((item, index) => (
                      <div
                        key={index}
                        className="text-center p-4 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900"
                      >
                        <div className="text-2xl font-bold text-cyan-300 mb-2">
                          {item.value}
                        </div>
                        <div className="text-gray-300 text-sm">
                          {item.metric}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "use-cases" && (
            <motion.div
              key="use-cases"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-bold text-white mb-8">
                Industry Use Cases
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white">
                        {useCase.title}
                      </h3>
                      <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                        {useCase.industry}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      {useCase.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-cyan-900/40 border border-blue-500/30"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Ready to transform your yard operations?
              </h3>
              <p className="text-gray-300">
                Get a personalized demo and see how our AI-powered system can
                save you 30-40% in turnaround time.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg flex items-center space-x-2 group">
                <Icons.FaDownload className="group-hover:-translate-y-1 transition-transform" />
                <span>Datasheet</span>
              </button>
              <button className="px-6 py-3 bg-gray-900 text-white font-bold rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProductContent;
