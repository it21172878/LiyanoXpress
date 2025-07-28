/* eslint-disable no-unused-vars */
// src/components/products/ProductCard.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.03,
    boxShadow:
      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  pressed: { scale: 0.95 },
};

const ProductCard = ({ product }) => {
  function toSentenceCase(text) {
    const lower = text.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div className="relative h-40 sm:h-64 w-full">
        <img
          src={product.image}
          alt={product.name}
          // className="w-full h-full object-cover"
          className=" w-full h-full object-contain rounded-t-xl transition-transform duration-300 hover:scale-105"
        />
        {/* {product.discount > 0 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            -{product.discount}%
          </div>
        )} */}
      </div>

      <div className="p-2 sm:p-5">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-[11px] sm:text-lg font-bold sm:font-semibold text-gray-800 line-clamp-2 leading-tight">
            {product.name}
          </h3>
          {/* <span className="text-sm text-gray-500">{product.brand}</span> */}
        </div>

        <div className="flex items-center mb-0.5 sm:mb-3">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-2.5 sm:w-4 h-2.5 sm:h-4 ${
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
          <span className="text-xs text-gray-500 ml-0.5 sm:ml-1">
            ({product.reviews})
          </span>
        </div>

        <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4 line-clamp-2 hidden sm:block">
          {toSentenceCase(product.category)}
        </p>

        <div className="flex flex-col space-y-1 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 mb-1 sm:mb-4">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <span className="text-xs sm:text-lg font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-xs sm:text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <span
            className={`text-xs px-1.5 sm:px-2 py-0.5 p-5 sm:py-1 rounded-full self-start sm:self-auto ${
              product.inStock
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {/* {product.inStock ? `${product.stockCount} left` : "Sold out"} */}
            {product.inStock ? `In Stock` : "Sold out"}
          </span>
        </div>

        <Link to={`/product/${product.id}`} className="block">
          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="pressed"
            className="w-full bg-gray-950 hover:bg-gray-200 cursor-pointer hover:border hover:border-gray-950 hover:text-gray-950 hover:font-bold text-white py-1.5 sm:py-2.5 rounded-md sm:rounded-lg font-medium transition-colors text-xs sm:text-base"
            disabled={!product.inStock}
          >
            {product.inStock ? "Get Now" : "Out of Stock"}
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};
export default ProductCard;
