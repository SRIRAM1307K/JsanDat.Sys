import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Cover from "../assets/Images/CoverImage/cover.svg";

const Content = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div ref={ref} className="py-16 px-6 lg:px-20 max-w-7xl mx-auto">
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center gap-10"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Text Section */}
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-900">
            Next Gen Data Annotation Solutions
          </h1>
          <h3 className="text-gray-600 text-lg lg:text-2xl font-semibold mt-3">
            The future of data and web based solutions is here...
          </h3>
          {/* <a href="" className="inline-block mt-8  rounded-xl">
            <motion.button
              whileHover={{
                // scale: 1.05,
                boxShadow: "0 0 12px rgba(102, 51, 153, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              id="btn"
              className=" text-lg lg:text-2xl font-bold "
            >
              Contact Us
            </motion.button>
          </a> */}
        </div>

        {/* Cover Image */}
        <motion.div
          className="flex justify-center max-w-md w-full"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={imageVariants}
        >
          <img
            src={Cover}
            alt="Cover Image"
            className="w-full max-w-[500px] h-auto object-contain drop-shadow-lg rounded-2xl lg:m-10"
            style={{ filter: "drop-shadow(0 4px 8px rgba(102, 51, 153, 0.3))" }}
          />
        </motion.div>
      </motion.div>

      {/* Stylish rebeccapurple dividing shadow line */}
      <div
        className="mt-16 mx-auto"
        style={{
          width: "100%",
          height: "6px",
          borderRadius: "12px",
          boxShadow:
            "0 0 15px 3px rgba(102, 51, 153, 0.8), inset 0 0 10px 2px rgba(102, 51, 153, 0.6)",
          backgroundColor: "rebeccapurple",
          maxWidth: "500px",
        }}
      />
    </div>
  );
};

export default Content;
