/* eslint-disable no-unused-vars */
// src/pages/ProductsPage.jsx
import { motion } from "framer-motion";
import { Products } from "../../utils/data";
import ProductCard from "../../components/ProductCard";
import { Ban } from "lucide-react";

const KidsFashionsPage = () => {
  // Filter products first to get only Kid's Fashions
  const kidsFashionsProducts = Products.filter(
    (product) => product.category === "Kid's Fashions"
  );

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {kidsFashionsProducts.length > 0 ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {kidsFashionsProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center text-center py-16 px-4"
          >
            <Ban className="w-16 h-16 text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800">
              No Kid's Fashions Found
            </h2>
            <p className="text-gray-500 mt-2 max-w-md">
              Sorry, we don't have any Kid's Toys available at the moment.
              Please check back later!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
export default KidsFashionsPage;
