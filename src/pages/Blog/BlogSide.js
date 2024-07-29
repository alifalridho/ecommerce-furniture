import React, { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";
import RecentPost from "./RecentPost";
import BlogCategories from "./BlogCategories";

const BlogSide = () => {
    const { getRecentPosts } = useContext(BlogContext);

    const recentPosts = getRecentPosts();

    return (
        <div className="w-[16rem]">
            <BlogCategories />
            <div className="text-2xl mt-8 mb-4">Recent Posts</div>
            <div className="flex flex-col items-start gap-3">
                {recentPosts.map((post, index) => (
                    <RecentPost key={index} data={post} />
                ))}
            </div>
        </div>
    );
};

export default BlogSide;
