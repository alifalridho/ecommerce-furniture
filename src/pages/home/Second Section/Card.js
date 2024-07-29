import React from "react";
import { Link } from "react-router-dom";

const Card = ({ card, button }) => {
    return (
        <Link to={`/shop/${card.title}`}>
            <div className="space-y-6 flex flex-col items-center">
                <div className="">
                    <img
                        src={card.image}
                        alt=""
                        className="h-32 w-48 object-contain"
                    />
                </div>
                <p className="text-xl">{card.name}</p>
                <button className="font-thin border-b-[1px] border-black">
                    {button}
                </button>
            </div>
        </Link>
    );
};

export default Card;
