/* eslint-disable no-unused-vars */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

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
      { name: "Accessories", href: "/women/accessories" },
      { name: "Fashions", href: "/women/fashions" },
    ],
  },
  {
    name: "Unisex",
    submenu: [
      { name: "Accessories", href: "/women/accessories" },
      { name: "Fashions", href: "/women/fashions" },
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

  return (
    <nav className="bg-gray-950 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-center">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-semibold text-gray-300">
                Liyano
              </span>
              <span className=" text-gray-500 text-5xl font-bold">X</span>
              <span className=" text-2xl font-semibold text-gray-300">
                press
              </span>
            </Link>
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
                  <Link
                    to={link.href}
                    className="px-3 py-1 rounded-md text-md font-medium text-white hover:text-gray-300 transition-colors duration-200 items-center "
                  >
                    {link.name}
                  </Link>
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
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                                >
                                  {subItem.name}
                                </Link>
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
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-300 hover:bg-gray-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
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
                    <Link
                      to={link.href}
                      className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:bg-gray-800 hover:text-gray-300 block"
                    >
                      {link.name}
                    </Link>
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
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-800 hover:text-gray-300"
                              >
                                {subItem.name}
                              </Link>
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
    </nav>
  );
};

export default Navbar;
