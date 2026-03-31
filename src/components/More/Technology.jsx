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

const Technology = () => {
  const iconRows = [
    icons.slice(0, 4),
    icons.slice(4, 9),
    icons.slice(9, 14),
    icons.slice(14, 18),
  ];

  return (
    <div className="relative w-full pb-12">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${techBg})`,
            filter: "brightness(0.5) saturate(1.2)",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-purple-900/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      <div className="relative z-10 w-full flex flex-col">
        {/* TOP SECTION: Driving Innovation */}
        <div className="w-full h-[80vh] flex items-center justify-center px-6 mb-16">
          <motion.div
            className="max-w-4xl text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
          </motion.div>
        </div>

        {/* BOTTOM SECTION: Icons */}
        <div className="max-w-7xl mx-auto px-4">
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
                    className="flex flex-wrap md:flex-nowrap justify-center gap-y-10 gap-x-8 md:gap-x-16 w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: rowIndex * 0.1, duration: 0.4 }}
                  >
                    {rowGroup.map((icon, i) => {
                      const isZigZagOffset = i % 2 !== 0;
                      const isLargerIcon =
                        rowIndex === 2 && (i === 0 || i === 1);

                      return (
                        <div
                          key={`${rowIndex}-${i}`}
                          className={`
              flex items-center justify-center transition-transform duration-300
              ${isZigZagOffset ? "md:translate-y-8" : ""} 
              ${
                isLargerIcon
                  ? "w-[120px] h-[80px] md:w-[180px] md:h-[120px]"
                  : "w-[80px] h-[50px] md:w-[130px] md:h-[80px]"
              }
          `}
                        >
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
        </div>
      </div>
    </div>
  );
};

export default Technology;
