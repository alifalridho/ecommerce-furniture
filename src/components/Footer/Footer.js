import React from "react";
import data from "../../data.json";
import FooterLogoSubscribe from "./FooterLogoSubscribe";
import FooterDownloadApp from "./FooterDownloadApp";
import FooterList from "./FooterList";

const Footer = () => {
    const text = data.footer;
    return (
        <footer className="max-w-6xl bg-white mx-auto pb-20 pt-12 grid gap-10 lg:gap-12 lg:grid-cols-5 md:grid-cols-3 grid-cols-2 px-8 min-[1150px]:px-0">
            <FooterLogoSubscribe />
            <FooterList listArray={text.support} header={"Support"} />
            <FooterList listArray={text.account} header={"Account"} />
            <FooterList listArray={text.link} header={"Quick Links"} />
            <FooterDownloadApp />
        </footer>
    );
};

export default Footer;
