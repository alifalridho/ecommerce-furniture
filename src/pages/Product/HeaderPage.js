import React from "react";

const HeaderPage = ({ product }) => {
    return (
        <div className="mb-12 flex justify-start items-center gap-8 text-sm">
            <div className="text-gray-400">Home</div>
            <div>
                <img src="/icons/Dash.png" alt="" />
            </div>
            <div className="text-gray-400">Shop</div>
            <div>
                <img src="/icons/Dash.png" alt="" />
            </div>
            <div>{product}</div>
        </div>
    );
};

export default HeaderPage;
