import { useState, useMemo } from "react";

const usePagination = (items, itemsPerPage = 28) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Get current items for the page
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  }, [items, currentPage, itemsPerPage]);

  // Reset to page 1 when items change
  const resetPagination = () => {
    setCurrentPage(1);
  };

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to top immediately when page changes
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 50);
    }
  };

  return {
    currentPage,
    totalPages,
    currentItems,
    totalItems: items.length,
    itemsPerPage,
    handlePageChange,
    resetPagination,
  };
};

export default usePagination;
