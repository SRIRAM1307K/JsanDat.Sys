import React from "react";
import { motion } from "framer-motion";

const Boxsection = () => {
  const boxes = [
    { count: "40+", label: "Completed Projects" },
    { count: "1+", label: "Ongoing Projects" },
    { count: "2M+", label: "Annotations Count" },
    { count: "2+", label: "Clients" },
  ];

  // Function to render count with styled plus sign
  const renderCount = (count) => {
    if (count.endsWith("+")) {
      const numberPart = count.slice(0, -1);
      return (
        <>
          {numberPart}
          <span
            style={{
              color: "rebeccapurple", // rebeccapurple
              marginLeft: "0.1em",
              fontWeight: "bolder",
              background: "none",
              fontSize: "0.9em",
              verticalAlign: "super",
              userSelect: "none",
            }}
          >
            +
          </span>
        </>
      );
    }
    return count;
  };

  const boxVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div
      className="bg-gray-900 mt-20 mb-20 p-12 mx-auto"
      style={{
        boxShadow: "0 0 10px 4px rebeccapurple",
        borderRadius: "1rem",
        maxWidth: "1200px", // rebeccapurple glow
      }}
    >
      <section className="flex flex-wrap justify-center gap-8 py-12">
        {boxes.map((box, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={boxVariants}
            className="flex-grow flex-shrink basis-[250px] max-w-[280px] 
              border border-rebeccapurple rounded-2xl 
              p-8 text-center text-white cursor-pointer 
              shadow-lg hover:shadow-[0_0_10px_rebeccapurple]
              hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <h1 className="text-5xl font-extrabold mb-3 tracking-wide">
              {renderCount(box.count)}
            </h1>
            <h2 className="text-2xl font-semibold">{box.label}</h2>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Boxsection;
