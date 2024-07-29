import React, { useEffect, useState } from "react";
import Section from "../../../components/Section";
import Card from "./Card";
import data from "../../../data.json";
import SwiperContainer from "../../../components/SwiperContainer";

const SecondSection = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const totalCards = data.main.shop.card.length;
        const sliceStart = Math.floor(Math.random() * totalCards);
        const sliceEnd =
            sliceStart + 8 > totalCards ? totalCards : sliceStart + 8;
        setCards(data.main.shop.card.slice(sliceStart, sliceEnd));
    }, []);

    return (
        <div className="bg-gray-100">
            <Section>
                <SwiperContainer>
                    {cards.map((card, index) => (
                        <Card key={index} button={"Details"} card={card} />
                    ))}
                </SwiperContainer>
            </Section>
        </div>
    );
};

export default SecondSection;
