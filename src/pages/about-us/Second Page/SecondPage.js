import React from "react";
import Section from "../../../components/Section";
import H3 from "../../../components/H3";
import Paragraph from "../../../components/Paragraph";
import data from "../../../data.json";
import Card from "./Card";

const SecondPage = () => {
    const cards = data.main.aboutUs.secondPage.features;
    const text = data.main.aboutUs.secondPage;
    return (
        <Section>
            <div className="space-y-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-40 lg:gap-48">
                    <H3>{text.heading}</H3>
                    <Paragraph>{text.subHeading}</Paragraph>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-10 grid-cols-1">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            number={card.number}
                            heading={card.title}
                            subHeading={card.description}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default SecondPage;
