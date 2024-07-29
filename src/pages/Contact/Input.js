import React from "react";

const Input = ({ heading, type, placeholder }) => {
    return (
        <div className="flex flex-col gap-3 w-[30rem]">
            <label className="font-bold" htmlFor={heading}>
                {heading}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className="px-2 py-3 w-full border-gray-400 border-[1px] rounded "
            />
        </div>
    );
};

export default Input;
