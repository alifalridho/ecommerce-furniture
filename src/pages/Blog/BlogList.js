import React from "react";
import BlogSection from "./BlogSection";

const BlogList = ({ blogs }) => {
    return (
        <div className="space-y-12">
            {blogs.map((post, index) => (
                <BlogSection key={index} data={post} />
            ))}
        </div>
    );
};

export default BlogList;
