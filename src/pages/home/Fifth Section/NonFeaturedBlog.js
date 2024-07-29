import React from "react";
import { Link } from "react-router-dom";

const NonFeaturedBlog = ({ blog }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div onClick={scrollToTop}>
            <Link to={`/blog/${blog.title}`}>
                <div className="bg-white  overflow-hidden flex gap-3">
                    <img
                        src={blog.image}
                        alt={blog.heading}
                        className="w-20 h-28 object-cover"
                    />
                    <div className="flex flex-col justify-between">
                        <h3 className="text-lg font-bold ">{blog.heading}</h3>
                        <p className="text-gray-500 text-sm md:text-xs">
                            {blog.subheading}
                        </p>
                        <p className="hover:underline text-sm">Read More</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default NonFeaturedBlog;
