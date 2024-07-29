import React from "react";
import { Link } from "react-router-dom";

const FeaturedBlog = ({ blog }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div className="">
            <div className="overflow-hidden relative">
                <img
                    src={blog.image}
                    alt={blog.image}
                    className="w-[60rem] h-96 object-cover"
                />
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-65 text-white"></div>
                <div className="absolute  bottom-10 left-10 space-y-10 text-white">
                    <h3 className="text-3xl font-bold w-80 lg:text-4xl lg:w-full lg:font-normal">
                        {blog.heading}
                    </h3>
                    <div className="flex justify-between items-center w-[19rem] lg:w-[38rem]">
                        <div>
                            <p className="font-bold">{blog.name}</p>
                            <p className="font-thin">{blog.date}</p>
                        </div>
                        <div onClick={scrollToTop}>
                            <Link to={`/blog/${blog.title}`}>
                                <div className="flex items-center justify-start gap-2 hover:underline hover:cursor-pointer">
                                    <p className="">Read More</p>
                                    <img src="icons/Arrow.png" alt="" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedBlog;
