import React from "react";
import Section from "../../../components/Section";
import H2 from "../../../components/H2";
import Paragraph from "../../../components/Paragraph";
import text from "../../../data.json";
import { softwareSolutionsIcons } from "../../../assets/images/Home/image";
import Card from "./Card";

const SoftwareSolutions = () => {
    const card = text.main.home.softwareSolution.card;
    const data = text.main.home.softwareSolution;
    return (
        <>
            <div className="bg-indigo-100">
                <Section>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-center lg:gap-28">
                            <H2>{data.heading}</H2>
                            <Paragraph>{data.subHeading}</Paragraph>
                        </div>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14">
                            {card.map((text, index) => (
                                <Card
                                    image={softwareSolutionsIcons[index]}
                                    key={index}
                                    heading={text.heading}
                                    subHeading={text.subHeading}
                                />
                            ))}
                        </div>
                    </div>
                </Section>
            </div>
        </>
    );
};

export default SoftwareSolutions;
