/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Copyright,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      url: "https://web.facebook.com/people/Liyano-Express/61578084998729/",
      label: "Follow Us",
    },
    {
      icon: <Instagram size={20} />,
      url: "https://www.instagram.com/dilankaliyanagama/",
      label: "Instagram",
    },
  ];

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/", internal: true },
        {
          name: "Women Accessories",
          href: "/women/accessories",
          internal: true,
        },
        { name: "Women Fashions", href: "/women/fashions", internal: true },
        { name: "Contact", href: "/contact-us", internal: true },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "FAQ", href: "#", internal: false },
        { name: "Privacy Policy", href: "#", internal: false },
        { name: "Terms of Service", href: "#", internal: false },
        { name: "Help Center", href: "#", internal: false },
      ],
    },
    {
      title: "Contact",
      links: [
        {
          name: "prasadliyanagamad@gmail.com",
          href: "mailto:prasadliyanagamad@gmail.com",
          icon: <Mail size={16} className="mr-2" />,
          internal: false,
        },
        {
          name: "+94 (71) 241-3634",
          href: "https://wa.me/+94712413634",
          icon: <Phone size={16} className="mr-2" />,
          internal: false,
        },
        {
          name: "Tangalle, Sri Lanka",
          href: "#",
          icon: <MapPin size={16} className="mr-2" />,
          internal: false,
        },
      ],
    },
  ];

  const hoverEffect = {
    scale: 1.05,
    transition: { duration: 0.2 },
  };

  const tapEffect = {
    scale: 0.95,
  };

  return (
    <footer className="bg-gray-950 text-gray-300 pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand/Logo Section */}
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-white"
            >
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <span className="text-xl md:text-xl font-semibold text-gray-300">
                    liyano
                  </span>
                  <span className=" text-gray-500 text-3xl md:text-3xl font-bold">
                    X
                  </span>
                  <span className=" text-lg md:text-xl font-semibold text-gray-300">
                    press
                  </span>
                </Link>
              </div>
            </motion.h2>
            <p className="text-sm">
              Building innovative digital experiences that connect brands with
              their audience.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  whileHover={hoverEffect}
                  whileTap={tapEffect}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-5">
              <h3 className="text-lg font-semibold text-white">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.internal ? (
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-fit"
                      >
                        <Link
                          to={link.href}
                          className="inline-flex items-center text-sm hover:text-blue-400 transition-colors"
                        >
                          {link.icon && link.icon}
                          {link.name}
                        </Link>
                      </motion.div>
                    ) : (
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-fit"
                      >
                        <a
                          href={link.href}
                          className="inline-flex items-center text-sm hover:text-blue-400 transition-colors"
                          target={
                            link.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            link.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {link.icon && link.icon}
                          {link.name}
                        </a>
                      </motion.div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-sm mb-4 md:mb-0">
            <Copyright size={16} className="mr-1" />
            <span>{currentYear} liyanoXpress. All rights reserved.</span>
          </div>
          <div className="flex space-x-6">
            <motion.a
              href="#"
              className="text-sm hover:text-blue-400 transition-colors"
              whileHover={hoverEffect}
              whileTap={tapEffect}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="text-sm hover:text-blue-400 transition-colors"
              whileHover={hoverEffect}
              whileTap={tapEffect}
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              className="text-sm hover:text-blue-400 transition-colors"
              whileHover={hoverEffect}
              whileTap={tapEffect}
            >
              Cookies
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
