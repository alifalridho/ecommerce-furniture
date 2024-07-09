import React from "react";
import Section from "../../../components/Section";
import H2 from "../../../components/H2";
import data from "../../../data.json";
import Card from "./Card";

const SecondPage = () => {
    const text = data.main.careers.secondPage;
    const card = data.main.careers.secondPage.card;
    return (
        <Section>
            <div className="space-y-10">
                <H2>{text.heading}</H2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {card.map((card, index) => (
                        <Card
                            key={index}
                            position={card.position}
                            place={card.place}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default SecondPage;
