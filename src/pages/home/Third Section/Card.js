import React from "react";

const Card = ({ name, price, img }) => {
    return (
        <div className="space-y-6 flex flex-col items-center">
            <div className="">
                <img src={img} alt="" className="h-32 w-48 object-contain" />
            </div>
            <p className="text-xl">{name}</p>
            <p className="font-thin">{price}</p>
        </div>
    );
};

export default Card;
