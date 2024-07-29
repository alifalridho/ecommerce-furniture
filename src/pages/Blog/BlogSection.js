import React, { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";
import { Link } from "react-router-dom";

const BlogSection = ({ data }) => {
    const { setSelectedCategory, filteredBlogs } = useContext(BlogContext);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const categoryCounts = {};
    filteredBlogs.forEach((post) => {
        if (categoryCounts[post.category]) {
            categoryCounts[post.category]++;
        } else {
            categoryCounts[post.category] = 1;
        }
    });

    return (
        <div className="max-w-3xl space-y-5">
            <div>
                <img src={data.image} alt="" />
            </div>
            <div className="flex justify-start items-center gap-7 mt-2 text-gray-500">
                <div className="flex gap-2 items-center">
                    <i className="bx bxs-user text-lg"></i>
                    <div className="text-[12.5px]">Admin</div>
                </div>
                <div className="flex gap-2 items-center">
                    <i className="bx bxs-calendar-alt text-lg"></i>
                    <div className="text-[12.5px]">{data.date}</div>
                </div>
                <div
                    onClick={() => handleCategoryClick(data.category)}
                    className="flex gap-2 items-center hover:cursor-pointer "
                >
                    <i className="bx bx-purchase-tag-alt text-lg"></i>
                    <div className="text-[12.5px] hover:underline">
                        {data.category}
                    </div>
                </div>
            </div>
            <div className="space-y-2">
                <div className="text-3xl font-bold">{data.heading}</div>
                <div className="text-gray-500 text-sm">{data.content[0]}</div>
            </div>
            <div onClick={scrollToTop}>
                <Link to={`/blog/${data.title}`}>
                    <div className="underline hover:cursor-pointer mt-6">
                        Read More
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default BlogSection;
