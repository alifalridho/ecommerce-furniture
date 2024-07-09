import React from "react";
import H2 from "../../../../components/H2";
import Paragraph from "../../../../components/Paragraph";
import data from "../../../../data.json";
import { secondPageLeft } from "../../../../assets/images/Careers/image";

const LeftSection = () => {
    const text = data.main.services.secondPage.sectionLeft.second;
    const bullets = text.bullets;
    return (
        <div className="flex flex-col gap-10 bg-slate-100 lg:flex-row lg:justify-between lg:items-center lg:gap-20 lg:bg-transparent">
            <div>
                <img src={secondPageLeft[1]} alt="" />
            </div>
            <div className="space-y-5 lg:w-1/2 p-5 lg:p-0">
                <H2>{text.heading}</H2>
                <Paragraph>{text.description}</Paragraph>
                <ul className="list-disc space-y-2 pl-5">
                    {bullets.map((bullet, index) => (
                        <li key={index} className="text-sm">
                            {bullet}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LeftSection;
