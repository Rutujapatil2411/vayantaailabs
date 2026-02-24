import { motion } from "framer-motion";
import techBg from "../../assets/Technology/techbg.png";

import t1 from "../../assets/Technology/t1.png";
import t2 from "../../assets/Technology/t2.png";
import t3 from "../../assets/Technology/t3.png";
import t4 from "../../assets/Technology/t4.png";
import t5 from "../../assets/Technology/t5.png";
import t6 from "../../assets/Technology/t6.png";
import t7 from "../../assets/Technology/t7.png";
import t8 from "../../assets/Technology/t8.png";
import t9 from "../../assets/Technology/t9.png";
import t10 from "../../assets/Technology/t10.png";
import t11 from "../../assets/Technology/t11.png";
import t12 from "../../assets/Technology/t12.png";
import t13 from "../../assets/Technology/t13.png";
import t14 from "../../assets/Technology/t14.png";
import t15 from "../../assets/Technology/t15.png";
import t16 from "../../assets/Technology/t16.png";
import t17 from "../../assets/Technology/t17.png";
import t18 from "../../assets/Technology/t18.png";
import ai1 from "../../assets/Technology/ai1.jpg";
import ml1 from "../../assets/Technology/ml1.jpg";
import ai2 from "../../assets/Technology/ai2.jpg";
import ml2 from "../../assets/Technology/ml2.jpg";

import patternBg from "../../assets/Technology/techbg.png";

const icons = [
  t16,
  t17,
  t18,
  t1,
  t2,
  t3,
  t4,
  t5,
  t6,
  t7,
  t8,
  t9,
  t10,
  t11,
  t12,
  t13,
  t14,
  t15,
];

const aiMlIcons = [ai1, ml1, ai2, ml2];

const Technology = () => {
  const iconRows = [
    icons.slice(0, 4),
    icons.slice(4, 9),
    icons.slice(9, 14),
    icons.slice(14, 18),
  ];

  return (
    <div className="w-full">
      <div className="relative w-full h-[80vh] overflow-hidden  shadow-2xl mb-16">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${techBg})`,
              filter: "brightness(0.5) saturate(1.2)",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-purple-900/50 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Driving Innovation Through</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                Advanced Technology & AI
              </span>
            </h2>

            <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              We leverage cutting-edge Artificial Intelligence, Machine
              Learning, and modern digital frameworks to build scalable, secure,
              and high-performance solutions. Our technology ecosystem is
              designed to accelerate transformation, enhance operational
              efficiency, and unlock sustainable growth.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold text-3xl md:text-4xl tracking-wide">
            Technological Expertise & Integrations
          </h3>
        </motion.div>

        <motion.div
          className="w-full bg-white shadow-2xl rounded-sm overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full p-8 md:p-14 min-h-[400px] flex flex-col items-center justify-center">
            <div
              className="absolute inset-0 opacity-10 bg-center bg-cover pointer-events-none"
              style={{
                backgroundImage: `url(${patternBg})`,
                backgroundSize: "contain",
              }}
            />

            <div className="relative z-10 flex flex-col items-center gap-y-10 md:gap-y-14 w-full">
              {iconRows.map((rowGroup, rowIndex) => (
                <motion.div
                  key={rowIndex}
                  className="flex justify-center gap-x-12 md:gap-x-16 w-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: rowIndex * 0.1, duration: 0.4 }}
                >
                  {rowGroup.map((icon, i) => {
                    const isZigZagOffset = i % 2 !== 0;

                    const isLargerIcon = rowIndex === 2 && (i === 0 || i === 1);

                    return (
                      <div
                        key={`${rowIndex}-${i}`}
                        className={`
                            flex items-center justify-center transition-transform duration-300
                            ${isZigZagOffset ? "translate-y-8" : ""}
                            ${
                              isLargerIcon
                                ? "w-[150px] h-[100px] md:w-[180px] md:h-[120px]"
                                : "w-[110px] h-[70px] md:w-[130px] md:h-[80px]"
                            }
                        `}
                      >
                        {/* <motion.img
  src={icon}
  alt={`tech-${rowIndex}-${i}`}
  className="max-w-full max-h-full object-contain"
  whileHover={{ 
    scale: 1.15,
    rotate: 360
  }}
  transition={{
    rotate: { duration: 0.6, ease: "easeInOut" },
    scale: { duration: 0.3 }
  }}
/> */}
                        <img
                          src={icon}
                          alt={`tech-${rowIndex}-${i}`}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    );
                  })}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full bg-white shadow-2xl rounded-sm overflow-hidden mt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full p-8 md:p-12 flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-10 bg-center bg-cover pointer-events-none"
              style={{
                backgroundImage: `url(${patternBg})`,
                backgroundSize: "contain",
              }}
            />

            <div className="relative z-10 grid grid-cols-2 gap-12 w-full max-w-5xl">
              {aiMlIcons.map((icon, i) => (
                <motion.div
                  key={`aiml-${i}`}
                  className="flex justify-center items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={icon}
                    alt={`aiml-${i}`}
                    className="w-full h-32 md:h-48 object-cover rounded-none shadow-md"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Technology;
