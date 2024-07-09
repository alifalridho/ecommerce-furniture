import React from "react";

const H1 = ({ children }) => {
    return (
        <div className="lg:text-5xl md:text-4xl text-3xl font-bold">
            {children}
        </div>
    );
};

export default H1;
