import React from "react";

const SubParagraph = ({ children }) => {
    return (
        <div className="text-gray-500 font-thin text-xs md:text-sm">
            {children}
        </div>
    );
};

export default SubParagraph;
