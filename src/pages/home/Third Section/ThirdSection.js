import React from "react";
import Section from "../../../components/Section";
import Card from "./Card";
import data from "../../../data.json";
import SwiperContainer from "../../../components/SwiperContainer";
import { Link } from "react-router-dom";

const SecondSection = () => {
    const cards = data.main.shop.card.slice(5, 12);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <Section>
            <div className="space-y-32 text-center">
                <p className="text-2xl font-bold">Top Picks For You</p>
                <SwiperContainer>
                    {Object.values(cards).map((card, index) => (
                        <Card
                            key={index}
                            name={card.name}
                            price={card.price}
                            img={card.image}
                        />
                    ))}
                </SwiperContainer>
            </div>
            <div
                onClick={scrollToTop}
                className="pt-16 flex justify-center items-center"
            >
                <button className="border-b-[1px] border-black">
                    <Link to={"/shop"}>View More</Link>
                </button>
            </div>
        </Section>
    );
};

export default SecondSection;
