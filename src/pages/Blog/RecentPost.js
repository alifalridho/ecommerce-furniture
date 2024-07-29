import React from "react";
import { Link } from "react-router-dom";

const RecentPost = ({ data }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div onClick={scrollToTop}>
            <Link to={`/blog/${data.title}`}>
                <div className="flex justify-between items-center gap-3">
                    <div>
                        <img
                            src={data.image}
                            alt=""
                            className="w-16 h-20 object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="text-sm font-semibold">
                            {data.heading}
                        </div>
                        <div className="text-xs text-gray-500">{data.date}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default RecentPost;
