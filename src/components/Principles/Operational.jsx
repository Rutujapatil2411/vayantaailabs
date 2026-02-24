import React from "react";
import { motion } from "framer-motion";
import opBg from "../../assets/bgImages/op.jpg";
import { useNavigate } from "react-router-dom";

const Operational = () => {
  const navigate = useNavigate();

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


  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.15,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="min-h-screen bg-slate-950 text-gray-200 overflow-hidden">
      {/* HERO */}
      <section
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${opBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-blue-950/90 to-black/95" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="relative z-10 text-center max-w-5xl px-6"
        >
          <motion.p
            variants={fadeUp}
            className="text-cyan-400 tracking-[4px] uppercase mb-5"
          >
            Performance & Delivery
          </motion.p>

          <motion.h1
            variants={fadeUp}
            custom={0.1}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Operational <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Excellence
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="text-gray-400 text-lg md:text-xl"
          >
            Intelligent systems. Scalable processes. Resilient performance.
          </motion.p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="max-w-5xl mx-auto py-28 px-6 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"

        >
          Excellence in Execution
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-400 text-lg leading-relaxed"
        >
          We ensure seamless delivery, optimized resources, and continuous
          improvement through AI-powered operational frameworks.
        </motion.p>
      </section>

      {/* OPERATIONS FLOW */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Operations Framework
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-14">
          {[
            "Planning & Allocation",
            "Process Automation",
            "Performance Analytics",
            "AI Optimization",
            "Quality Assurance",
            "Continuous Growth",
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative pl-8 border-l border-cyan-500/30 hover:border-cyan-400 transition"
            >
              <span className="absolute -left-[7px] top-1 w-3 h-3 bg-cyan-400 rounded-full" />

              <h4 className="text-xl font-semibold mb-3 text-cyan-400">
                {item}
              </h4>

              <p className="text-gray-400 text-sm leading-relaxed">
                Delivering enterprise-grade efficiency through intelligent
                workflow optimization and smart governance.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* METRICS */}
      {/* <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 py-28">

        <div className="max-w-6xl mx-auto px-6">

          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-20"
          >
            Performance Impact
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-12 text-center">

            {[
              ["30%", "Faster Turnaround"],
              ["25%", "Cost Reduction"],
              ["99.9%", "System Uptime"],
              ["20%", "Productivity Growth"],
              ["0%", "Downtime Deployments"],
              ["Live", "KPI Monitoring"],
            ].map(([num, text], i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-3">
                  {num}
                </h4>

                <p className="text-gray-400">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="relative py-28 text-center px-6 bg-white overflow-hidden">
         <AnimatedShapes />
        <motion.h2
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
>
  Elevate Your Operations
</motion.h2>


        <motion.p
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-10"
        >
          Unlock peak enterprise performance with AI-powered operational
          excellence.
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/contact")}
          className="group px-10 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:from-black hover:to-black hover:text-white"
        >
          <span className="flex items-center justify-center gap-2">
            Optimize Now
            <span className="opacity-0 group-hover:opacity-100 transform transition-all duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </motion.button>
      </section>
    </div>
  );
};

export default Operational;
