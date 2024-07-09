import React from "react";

const Submit = ({ text }) => {
    return (
        <>
            <input
                type="text"
                className=" bg-slate-50 p-2"
                placeholder={text}
            />
        </>
    );
};

export default Submit;
