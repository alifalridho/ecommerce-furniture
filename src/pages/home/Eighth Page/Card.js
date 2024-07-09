import React from "react";
import H3 from "../../../components/H3";
import { arrow } from "../../../assets/images/Home/image";
import SubParagraph from "../../../components/SubParagraph";

const Card = ({ heading, subHeading, image }) => {
    return (
        <div className="flex flex-col hover:cursor-pointer bg-white rounded-2xl">
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
                <div className="flex items-center gap-2 hover:underline hover:cursor-pointer text-orange-500">
                    <p>Learn More</p>
                    <img src={arrow} alt="Arrow" />
                </div>
            </div>
        </div>
    );
};

export default Card;
