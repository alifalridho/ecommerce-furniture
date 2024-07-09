import React from "react";

const Button = () => {
    return (
        <>
            <button className="bg-orange-500 lg:text-base md:text-xs py-2 px-7 rounded-full text-white font-semibold">
                See Our Services
            </button>
            <button className="bg-transparent lg:text-base md:text-xs text-blue-950 border-solid border-2 border-blue-950 py-2 px-7 rounded-full">
                See All Services
            </button>
        </>
    );
};

export default Button;
