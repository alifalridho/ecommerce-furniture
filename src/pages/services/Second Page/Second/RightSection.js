import React from "react";
import H2 from "../../../../components/H2";
import Paragraph from "../../../../components/Paragraph";
import data from "../../../../data.json";
import { secondPageRight } from "../../../../assets/images/Careers/image";

const RightSection = () => {
    const text = data.main.services.secondPage.sectionRight.second;
    return (
        <div className="flex flex-col gap-10 bg-slate-100 lg:flex-row lg:justify-between lg:items-center lg:gap-20 lg:bg-transparent">
            <div className="space-y-5 lg:w-1/2 p-5 lg:p-0">
                <H2>{text.heading}</H2>
                <Paragraph>{text.description}</Paragraph>
            </div>
            <div>
                <img src={secondPageRight[1]} alt="" />
            </div>
        </div>
    );
};

export default RightSection;
