import React, { useContext } from "react";
import Section from "../../components/Section";
import HeadingPage from "../../components/HeadingPage";
import BlogList from "./BlogList";
import Pagination from "./Pagination";
import BlogSide from "./BlogSide";
import { BlogProvider, BlogContext } from "../../context/BlogContext";

const Blog = () => {
    return (
        <BlogProvider>
            <BlogContent />
        </BlogProvider>
    );
};

const BlogContent = () => {
    const { currentBlogs, totalPages, currentPage, paginate } =
        useContext(BlogContext);

    return (
        <Section>
            <HeadingPage head={"Blog"} page={"Blog"} />
            <div className="flex justify-between items-start">
                <div>
                    <BlogList blogs={currentBlogs} />
                </div>
                <div className="lg:flex hidden">
                    <BlogSide />
                </div>
            </div>
            {totalPages > 1 && (
                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    paginate={paginate}
                />
            )}
        </Section>
    );
};

export default Blog;
