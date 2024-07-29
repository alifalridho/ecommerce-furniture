import React from "react";

const List = ({ list, children }) => {
    return (
        <>
            <div className="flex  items-center gap-5">
                <div className="flex justify-between items-center w-20">
                    <div>{list}</div>
                    <div className="font-normal">:</div>
                </div>
                <div>{children}</div>
            </div>
        </>
    );
};

export default List;
