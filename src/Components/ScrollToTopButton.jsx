import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function toggleVisibility() {
      setVisible(window.pageYOffset > 300);
    }

    function handleResize() {
      setIsMobile(window.innerWidth < 640); // example breakpoint for mobile (sm in Tailwind)
    }

    toggleVisibility();
    handleResize();

    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // Styles vary based on isMobile
  const buttonStyle = {
    position: "fixed",
    bottom: isMobile ? "20px" : "40px",
    right: isMobile ? "20px" : "40px",
    backgroundColor: "black",
    color: "rebeccapurple",
    border: "2px solid #FE0000",
    padding: isMobile ? "10px" : "12px",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: isMobile ? "20px" : "24px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          style={buttonStyle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
