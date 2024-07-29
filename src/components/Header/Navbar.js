import React, { useState } from "react";
import data from "../../data.json";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import CartSidebar from "../../pages/Cart/CartSidebar";

const Navbar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const list = data.header.list;
    const icon = ["person", "search", "shopping_cart"];
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleCartOpen = () => {
        setIsCartOpen(true);
    };

    const handleCartClose = () => {
        setIsCartOpen(false);
    };

    return (
        <>
            <nav className="flex justify-between items-center h-16 max-w-6xl mx-auto px-8 min-[1150px]:px-0">
                <div className="">
                    <button className="text-2xl font-semibold">LuxeFurn</button>
                </div>
                <ul className="hidden sm:flex justify-center items-center text-sm md:text-base sm:gap-7 md:gap-10 lg:gap-16 font-semibold">
                    {list.map((item, index) => (
                        <li
                            onClick={scrollToTop}
                            className="hover:cursor-pointer"
                            key={index}
                        >
                            <Link to={item.page}>{item.list}</Link>
                        </li>
                    ))}
                </ul>
                <div className="hidden sm:flex justify-center items-center text-sm md:text-base sm:gap-2 md:gap-3 lg:gap-6">
                    {icon.map((text, index) => (
                        <button
                            key={index}
                            onClick={
                                text === "shopping_cart"
                                    ? handleCartOpen
                                    : undefined
                            }
                        >
                            <span className="material-symbols-outlined">
                                {text}
                            </span>
                        </button>
                    ))}
                </div>
                <div className="flex sm:hidden">
                    <Hamburger />
                </div>
            </nav>
            <CartSidebar isOpen={isCartOpen} onClose={handleCartClose} />
        </>
    );
};

export default Navbar;
