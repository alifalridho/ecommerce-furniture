import React from "react";

const Header = ({ children }) => {
    return (
        <>
            <header className="sticky w-full z-20 top-0 left-0 backdrop-filter backdrop-blur">
                {children}
            </header>
        </>
    );
};

export default Header;
