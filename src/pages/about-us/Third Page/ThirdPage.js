import React from "react";
import Section from "../../../components/Section";
import H2 from "../../../components/H2";
import data from "../../../data.json";
import Paragraph from "../../../components/Paragraph";
import { thirdPage } from "../../../assets/images/About Us/image";

const ThirdPage = () => {
    const text = data.main.aboutUs.thirdPage;
    return (
        <Section>
            <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-center">
                <div className="lg:w-[32rem] space-y-8">
                    <H2>{text.heading}</H2>
                    <Paragraph>{text.subHeading}</Paragraph>
                </div>
                <div>
                    <img src={thirdPage} alt="" />
                </div>
            </div>
        </Section>
    );
};

export default ThirdPage;
