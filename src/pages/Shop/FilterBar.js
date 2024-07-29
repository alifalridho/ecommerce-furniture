import React from "react";

const FilterBar = ({
    totalResults,
    showResults,
    setShowResults,
    sortOptions,
    currentSort,
    setCurrentSort,
}) => {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-100">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                    <button>
                        <img src="icons/Filtering.png" alt="" />
                    </button>
                    <button className="flex items-center text-gray-700">
                        Filter
                    </button>
                </div>
                <button>
                    <img src="icons/Grid.png" alt="" />
                </button>
                <button>
                    <img src="icons/View List.png" alt="" />
                </button>
            </div>
            <p className="text-gray-700">
                Showing 1-{showResults} of {totalResults} results
            </p>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <span>Show</span>
                    <input
                        type="number"
                        className="w-14 p-2 border"
                        value={showResults}
                        onChange={(e) => setShowResults(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <span>Sort by</span>
                    <select
                        value={currentSort}
                        onChange={(e) => setCurrentSort(e.target.value)}
                        className="p-2 border"
                    >
                        {sortOptions.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
