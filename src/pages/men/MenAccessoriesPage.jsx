/* eslint-disable no-unused-vars */
// src/pages/ProductsPage.jsx
import { motion } from "framer-motion";
import { Products } from "../../utils/data";
import ProductCard from "../../components/ProductCard";
import { Ban } from "lucide-react";

const MenAccessoriesPage = () => {
  // Filter products first to get only Kid's Accessories
  const MenAccessoriesProducts = Products.filter(
    (product) => product.category === "Men's Accessories"
  );

  return (
    <div className="min-h-screen py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {MenAccessoriesProducts.length > 0 ? (
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
            // className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            className="grid grid-cols-3 gap-2 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {MenAccessoriesProducts.map((product) => (
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
              No Men's Accessories Found
            </h2>
            <p className="text-gray-500 mt-2 max-w-md">
              Sorry, we don't have any Men's Accessories available at the
              moment. Please check back later!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
export default MenAccessoriesPage;
