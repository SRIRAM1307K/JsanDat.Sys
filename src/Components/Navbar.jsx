import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Images/CompanyLogo/company logo black.png";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = sideNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sideNavOpen]);

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    function onScroll() {
      const servicesSection = document.getElementById("services");
      const featuresSection = document.getElementById("features");
      const scrollPos = window.scrollY + window.innerHeight / 2;

      if (featuresSection && scrollPos >= featuresSection.offsetTop) {
        setActiveSection("features");
      } else if (servicesSection && scrollPos >= servicesSection.offsetTop) {
        setActiveSection("services");
      } else {
        setActiveSection("");
      }
    }

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [location.pathname]);

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

  const activeClass = "text-[rebeccapurple]  font-semibold";
  const inactiveClass = "hover:text-[rebeccapurple] ";

  const sectionLinkClass = (sectionId) =>
    activeSection === sectionId ? activeClass : inactiveClass;

  const isHomePage = location.pathname === "/";
  const hideDemoButtonPages = ["/pricing", "/about", "/contact"];
  const showBookDemo = !hideDemoButtonPages.includes(location.pathname);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white flex justify-between items-center px-4 py-2 shadow-md"
        style={{
          boxShadow: "0 4px 6px -1px rebeccapurple",
        }}
      >
        <a href="/">
          <img
            id="cLogo"
            className="w-40 sm:w-50 md:w-52 lg:w-62"
            src={logo}
            alt="Company Logo"
            draggable={false}
          />
        </a>

        <ul
          className={`hidden lg:flex items-center font-semibold text-xl md:text-2xl ${
            isHomePage ? "gap-10" : "w-full justify-evenly"
          }`}
        >
          <li>
            <NavLink
              to="/"
              end
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              Pricing
            </NavLink>
          </li>

          {isHomePage && (
            <>
              <li>
                <a
                  href="#services"
                  className={sectionLinkClass("services")}
                  onClick={() => setSideNavOpen(false)}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className={sectionLinkClass("features")}
                  onClick={() => setSideNavOpen(false)}
                >
                  Features
                </a>
              </li>
            </>
          )}

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Book a Demo - Only show on selected pages */}
        {showBookDemo && (
          <div className="hidden lg:flex">
            <NavLink to="/contact" aria-label="Book a Demo">
              <motion.button
                whileTap={{ scale: 0.95 }}
                id="btn"
                className="text-lg lg:text-2xl font-bold"
              >
                Book a Demo
              </motion.button>
            </NavLink>
          </div>
        )}

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
                  <NavLink
                    to="/"
                    end
                    onClick={() => {
                      setSideNavOpen(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={({ isActive }) =>
                      isActive ? activeClass : inactiveClass
                    }
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/pricing"
                    onClick={() => setSideNavOpen(false)}
                    className={({ isActive }) =>
                      isActive ? activeClass : inactiveClass
                    }
                  >
                    Pricing
                  </NavLink>
                </li>

                {isHomePage && (
                  <>
                    <li>
                      <a
                        href="#services"
                        onClick={() => setSideNavOpen(false)}
                        className={sectionLinkClass("services")}
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="#features"
                        onClick={() => setSideNavOpen(false)}
                        className={sectionLinkClass("features")}
                      >
                        Features
                      </a>
                    </li>
                  </>
                )}

                <li>
                  <NavLink
                    to="/about"
                    onClick={() => setSideNavOpen(false)}
                    className={({ isActive }) =>
                      isActive ? activeClass : inactiveClass
                    }
                  >
                    About
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/contact"
                    onClick={() => setSideNavOpen(false)}
                    className={({ isActive }) =>
                      isActive ? activeClass : inactiveClass
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>

              {/* Optional: Add mobile demo button if needed on other pages */}
              {/* {showBookDemo && (
                <div className="mt-8 flex justify-center">
                  <NavLink to="/contact" onClick={() => setSideNavOpen(false)}>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="text-xl font-bold px-4 py-2 border border-purple-700 text-purple-700 rounded-md"
                    >
                      Book a Demo
                    </motion.button>
                  </NavLink>
                </div>
              )} */}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
