/* eslint-disable no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    name: "Women",
    submenu: [
      { name: "Accessories", href: "/women/accessories" },
      { name: "Fashions", href: "/women/fashions" },
    ],
  },
  {
    name: "Men",
    submenu: [
      { name: "Accessories", href: "/men/accessories" },
      { name: "Fashions", href: "/men/fashions" },
    ],
  },
  {
    name: "Kids",
    submenu: [
      { name: "Fashions", href: "/kids/fashions" },
      { name: "Toys", href: "/kids/toys" },
    ],
  },
  {
    name: "Contact",
    href: "/contact-us", // Changed to direct link without submenu
  },
];

const dropdownVariants = {
  // hidden: { opacity: 0, y: 10 },
  // visible: { opacity: 1, y: 0 },
  // exit: { opacity: 0, y: 10 },
  hidden: {
    opacity: 0,
    y: -20, // Start 20px above (change this value to adjust starting position)
    scaleY: 0.8, // Slightly compressed at start
  },
  visible: {
    opacity: 1,
    y: 0, // End at normal position
    scaleY: 1, // Full scale
  },
  exit: {
    opacity: 0,
    y: -10, // Exit slightly above
    scaleY: 0.9, // Slightly compressed when exiting
  },
};
const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50); // Change threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`sticky top-0 z-50 transition-all duration-100 ${
        isScrolled
          ? "bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50"
          : "bg-gray-950"
      }`}
      animate={{
        height: isScrolled ? 56 : 64, // Reduced height when scrolled
      }}
      transition={{ duration: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-center">
        <div
          className={`flex items-center transition-all duration-300 ${
            isScrolled ? "h-14" : "h-16"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span
                className={`font-semibold text-gray-300 transition-all duration-300 ${
                  isScrolled ? "text-base md:text-lg" : "text-lg md:text-2xl"
                }`}
              >
                liyano
              </span>
              <span
                className={`text-gray-500 font-bold transition-all duration-300 ${
                  isScrolled ? "text-2xl md:text-3xl" : "text-3xl md:text-5xl"
                }`}
              >
                X
              </span>
              <span
                className={`font-semibold text-gray-300 transition-all duration-300 ${
                  isScrolled ? "text-sm md:text-lg" : "text-lg md:text-2xl"
                }`}
              >
                press
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 ml-24">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() =>
                  link.submenu && setActiveDropdown(link.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.href ? (
                  // Regular link for Contact
                  <a
                    href={link.href}
                    className="px-3 py-1 rounded-md text-md font-medium text-white hover:text-gray-300 transition-colors duration-200 items-center "
                  >
                    {link.name}
                  </a>
                ) : (
                  // Button with dropdown for other items
                  <>
                    <button
                      className={`flex items-center px-3 py-1 text-md font-medium ${
                        activeDropdown === link.name
                          ? "text-white hover:text-gray-300"
                          : "text-white hover:text-gray-900"
                      } transition-colors duration-200`}
                    >
                      {link.name}
                      <svg
                        className={`w-4 h-4 ml-1 transition-transform ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {link.submenu && (
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={dropdownVariants}
                            transition={{ duration: 0.3 }}
                            className="absolute left-0 mt-2 w-56 bg-gray-950 rounded-md shadow-lg z-10 border border-gray-300"
                          >
                            <div className="py-1">
                              {link.submenu.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                                >
                                  {subItem.name}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-300 hover:bg-gray-800 focus:outline-none transition-colors duration-200"
            >
              <span className="sr-only">
                {mobileMenuOpen ? "Close main menu" : "Open main menu"}
              </span>

              {/* Animated icon transition */}
              <div className="relative w-6 h-6">
                {/* Hamburger Menu Icon */}
                <svg
                  className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                    mobileMenuOpen
                      ? "opacity-0 rotate-180 scale-75"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                {/* Close/X Icon */}
                <svg
                  className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                    mobileMenuOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 rotate-180 scale-75"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-gray-950 border-t border-gray-200 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.href ? (
                    // Regular link for Contact in mobile
                    <a
                      href={link.href}
                      className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:bg-gray-800 hover:text-gray-300 block"
                    >
                      {link.name}
                    </a>
                  ) : (
                    // Button with dropdown for other items in mobile
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === link.name ? null : link.name
                          )
                        }
                        className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-300 hover:bg-gray-800 flex justify-between items-center"
                      >
                        {link.name}
                        <svg
                          className={`w-5 h-5 transition-transform duration-200 ${
                            activeDropdown === link.name ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Mobile Dropdown */}
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={{
                              hidden: { opacity: 0, height: 0 },
                              visible: { opacity: 1, height: "auto" },
                              exit: { opacity: 0, height: 0 },
                            }}
                            transition={{ duration: 0.15 }}
                            className="pl-4"
                          >
                            {link.submenu.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-800 hover:text-gray-300"
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
