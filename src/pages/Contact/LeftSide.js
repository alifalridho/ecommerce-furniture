import React from "react";

const LeftSide = ({ icon, heading, subHeading }) => {
    return (
        <div className="flex gap-5">
            <div>
                <span class="material-symbols-outlined">{icon}</span>
            </div>
            <div className="w-56">
                <div className="font-bold text-xl">{heading}</div>
                <div>{subHeading}</div>
            </div>
        </div>
    );
};

export default LeftSide;
