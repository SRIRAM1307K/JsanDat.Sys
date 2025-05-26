import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full bg-white py-6 px-8 flex justify-center items-center text-xl lg:text-2xl font-bold"
      // style={{
      //   boxShadow: "0 10px 30px rgba(102, 51, 153, 0.7),",
      //   animation: "pulseShadow 3s ease-in-out infinite",
      // }}
    >
      <div className="mt-5">
        &copy; Copyright JsanDat.Sys{" "}
        <span
          id="footerSpan"
          className="text-sm text-purple-700 font-semibold ml-1"
          style={{ fontStyle: "italic", transition: "color 0.3s ease" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#9933cc")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#6b21a8")}
        >
          Solutions
        </span>
      </div>

      <style>{`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow:
              0 10px 30px rgba(102, 51, 153, 0.7),
              inset 0 -5px 15px rgba(102, 51, 153, 0.4);
          }
          50% {
            box-shadow:
              0 15px 40px rgba(102, 51, 153, 0.9),
              inset 0 -5px 25px rgba(102, 51, 153, 0.6);
          }
        }
      `}</style>
    </motion.footer>
  );
};

export default Footer;
