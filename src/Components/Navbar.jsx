import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Images/CompanyLogo/company logo black.png";

export default function Navbar() {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (sideNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sideNavOpen]);

  // Animation variants for side nav and overlay
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
      {/* Fixed Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white flex justify-between items-center px-4 py-2 shadow-md"
        style={{
          boxShadow:
            "0 4px 6px -1px rgba(102, 51, 153, 0.6), 0 2px 4px -1px rgba(102, 51, 153, 0.4)",
        }}
      >
        {/* Logo */}
        <img
          id="cLogo"
          className="w-40 sm:w-48 md:w-52"
          src={logo}
          alt="Company Logo"
          draggable={false}
        />

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-10 font-semibold text-xl md:text-2xl">
          <li>
            <a href="#" className="hover:text-purple-700 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-purple-700 transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="hover:text-purple-700 transition-colors"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="contact.html"
              className="hover:text-purple-700 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop Book a Demo Button */}
        <div className="hidden lg:flex">
          <a href="contact.html" aria-label="Book a Demo">
            <button
              id="btn"
              className="cursor-pointer px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800 transition"
            >
              Book a Demo
            </button>
          </a>
        </div>

        {/* Hamburger Menu Icon - Small Devices */}
        <div
          className="lg:hidden flex text-purple-700 text-4xl cursor-pointer z-50"
          onClick={() => setSideNavOpen(true)}
          aria-label="Open menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setSideNavOpen(true);
          }}
        >
          <FaBars />
        </div>
      </nav>

      {/* Spacer to avoid content hidden behind fixed navbar */}
      <div className="h-16"></div>

      {/* Animate Presence for Side Nav and Overlay */}
      <AnimatePresence>
        {sideNavOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black z-40"
              onClick={() => setSideNavOpen(false)}
              aria-hidden="true"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              transition={{ duration: 0.3 }}
            />

            {/* Side Navigation */}
            <motion.aside
              className="fixed top-0 left-0 w-[80%] max-w-xs h-full bg-white z-50 shadow-lg p-6"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sideNavVariants}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Menu</h2>
                <button
                  id="closeBtn"
                  className="text-4xl font-bold"
                  onClick={() => setSideNavOpen(false)}
                  aria-label="Close menu"
                >
                  ×
                </button>
              </div>

              <ul className="space-y-6 text-2xl text-center">
                <li>
                  <a
                    href="#"
                    onClick={() => setSideNavOpen(false)}
                    className="block hover:text-purple-700 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={() => setSideNavOpen(false)}
                    className="block hover:text-purple-700 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    onClick={() => setSideNavOpen(false)}
                    className="block hover:text-purple-700 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="contact.html"
                    onClick={() => setSideNavOpen(false)}
                    className="block hover:text-purple-700 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                {/* <li>
                  <a
                    href="pricing.html"
                    onClick={() => setSideNavOpen(false)}
                    className="block hover:text-purple-700 transition-colors"
                  >
                    Pricing
                  </a>
                </li> */}
                {/* <li>
                  <a
                    href="contact.html"
                    onClick={() => setSideNavOpen(false)}
                    className="inline-block px-6 py-3 bg-purple-700 text-white rounded hover:bg-purple-800 transition"
                  >
                    Book a Demo
                  </a>
                </li> */}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
