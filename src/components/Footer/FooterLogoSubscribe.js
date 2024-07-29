import React from "react";

const icons = [
    "bx bxl-facebook",
    "bx bxl-twitter",
    "bx bxl-instagram",
    "bx bxl-tiktok",
];

const FooterLogoSubscribe = () => {
    return (
        <div className="space-y-5">
            <p className="text-xl font-semibold">LuxeFurn</p>
            <div className="space-y-2">
                <p>Subscribe</p>
                <input
                    type="text"
                    placeholder="Enter your email"
                    className="border-[1px] border-black p-1 rounded-sm "
                />
            </div>
            <div className="text-2xl space-x-5">
                {icons.map((icon, index) => (
                    <i key={index} className={icon} />
                ))}
            </div>
        </div>
    );
};

export default FooterLogoSubscribe;
