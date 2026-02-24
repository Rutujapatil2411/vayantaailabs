import React from "react";
import { motion } from "framer-motion";
import heroBg from "../../assets/bgImages/int.jpg";
import { useNavigate } from "react-router-dom";

const TrustCard = ({ item, index }) => {
  return (
    <motion.div
      className="relative group"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, scale: 0.8, y: 50 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: index * 0.1,
            type: "spring",
          },
        },
      }}
      whileHover="hover"
    >
      <div
        className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500
        rounded-2xl blur opacity-20 group-hover:opacity-70 transition duration-500"
      />
      <motion.div
        className="relative bg-[#050B1A] border border-white/10
        rounded-2xl p-8 overflow-hidden
        transition-all duration-300
        group-hover:scale-105
        group-hover:border-cyan-400/40
        group-hover:shadow-2xl group-hover:shadow-cyan-900/30"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/10 blur-2xl rounded-full -mr-10 -mt-10" />
        <motion.p
          className="relative z-10 text-xl font-semibold text-center
          bg-gradient-to-r from-cyan-400 to-purple-400
          bg-clip-text text-transparent"
          variants={{
            hidden: {
              opacity: 0,
              y: 25,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
            hover: {
              y: -8,
              scale: 1.05,
              transition: { type: "spring", stiffness: 200 },
            },
          }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          {item}
        </motion.p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-600"
            initial={{ width: "0%" }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const Integrity = () => {
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

  const popupVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.2 },
    }),
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* HERO */}
      <section className="relative h-[70vh] text-white flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
            filter: "brightness(0.4) contrast(1.1) saturate(1.2)",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <motion.p
            className="uppercase tracking-widest text-cyan-400 mb-4"
            custom={0}
            initial="hidden"
            whileInView="visible"
            variants={popupVariant}
          >
            Trust & Governance
          </motion.p>

          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            variants={popupVariant}
          >
            <span className="text-white">Integrity &</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
              Ethical Leadership
            </span>
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg"
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            variants={popupVariant}
          >
            Building sustainable partnerships through transparency,
            accountability, and trust.
          </motion.p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="relative bg-white py-28 overflow-hidden">
        <AnimatedShapes />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={popupVariant}
            className="text-center mb-20"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-5
        bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500
        bg-clip-text text-transparent"
            >
              Our Commitment to Ethics
            </h2>

            <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
              We uphold global standards of transparency, security, and
              responsible governance to build lasting trust.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                {
                  title: "ISO Certified Processes",
                  desc: "Globally recognized standards ensuring quality and security.",
                },
                {
                  title: "Secure Infrastructure",
                  desc: "Highly resilient and scalable cloud environments.",
                },
                {
                  title: "Data Protection",
                  desc: "Advanced encryption safeguarding sensitive information.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex gap-5 cursor-pointer"
                >
                  <div
                    className="w-3 h-3 mt-2 rounded-full
    bg-gradient-to-r from-cyan-500 to-purple-500
    transition-all duration-300
    group-hover:scale-125"
                  />
                  <div>
                    <h4
                      className="text-xl font-semibold mb-2
  text-gray-800
  transition-all duration-300
  group-hover:text-cyan-500
  group-hover:scale-105"
                    >
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                {
                  title: "Audit & Compliance",
                  desc: "Continuous monitoring and regulatory alignment.",
                },
                {
                  title: "Transparent Reporting",
                  desc: "Clear insights for informed decision-making.",
                },
                {
                  title: "Long-Term Partnerships",
                  desc: "Relationships built on reliability and performance.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex gap-5 cursor-pointer"
                >
                  <div
                    className="w-3 h-3 mt-2 rounded-full
    bg-gradient-to-r from-cyan-500 to-purple-500
    transition-all duration-300
    group-hover:scale-125"
                  />
                  <div>
                    <h4
                      className="text-xl font-semibold mb-2
  text-gray-800
  transition-all duration-300
  group-hover:text-cyan-500
  group-hover:scale-105"
                    >
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="py-24 relative bg-[#020617] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.h2
              className="text-3xl md:text-4xl font-extrabold
                   bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500
                   bg-clip-text text-transparent tracking-wide"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Trust & Compliance
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "100% Compliance Rate",
              "Enterprise-Grade Security",
              "24/7 Risk Monitoring",
              "Global Governance Standards",
            ].map((item, i) => (
              <TrustCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="relative bg-white py-20 text-gray-900 text-center overflow-hidden">
        <AnimatedShapes />
        <motion.h2
          className="text-3xl font-bold mb-4"
          custom={0}
          initial="hidden"
          whileInView="visible"
          variants={popupVariant}
        >
          Partner with Confidence
        </motion.h2>

        <motion.p
          className="mb-8 text-lg text-gray-600"
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          variants={popupVariant}
        >
          Choose a technology partner built on ethics, reliability, and
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
            Start Partnership
            <span className="opacity-0 group-hover:opacity-100 transform transition-all duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </motion.button>
      </section>
    </div>
  );
};

export default Integrity;
