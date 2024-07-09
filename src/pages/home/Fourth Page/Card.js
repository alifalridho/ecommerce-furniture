import React from "react";
import H3 from "../../../components/H3";
import SubParagraph from "../../../components/SubParagraph";

const Card = ({ number, heading, subHeading }) => {
    return (
        <>
            <div className="flex flex-col gap-4 md:gap-2 lg:gap-4">
                <div className="text-3xl text-orange-500">{number}</div>
                <H3>{heading}</H3>
                <SubParagraph>{subHeading}</SubParagraph>
            </div>
        </>
    );
};

export default Card;
