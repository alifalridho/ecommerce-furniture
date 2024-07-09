import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faYoutube,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import FooterList from "./FooterList";
import Email from "./Email";
import Button from "./Button";
import data from "../../data.json";

const {
    footer: { companyList, connectList },
} = data;
const fonts = [faFacebook, faInstagram, faYoutube, faTwitter];

const Footer = () => {
    return (
        <footer className="bg-blue-950 relative">
            <div className="hidden min-[1280px]:flex absolute bg-orange-500 w-8 h-28 left-0 bottom-0 rounded-tr-xl"></div>
            <div className="hidden min-[1280px]:flex absolute bg-orange-500 w-8 h-52 right-0 top-10 rounded-tl-xl rounded-bl-xl"></div>
            <div></div>
            <div className="max-w-6xl mx-auto py-16 px-7 min-[1150px]:px-0 overflow-hidden">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 text-white gap-8">
                    <div className="flex flex-col gap-6">
                        <div className="text-xl font-semibold">Brightrix</div>
                        <div className="text-2xl font-bold w-56">
                            Bespoke Software Solution
                        </div>
                        <div className="flex gap-3">
                            {fonts.map((font, index) => (
                                <FontAwesomeIcon
                                    icon={font}
                                    key={index}
                                    size="1x"
                                />
                            ))}
                        </div>
                        <div className="text-sm font-thin text-gray-400 pt-3">
                            © All rights reserved Brightrix.
                        </div>
                    </div>
                    <div className="flex gap-20">
                        <FooterList text={"Company"} array={companyList} />
                        <FooterList text={"Connect"} array={connectList} />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="font-semibold">Join Newsletter</div>
                        <Email />
                        <Button />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
