/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Products } from "../../utils/data";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const progressBarVariants = {
  initial: { width: 0 },
  animate: {
    width: "100%",
    transition: {
      duration: 10,
      ease: "linear",
    },
  },
};

const ProductPage = () => {
  const urls = [
    "https://www.profitableratecpm.com/rgj9t3wx?key=8c7ae6cec1988344fe02ade3465b1ef7",
    "https://www.profitableratecpm.com/s981mftq5?key=756d502ab647f3e44220c3318289145f",
    "https://www.profitableratecpm.com/k2v1sqzc?key=301ce07c3c76190119d05a625a11cf6e",
    "https://www.profitableratecpm.com/v54144ki?key=528322043f2eaeb1e44536b0a7e57c1c",
    "https://www.profitableratecpm.com/f01ep4wh?key=b202d6cf8fe312ae4da587fa83fcec88",
  ];
  const { id } = useParams();
  const navigate = useNavigate();
  const product = Products.find((p) => p.id === Number(id));
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {
    setIsUnlocking(true);

    // Get a random URL and open it immediately to avoid popup blockers
    const randomUrl = urls[Math.floor(Math.random() * urls.length)];

    try {
      // Open immediately to avoid popup blocker
      const popup = window.open(randomUrl, "_blank");

      // Check if popup was blocked
      if (!popup || popup.closed || typeof popup.closed === "undefined") {
        console.warn("Popup was blocked by browser");
        // Optionally show a message to user about popup blocker
      }
    } catch (error) {
      console.error("Failed to open popup:", error);
    }

    // Simulate unlock process
    setTimeout(() => {
      setIsUnlocking(false);
      setIsUnlocked(true);
    }, 5000);
  };

  const handleCongratsClick = () => {
    // Navigate to congratulations page or perform action

    window.open(product.affiliateLink, "_blank");
    console.log(product.affiliateLink);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Product not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center text-indigo-800 hover:text-gray-950 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back to products
      </motion.button>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 overflow-hidden px-6"
      >
        <motion.div variants={fadeIn}>
          <img
            src={product.image}
            alt={product.name}
            className="rounded-3xl border-blurred-500 shadow-md w-full h-auto object-cover"
          />
        </motion.div>

        <div className="space-y-6">
          <motion.div variants={staggerItem}>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-lg text-gray-500">{product.category}</p>
          </motion.div>

          <motion.div variants={staggerItem} className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-sm text-gray-500 ml-2">
              ({product.reviews} reviews)
            </span>
          </motion.div>

          <motion.div variants={staggerItem} className="space-y-4">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice > product.price && (
                <span className="ml-2 text-lg text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <div className="flex items-center">
              <span
                className={`text-sm px-2.5 py-1 rounded-full ${
                  product.inStock
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {product.inStock ? "In Stock" : "Out of stock"}
              </span>
            </div>
          </motion.div>

          <motion.div variants={staggerItem} className="pt-4">
            <h2 className="text-lg font-semibold text-gray-900">Description</h2>
            <p className="mt-2 text-gray-600">{product.description}</p>
          </motion.div>

          <motion.div variants={staggerItem} className="pt-6 pb-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
              {/* Unlock Now Button with Progress Bar */}
              <div className="relative w-full ">
                <motion.button
                  whileHover={!isUnlocking ? { scale: 1.03 } : {}}
                  whileTap={!isUnlocking ? { scale: 0.97 } : {}}
                  onClick={handleUnlock}
                  disabled={isUnlocking || isUnlocked}
                  className={`w-full py-3 px-6 rounded-lg font-medium ${
                    isUnlocking
                      ? "bg-gray-300 text-gray-500 cursor-wait"
                      : isUnlocked
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-gray-950 hover:bg-gray-300 hover:border hover:border-gray-950 hover:text-gray-950 hover:font-bold text-white"
                  }`}
                >
                  {isUnlocking
                    ? "Unlocking..."
                    : isUnlocked
                    ? "Unlocked"
                    : "Unlock Now"}
                </motion.button>

                {isUnlocking && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gray-950 rounded-lg"
                    variants={progressBarVariants}
                    initial="initial"
                    // animate="animate"
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                  />
                )}
              </div>

              {/* Congrats Button */}
              <motion.button
                initial={{ opacity: 1 }}
                animate={{
                  opacity: isUnlocked ? 1 : 0.5,
                  y: isUnlocked ? 0 : 2,
                }}
                whileHover={isUnlocked ? { scale: 1.03 } : {}}
                whileTap={isUnlocked ? { scale: 0.97 } : {}}
                onClick={isUnlocked ? handleCongratsClick : undefined}
                className={`w-full py-3 px-6 rounded-lg font-medium ${
                  isUnlocked
                    ? "bg-gray-950 hover:bg-gray-300 hover:border hover:border-gray-950 text-white hover:text-gray-950 hover:font-bold cursor-pointer"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!isUnlocked}
              >
                Claim Your Reward
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductPage;
