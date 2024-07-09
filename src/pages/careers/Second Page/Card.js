import React from "react";
import { Link } from "react-router-dom";

const Card = ({ position, place }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div className="bg-indigo-50 p-7 rounded-lg flex flex-col gap-4">
            <div className="space-y-1">
                <div className="font-semibold">{position}</div>
                <div className="text-slate-500">{place}</div>
            </div>
            <Link
                to={`/careers/${position.toLowerCase().replace(/\s+/g, "-")}`}
            >
                <div className="text-orange-500" onClick={scrollToTop}>
                    Apply Now
                </div>
            </Link>
        </div>
    );
};

export default Card;
