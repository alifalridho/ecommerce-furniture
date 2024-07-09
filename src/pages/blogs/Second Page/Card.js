import React from "react";
import H3 from "../../../components/H3";
import { arrow } from "../../../assets/images/Home/image";
import SubParagraph from "../../../components/SubParagraph";
import { Link } from "react-router-dom";

const Card = ({ heading, subHeading, image }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div className="flex flex-col hover:cursor-pointer bg-purple-100 rounded-2xl">
            <div>
                <img
                    src={image}
                    alt={heading}
                    className="w-full h-48 object-cover rounded-tr-2xl rounded-tl-2xl"
                />
            </div>
            <div className="flex flex-col gap-3 p-5">
                <H3>{heading}</H3>
                <SubParagraph>{subHeading}</SubParagraph>
                <Link
                    to={`/blog/${heading.toLowerCase().replace(/\s+/g, "-")}`}
                >
                    <div
                        onClick={scrollToTop}
                        className="flex items-center gap-2 hover:underline hover:cursor-pointer text-orange-500"
                    >
                        <p>Learn More</p>
                        <img src={arrow} alt="Arrow" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Card;
