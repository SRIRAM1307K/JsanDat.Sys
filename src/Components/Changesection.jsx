import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import defaultImg from "../assets/Images/SecImages/Default/Blank 4 Grids Collage (1).png";
import img3d from "../assets/Images/SecImages/3D/lidar 3D 1.jpg";
import imgImage from "../assets/Images/SecImages/Image/image.png";
import imgMapping from "../assets/Images/SecImages/Mapping/road lane annotation.jpg";
import imgText from "../assets/Images/SecImages/Text/NER_images.png";
import imgAudio from "../assets/Images/SecImages/Audio/Example-of-High-Pitch-as-displayed-by-Praat_Q320.jpg";

const imageMap = {
  default: defaultImg,
  "3d": img3d,
  image: imgImage,
  mapping: imgMapping,
  text: imgText,
  audio: imgAudio,
};

const types = ["3D", "Image", "Mapping", "Text", "Audio"];

const Changesection = () => {
  const [activeType, setActiveType] = useState("default");

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
      <div id="features">
        <section>
          <div
            className="flex flex-col lg:flex-row items-center justify-center lg:gap-16 text-center bg-gray-900 rounded-xl max-w-7xl mx-auto shadow-xl"
            style={{
              boxShadow: "0 0 20px 8px rgba(102, 51, 153, 0.7)", // rebeccapurple glow
            }}
          >
            {/* Left Text + Buttons */}
            <motion.div
              className="max-w-xl text-white"
              key={activeType + "-text"}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ ease: "easeOut" }}
            >
              <h1 className="text-3xl lg:text-5xl font-bold mb-5 tracking-tight">
                Data Labelling
              </h1>
              <p className="text-md lg:text-2xl mb-8 text-gray-300 leading-relaxed">
                The best quality data to fuel the best performing models
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {types.map((type) => {
                  const typeKey = type.toLowerCase();
                  const isActive = activeType === typeKey;

                  return (
                    <motion.button
                      key={typeKey}
                      data-type={typeKey}
                      onClick={() => setActiveType(typeKey)}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 15px 4px rgba(128, 0, 255, 0.8)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative flex-grow basis-[100px] md:basis-[120px] lg:basis-[150px] 
                        text-sm md:text-base lg:text-lg font-bold tracking-wide cursor-pointer 
                        px-6 py-3 rounded-xl border border-transparent
                        transition-all duration-300
                        ${
                          isActive
                            ? "bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white shadow-lg shadow-purple-800/70"
                            : "bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-purple-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-700 hover:via-purple-600 hover:to-purple-700 hover:shadow-lg hover:shadow-purple-700/50"
                        }
                      `}
                      style={{
                        backdropFilter: "saturate(180%) blur(8px)",
                        WebkitBackdropFilter: "saturate(180%) blur(8px)",
                      }}
                    >
                      {type}
                    </motion.button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={activeType + "-desc"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-md lg:text-xl text-gray-400 leading-relaxed max-w-lg mx-auto"
                >
                  {
                    {
                      "3d": "Explore high-precision 3D data labelling for advanced modeling.",
                      image:
                        "Label images accurately to train top-tier computer vision models.",
                      mapping:
                        "Efficiently annotate mapping data for geospatial AI solutions.",
                      text: "Text labelling for NLP models, including named entity recognition and more.",
                      audio:
                        "Audio annotation services ensuring quality voice and sound analysis.",
                      default:
                        "Select a data type to see the related image and description here.",
                    }[activeType]
                  }
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Right Image */}
            <div className="mt-10 lg:mt-0 flex justify-center lg:justify-start px-4 sm:px-0 w-full max-w-lg">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeType}
                  src={imageMap[activeType]}
                  alt={activeType}
                  initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="rounded-xl w-full max-w-[600px] h-[220px] lg:h-[400px] object-cover shadow-2xl"
                  style={{ boxShadow: "0 0 20px rgba(102, 51, 153, 0.8)" }}
                  whileHover={{ scale: 1.04, rotate: 0 }}
                />
              </AnimatePresence>
            </div>
          </div>
        </section>
      </div>

      {/* Stylish Section Divider */}
      <div
        className="max-w-7xl mx-auto mt-12 mb-12"
        style={{
          height: "4px",
          borderRadius: "9999px",
          background:
            "linear-gradient(90deg, rgba(102,51,153,0.9), rgba(148,0,211,0.9), rgba(102,51,153,0.9))",
          boxShadow: "0 0 12px 3px rgba(148, 0, 211, 0.7)",
        }}
      />
    </div>
  );
};

export default Changesection;
