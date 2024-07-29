import React, { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";

const BlogCategories = () => {
    const { setSelectedCategory, searchTerm, setSearchTerm, filteredBlogs } =
        useContext(BlogContext);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const categories = [...new Set(filteredBlogs.map((post) => post.category))];
    const categoryCounts = {};
    filteredBlogs.forEach((post) => {
        if (categoryCounts[post.category]) {
            categoryCounts[post.category]++;
        } else {
            categoryCounts[post.category] = 1;
        }
    });

    return (
        <>
            <div className="relative w-full">
                <input
                    type="text"
                    name=""
                    id=""
                    className="border-gray-400 border-[1px] px-2 p-1 rounded-md w-full pl-10"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <span className="material-symbols-outlined absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                    search
                </span>
            </div>

            <div className="text-2xl mt-8 mb-4">Categories</div>
            <div className="space-y-3 text-gray-500">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center hover:underline hover:cursor-pointer"
                        onClick={() => handleCategoryClick(category)}
                    >
                        <span>{category}</span>
                        <span>{categoryCounts[category]}</span>
                    </div>
                ))}
                <div
                    className="flex justify-between items-center hover:underline hover:cursor-pointer text-red-500"
                    onClick={() => handleCategoryClick(null)}
                >
                    <span className="mt-5">Show All</span>
                </div>
            </div>
        </>
    );
};

export default BlogCategories;
