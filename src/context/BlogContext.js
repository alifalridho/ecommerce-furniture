import React, { createContext, useState } from "react";
import data from "../data.json";

// Buat context
export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const blogsPerPage = 3;
    const blog = data.main.blog.card;

    const filteredBlogs = blog
        .filter((post) =>
            post.heading.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((post) =>
            selectedCategory ? post.category === selectedCategory : true
        );

    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const currentBlogs = filteredBlogs.slice(
        (currentPage - 1) * blogsPerPage,
        currentPage * blogsPerPage
    );

    const getRecentPosts = () => {
        return blog
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 5);
    };

    return (
        <BlogContext.Provider
            value={{
                selectedCategory,
                setSelectedCategory,
                currentPage,
                setCurrentPage,
                searchTerm,
                setSearchTerm,
                blogsPerPage,
                filteredBlogs,
                currentBlogs,
                totalPages,
                paginate,
                getRecentPosts,
            }}
        >
            {children}
        </BlogContext.Provider>
    );
};
