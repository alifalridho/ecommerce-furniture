import React from "react";

const Card = ({ img, name, title }) => {
    return (
        <div className="flex justify-between items-center w-[12rem]">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="flex flex-col">
                <div className="">{name}</div>
                <div className="text-xs text-orange-500">{title}</div>
            </div>
        </div>
    );
};

export default Card;
