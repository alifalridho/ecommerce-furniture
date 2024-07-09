import React from "react";
import Section from "../../../components/Section";
import { experiences } from "../../../assets/images/Home/image";
import H2 from "../../../components/H2";
import Paragraph from "../../../components/Paragraph";
import text from "../../../data.json";
import Card from "./Card";

const Experiences = () => {
    const card = text.main.home.experiences.card;
    const data = text.main.home.experiences;

    return (
        <>
            <div className="bg-white">
                <Section>
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
                        <div className="md:w-[24rem] lg:w-[36rem] flex flex-col gap-8">
                            <div className="flex flex-col gap-5">
                                <H2>{data.heading}</H2>
                                <Paragraph>{data.subHeading}</Paragraph>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between items-start gap-5 lg:gap-10">
                                {card.map((text, index) => (
                                    <Card
                                        key={index}
                                        number={text.number}
                                        heading={text.heading}
                                        subHeading={text.subHeading}
                                    />
                                ))}
                            </div>
                        </div>
                        <div>
                            <img src={experiences} alt="" className="" />
                        </div>
                    </div>
                </Section>
            </div>
        </>
    );
};

export default Experiences;
