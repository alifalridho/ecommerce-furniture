import React from "react";
import H3 from "../../../components/H3";
import SubParagraph from "../../../components/SubParagraph";

const Card = ({ heading, subHeading, image }) => {
    return (
        <div className="flex flex-col gap-7 bg-white p-5 rounded-xl hover:cursor-pointer">
            <div>
                <img src={image} alt={heading} />
            </div>
            <div className="flex flex-col gap-5">
                <H3>{heading}</H3>
                <SubParagraph>{subHeading}</SubParagraph>
            </div>
        </div>
    );
};

export default Card;
