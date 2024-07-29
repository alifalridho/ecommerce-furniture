import React from "react";
import { Link } from "react-router-dom";

const ShopCard = ({ item }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div onClick={scrollToTop}>
            <Link to={`/shop/${item.title}`}>
                <div className="space-y-6 flex flex-col items-center">
                    <img
                        src={`/${item.image}`}
                        alt={item.name}
                        className="h-32 w-48 object-contain"
                    />
                    <h3 className=" text-center">{item.name}</h3>
                    <p className="font-thin border-b-[1px] border-black">
                        {item.price}
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default ShopCard;
