import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Images/CompanyLogo/company logo black.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = sideNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sideNavOpen]);

  const sideNavVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.3 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white flex justify-between items-center px-4 py-2 shadow-md"
        style={{
          boxShadow:
            "0 4px 6px -1px rgba(102, 51, 153, 0.6), 0 2px 4px -1px rgba(102, 51, 153, 0.4)",
        }}
      >
        <img
          id="cLogo"
          className="w-40 sm:w-50 md:w-52 lg:w-62"
          src={logo}
          alt="Company Logo"
          draggable={false}
        />

        <ul className="hidden lg:flex items-center gap-10 font-semibold text-xl md:text-2xl">
          <li>
            <Link to="/" className="hover:text-purple-700 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-purple-700 hover:underline"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="hover:text-purple-700 hover:underline"
            >
              Features
            </a>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-purple-700 hover:underline"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="hidden lg:flex">
          <Link to="/contact" aria-label="Book a Demo">
            <button className="cursor-pointer px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800 transition text-xl font-semibold">
              Book a Demo
            </button>
          </Link>
        </div>

        <div
          className="lg:hidden flex text-purple-700 text-4xl cursor-pointer z-50"
          onClick={() => setSideNavOpen(true)}
          aria-label="Open menu"
        >
          <FaBars />
        </div>
      </nav>

      <div className="h-16"></div>

      <AnimatePresence>
        {sideNavOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black z-40"
              onClick={() => setSideNavOpen(false)}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              transition={{ duration: 0.3 }}
            />

            <motion.aside
              className="fixed top-0 left-0 w-[80%] max-w-xs h-full bg-white z-50 shadow-lg p-6"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sideNavVariants}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Menu</h2>
                <button
                  className="text-4xl font-bold"
                  onClick={() => setSideNavOpen(false)}
                >
                  ×
                </button>
              </div>

              <ul className="space-y-6 text-2xl text-center">
                <li>
                  <Link
                    to="/"
                    onClick={() => setSideNavOpen(false)}
                    className="block hover:text-purple-700"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={() => setSideNavOpen(false)}
                    className="block hover:text-purple-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    onClick={() => setSideNavOpen(false)}
                    className="block hover:text-purple-700"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={() => setSideNavOpen(false)}
                    className="block hover:text-purple-700"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
