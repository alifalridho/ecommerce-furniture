import React from "react";
import Section from "../../../components/Section";
import H1 from "../../../components/H1";
import Paragraph from "../../../components/Paragraph";
import data from "../../../data.json";
import Container from "../../../components/Container";
import { firstPage } from "../../../assets/images/Services/image";

const FirstPage = () => {
    const text = data.main.careers.firstPage;
    return (
        <Section>
            <Container>
                <div className="space-y-6 lg:w-[30rem]">
                    <H1>{text.heading}</H1>
                    <Paragraph>{text.subHeading}</Paragraph>
                    <button className="bg-orange-500 lg:text-base md:text-xs py-2 px-7 rounded-full text-white font-semibold">
                        View Positions
                    </button>
                </div>
                <div>
                    <img src={firstPage} alt="" />
                </div>
            </Container>
        </Section>
    );
};

export default FirstPage;
