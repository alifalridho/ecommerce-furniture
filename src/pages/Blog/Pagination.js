import React, { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";

const Pagination = () => {
    const { currentPage, setCurrentPage, totalPages } = useContext(BlogContext);

    const getVisiblePages = () => {
        if (totalPages <= 3) {
            return [...Array(totalPages).keys()].map((x) => x + 1);
        }
        if (currentPage <= 2) {
            return [1, 2, 3];
        }
        if (currentPage >= totalPages - 1) {
            return [totalPages - 2, totalPages - 1, totalPages];
        }
        return [currentPage - 1, currentPage, currentPage + 1];
    };

    const visiblePages = getVisiblePages();

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="flex justify-center items-center mt-20 space-x-7">
            {currentPage > 1 && (
                <button
                    onClick={() => paginate(currentPage - 1)}
                    className="px-3 py-1 bg-yellow-50 rounded"
                >
                    Prev
                </button>
            )}
            {visiblePages.map((page) => (
                <button
                    key={page}
                    onClick={() => paginate(page)}
                    className={`px-3 py-1 border rounded ${
                        page === currentPage ? "bg-yellow-200" : "bg-yellow-50"
                    }`}
                >
                    {page}
                </button>
            ))}
            {currentPage < totalPages && (
                <button
                    onClick={() => paginate(currentPage + 1)}
                    className="px-3 py-1 bg-yellow-50 rounded"
                >
                    Next
                </button>
            )}
        </div>
    );
};

export default Pagination;
