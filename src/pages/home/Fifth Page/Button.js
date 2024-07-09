import React from "react";

const Button = () => {
    const text = ["Digitalization", "Risk assessment"];

    return (
        <>
            <button className="bg-white text-orange-500 lg:text-base text-xs py-2 px-7 rounded-full">
                Business strategy
            </button>

            {text.map((text, index) => (
                <button
                    key={index}
                    className="bg-transparent lg:text-base text-xs text-gray-400 border-solid border-2 border-gray-400 py-2 px-7 rounded-full"
                >
                    {text}
                </button>
            ))}
        </>
    );
};

export default Button;
