import React from "react";
import H3 from "../../../components/H3";
import { arrow } from "../../../assets/images/Home/image";
import SubParagraph from "../../../components/SubParagraph";

const Card = ({ heading, subHeading, image }) => {
    return (
        <div className="flex flex-col gap-7 hover:cursor-pointer">
            <div>
                <img src={image} alt={heading} />
            </div>
            <div className="flex flex-col gap-3">
                <H3>{heading}</H3>
                <SubParagraph>{subHeading}</SubParagraph>
                <div className="flex items-center gap-2 hover:underline hover:cursor-pointer">
                    <p>Learn More</p>
                    <img src={arrow} alt="Arrow" />
                </div>
            </div>
        </div>
    );
};

export default Card;
