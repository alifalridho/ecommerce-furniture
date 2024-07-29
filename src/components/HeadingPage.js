import React from "react";

const HeadingPage = ({ head, page }) => {
    return (
        <div className="mb-32 mt-14">
            <div className="text-5xl font-bold text-center pb-5">{head}</div>
            <div className="flex justify-center items-center gap-4">
                <div className="text-gray-400">Home</div>
                <div>
                    <img src="icons/Dash.png" alt="" />
                </div>
                <div>{page}</div>
            </div>
        </div>
    );
};

export default HeadingPage;
