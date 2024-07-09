import React from "react";
import Section from "../../../components/Section";
import H2 from "../../../components/H2";
import data from "../../../data.json";
import Paragraph from "../../../components/Paragraph";
import Card from "./Card";
import { servicesImages } from "../../../assets/images/Home/image";

const Services = () => {
    const card = data.main.home.services.card;
    const datas = data.main.home.services;

    return (
        <>
            <div className="bg-white">
                <Section>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col lg:w-[34rem] gap-5">
                            <H2>{datas.heading}</H2>
                            <Paragraph>{datas.subHeading}</Paragraph>
                        </div>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                            {card.map((text, index) => (
                                <Card
                                    key={index}
                                    heading={text.heading}
                                    subHeading={text.subHeading}
                                    image={servicesImages[index]}
                                />
                            ))}
                        </div>
                    </div>
                </Section>
            </div>
        </>
    );
};

export default Services;
