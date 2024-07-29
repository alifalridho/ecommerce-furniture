import React from "react";

const Pagination = ({
    totalItems,
    itemsPerPage,
    currentPage,
    setCurrentPage,
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex justify-center mt-8">
            <ul className="flex items-center space-x-2">
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <button
                            onClick={() => setCurrentPage(number)}
                            className={`px-4 py-2 rounded ${
                                number === currentPage
                                    ? "bg-yellow-100 text-black"
                                    : "bg-gray-100 text-gray-700"
                            }`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded bg-gray-100 text-gray-700"
                    >
                        Next
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
