import React from "react";

const HeaderPage = ({ blog }) => {
    return (
        <div className="mb-12 flex justify-start items-center gap-8 text-sm">
            <div className="text-gray-400">Home</div>
            <div>
                <img src="/icons/Dash.png" alt="" />
            </div>
            <div className="text-gray-400">Blog</div>
            <div>
                <img src="/icons/Dash.png" alt="" />
            </div>
            <div>{blog}</div>
        </div>
    );
};

export default HeaderPage;
