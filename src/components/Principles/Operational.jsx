import React from "react";
import { motion } from "framer-motion";
import opBg from "../../assets/bgImages/op.jpg";
import { useNavigate } from "react-router-dom";

const Operational = () => {
  const navigate = useNavigate();

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
      <section className="py-28 text-center px-6 bg-white">
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
