/* eslint-disable no-unused-vars */
// src/pages/ProductsPage.jsx
import { motion } from "framer-motion";
import { Products } from "../../utils/data";
import ProductCard from "../../components/ProductCard";
import Pagination from "../../components/Pagination";
import usePagination from "../../hooks/usePagination";

const HomePage = () => {
  const {
    currentPage,
    totalPages,
    currentItems,
    totalItems,
    itemsPerPage,
    handlePageChange,
  } = usePagination(Products, 12); // Show 12 products per page

  return (
    <div className="min-h-screen py-6 sm:py-12 px-2 sm:px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-extrabold text-gray-500 sm:text-4xl">
            Xplore Our Products
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Discover our amazing collection
          </p>
        </motion.div> */}

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          className="grid grid-cols-3 gap-2 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {currentItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        {/* Pagination Component */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
        />
      </div>
    </div>
  );
};
export default HomePage;
