import React from "react";
import Section from "../../../components/Section";
import H2 from "../../../components/H2";
import data from "../../../data.json";
import Card from "./Card";
import { blogImages } from "../../../assets/images/Home/image";

const Blog = () => {
    const card = data.main.home.Blog.card;

    return (
        <div className="bg-sky-100">
            <Section>
                <div className="space-y-5">
                    <H2>{data.main.home.Blog.heading}</H2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                        {card.map((card, index) => (
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
        </div>
    );
};

export default Blog;
