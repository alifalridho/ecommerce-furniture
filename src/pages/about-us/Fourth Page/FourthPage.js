import React from "react";
import Section from "../../../components/Section";
import H2 from "../../../components/H2";
import Paragraph from "../../../components/Paragraph";
import data from "../../../data.json";
import { fourthPages } from "../../../assets/images/About Us/image";
import SwiperContainer from "../../../components/SwiperContainer";

const FourthPage = () => {
    const text = data.main.aboutUs.fourthPage;
    return (
        <Section>
            <div className="space-y-8">
                <div className="space-y-5 lg:w-[26rem]">
                    <H2>{text.heading}</H2>
                    <Paragraph>{text.subHeading}</Paragraph>
                </div>
                <SwiperContainer>
                    {fourthPages.map((img, index) => (
                        <div>
                            <img src={img} className="" key={index} alt="" />
                        </div>
                    ))}
                </SwiperContainer>
            </div>
        </Section>
    );
};

export default FourthPage;
