import React from "react";

const FooterList = ({ listArray, header }) => {
    return (
        <div className="space-y-6">
            <p className="font-semibold">{header}</p>
            <ul className="space-y-3">
                {listArray.map((list, index) => (
                    <li key={index}>
                        <a href="/" className="hover:underline font-thin">
                            {list}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterList;
