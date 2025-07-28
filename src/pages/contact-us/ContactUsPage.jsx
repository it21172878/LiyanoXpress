/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  ArrowRight,
  ChevronRight,
  Headset,
} from "lucide-react";

const ContactUsPage = () => {
  const contactMethods = [
    {
      icon: <Mail size={24} className="text-blue-500" />,
      title: "Email Us",
      description: "Drop us a line anytime",
      details: "prasadliyanagamad@gmail.com",
      action: {
        text: "Send Email",
        href: "mailto:prasadliyanagamad@gmail.com",
      },
      bgColor: "bg-blue-50",
    },
    {
      icon: <Headset size={24} className="text-green-500" />,
      title: "Whatsapp",
      description: "Mon-Fri from 9am to 5pm",
      details: "+94 (71) 241-3634",
      action: {
        text: "Call Now",
        href: "https://wa.me/+94712413634",
      },
      bgColor: "bg-green-50",
    },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      url: "https://web.facebook.com/people/Liyano-Express/61578084998729/",
      label: "Facebook",
      color: "bg-blue-600",
    },
    {
      icon: <Instagram size={20} />,
      url: "instagram.com/dilankaliyanagama/",
      label: "Instagram",
      color: "bg-pink-600",
    },
    {
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/dilanka-liyanagama-a24875200/",
      label: "LinkedIn",
      color: "bg-blue-700",
    },
    {
      icon: <Github size={20} />,
      url: "https://github.com/it21172878",
      label: "GitHub",
      color: "bg-gray-800",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cardHover = {
    y: -5,
    transition: { duration: 0.3 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-950 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Let's <span className="text-gray-700">Connect</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-500 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            We'd love to hear from you! Choose your preferred way to get in
            touch with our team.
          </motion.p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={cardHover}
              className={`${method.bgColor} text-center rounded-2xl p-6 shadow-md hover:shadow-lg transition-all`}
            >
              <div className="flex text-center justify-center items-center mb-4">
                <div className="p-3 flex rounded-lg bg-white shadow-sm mr-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {method.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-3">{method.description}</p>
              <p className="text-gray-800 font-medium mb-6">{method.details}</p>
              <motion.a
                href={method.action.href}
                className="inline-flex items-center text-blue-600 font-medium group"
                whileHover={{ x: 5 }}
              >
                {method.action.text}
                <ArrowRight
                  size={18}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Office Hours */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-lg p-8 mb-16 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="flex items-center mb-6 md:mb-0 md:mr-10">
              <div className="p-3 rounded-lg bg-blue-50 mr-4">
                <Clock size={24} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
            </div>
            <div className="grid grid-cols-2 gap-6 w-full">
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Weekdays
                </h4>
                <p className="text-lg font-medium text-gray-800">
                  9:00 AM - 6:00 PM
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Weekends
                </h4>
                <p className="text-lg font-medium text-gray-800">
                  10:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Media Section */}
        <motion.div variants={itemVariants} className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Follow Us
          </h3>
          <div className="flex justify-center space-x-4 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                aria-label={social.label}
                className={`${social.color} text-white p-3 rounded-full hover:shadow-lg transition-all`}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest news, projects, and announcements by
            following us on social media.
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Check out our FAQ or browse our documentation for more information.
          </p>
          <motion.a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-950 to-gray-700 text-gray-200 font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Visit Help Center
            <ChevronRight size={20} className="ml-2" />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUsPage;
