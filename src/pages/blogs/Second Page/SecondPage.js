import React from "react";
import Section from "../../../components/Section";
import data from "../../../data.json";
import Card from "./Card";
import { blogImages } from "../../../assets/images/Blog/image";
import H2 from "../../../components/H2";

const SecondPage = () => {
    const cards = data.main.blog.cards;
    return (
        <Section>
            <div className="space-y-10">
                <H2>All Posts</H2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            heading={card.heading}
                            subHeading={card.subHeading}
                            image={blogImages[index]}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default SecondPage;
