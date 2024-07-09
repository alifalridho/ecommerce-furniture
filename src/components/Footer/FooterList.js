import React from "react";

const FooterList = ({ array, text }) => {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="font-semibold">{text}</div>
                <ul className="flex flex-col gap-1 font-thin">
                    {array.map((list, index) => (
                        <a className="hover:underline" href="/">
                            <li key={index}>{list}</li>
                        </a>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default FooterList;
