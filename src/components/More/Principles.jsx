import React from "react";
import { motion } from "framer-motion";
import keyClientBg from "../../assets/bgImages/p1.jpg";
import { Link } from "react-router-dom";


import {
  FaLightbulb,
  FaHandshake,
  FaAward,
  FaArrowRight,
  FaQuoteLeft,
} from "react-icons/fa";



const Principles = () => {
  const principlesData = [
    {
      id: 1,
      icon: <FaLightbulb className="text-4xl text-cyan-500" />,
      title: "Innovation & Strategic Agility",
      desc: "We continuously pioneer advancements in Artificial Intelligence, leveraging adaptive methodologies that enable us to respond swiftly to evolving market landscapes. Our innovation-driven culture ensures sustainable competitive advantage for our clients.",
      extra: "Future-Focused Innovation",
    },
    {
      id: 2,
      icon: <FaHandshake className="text-4xl text-purple-500" />,
      title: "Integrity & Ethical Leadership",
      desc: "Trust is the foundation of our organization. We uphold the highest standards of transparency, accountability, and ethical AI governance, fostering long-term partnerships built on credibility and mutual respect.",
      extra: "Ethical Governance",
    },
    {
      id: 3,
      icon: <FaAward className="text-4xl text-cyan-500" />,
      title: "Operational Excellence",
      desc: "Through disciplined processes, rigorous quality frameworks, and continuous optimization, we deliver scalable AI solutions that consistently exceed performance expectations and industry benchmarks.",
      extra: "Excellence Delivered",
    },
  ];

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

  const cardHover = {
    whileHover: { y: -10 },
    transition: { type: "spring", stiffness: 300 },
  };

  return (
    <>
      <div className="relative w-full h-[85vh] overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${keyClientBg})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-blue-900/60 to-purple-900/70" />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
        linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
      `,
            backgroundSize: "80px 80px",
          }}
        />

        <motion.div
          className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-8 md:px-20 max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="uppercase tracking-widest text-sm text-cyan-400 mb-4">
            OUR CORE FOUNDATION
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="text-white">Guided by Principles.</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Driven by Innovation.
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            At Vayanta AI Labs, our principles shape every decision we make —
            from responsible AI development to delivering transformative
            enterprise solutions built on trust, agility, and operational
            excellence.
          </p>
        </motion.div>
      </div>

      <section className="py-20 bg-white relative overflow-hidden">
        <AnimatedShapes />
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-100 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50 -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800">Our Guiding</span>{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Principles
            </span>
          </motion.h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            The values that define our culture, strengthen our partnerships, and
            shape the intelligent systems we build.
          </p>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mt-6 mb-12 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.2 }}
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center justify-items-center">
            {principlesData.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative w-[380px] h-[520px] mx-auto group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div
                  className="absolute top-6 left-6 w-full h-full 
  bg-[#050B1A] 
  shadow-2xl opacity-95 transition-all duration-500 group-hover:rotate-1"
                />

                <motion.div
                  className="relative w-full h-full bg-gradient-to-b from-cyan-50 to-white shadow-lg
                   border border-gray-100 overflow-hidden flex flex-col items-center justify-between p-8"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full text-center">
                    <motion.div
                      className="w-20 h-20 mx-auto bg-white rounded-full shadow-md flex items-center justify-center mb-6 border border-cyan-100"
                      whileHover={{
                        scale: 1.1,
                        rotate: 360,
                        transition: { duration: 0.8 },
                      }}
                    >
                      {item.icon}
                    </motion.div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors">
                      {item.title}
                    </h3>

                    <div className="text-xs font-semibold tracking-widest text-purple-500 uppercase mb-4">
                      {item.extra}
                    </div>

                    <FaQuoteLeft className="text-gray-200 text-2xl mb-4" />
                  </div>

                  <motion.p
                    className="text-gray-600 text-center leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                  >
                    {item.desc}
                  </motion.p>

                  <Link to={`/more/principles/${item.id}`}>
  <motion.button
    className="flex items-center gap-2 text-cyan-600 font-semibold text-sm group/btn"
    whileHover={{ x: 5 }}
  >
    Learn More
    <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
  </motion.button>
</Link>

                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Principles;
