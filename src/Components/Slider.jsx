import React from "react";
import { motion } from "framer-motion";

import facebook from "../assets/Images/SlidingLogos/Google/Facebook_Logo_(2019).png.webp";
import google from "../assets/Images/SlidingLogos/Google/google-logo.png";
import twitter from "../assets/Images/SlidingLogos/Google/twitter-icon-free-png.webp";

const logos = [google, twitter, facebook, google, twitter];

const LogoItem = ({ logo, index }) => {
  return (
    <div className="flex-shrink-0 px-3 sm:px-4 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-90">
      <motion.img
        src={logo}
        alt={`logo-${index}`}
        className="w-14 sm:w-20 md:w-24 lg:w-28 h-auto"
        style={{
          backgroundColor: "transparent",
          filter: "drop-shadow(0 0 6px rgba(102, 51, 153, 0.6))",
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          delay: index * 0.3,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

const Slider = () => {
  // Duplicate logos 3 times for smooth scrolling
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <div
      className="relative w-full max-w-5xl mx-auto py-8 flex flex-col items-center"
      style={{ minHeight: "150px" }}
    >
      {/* Overflow hidden wrapper */}
      <div className="w-full overflow-hidden">
        <div className="flex items-center whitespace-nowrap animate-scroll">
          {repeatedLogos.map((logo, index) => (
            <LogoItem logo={logo} key={index} index={index} />
          ))}
        </div>
      </div>

      {/* Stylish rebeccapurple dividing shadow */}
      <div
        className="mt-10 w-full max-w-xl rounded-xl"
        style={{
          height: "6px",
          background:
            "linear-gradient(90deg, rgba(102, 51, 153, 0.9), rgba(148, 0, 211, 0.9), rgba(102, 51, 153, 0.9))",
          boxShadow:
            "0 0 15px 4px rgba(102, 51, 153, 0.8), inset 0 0 10px 2px rgba(102, 51, 153, 0.6)",
        }}
      />

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default Slider;
