import React from "react";

const H3 = ({ children }) => {
    return (
        <div className="lg:text-3xl md:text-2xl text-xl font-bold">
            {children}
        </div>
    );
};

export default H3;
