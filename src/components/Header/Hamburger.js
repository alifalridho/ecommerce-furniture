import React, { useState } from "react";
import data from "../../data.json";
import { Link } from "react-router-dom";

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const text = data.header.hamburger;
    const clicked = () => {
        setIsOpen(!isOpen);
    };
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <>
            <div onClick={clicked}>
                <span className="material-symbols-outlined text-3xl">menu</span>
            </div>
            {isOpen && (
                <div>
                    <div className="z-20 absolute top-0 right-0 left-0 bottom-0 bg-white flex justify-center items-center h-screen">
                        <ul className="flex flex-col justify-center items-center h-screen gap-2 text-2xl">
                            {text.map((text, index) => (
                                <li onClick={scrollToTop} key={index}>
                                    <Link to={text.page}>{text.list}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div
                        onClick={clicked}
                        className="absolute top-4 right-7 z-20"
                    >
                        <span className="material-symbols-outlined text-4xl">
                            close
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};

export default Hamburger;
