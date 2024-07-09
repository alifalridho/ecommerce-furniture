import React from "react";
import Section from "../../../components/Section";
import H1 from "../../../components/H1";
import { heroLogos, heroImages } from "../../../assets/images/Home/image";
import Button from "./Button";
import text from "../../../data.json";
import Paragraph from "../../../components/Paragraph";
import SubParagraph from "../../../components/SubParagraph";

const Hero = () => {
    const data = text.main.home.hero;
    return (
        <>
            <div className="bg-sky-100 pt-16 md:pt-20 flex justify-center items-center relative">
                <Section>
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-20">
                        <div className="flex flex-col gap-10 md:w-[50rem]">
                            <div className="flex gap-5 flex-col lg:gap-10 ">
                                <H1>{data.textOne}</H1>
                                <Paragraph>{data.textTwo}</Paragraph>
                                <div className="flex flex-row gap-2">
                                    <Button />
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <SubParagraph>{data.textThree}</SubParagraph>
                                <div>
                                    <img src={heroLogos} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <img src={heroImages} alt="" />
                        </div>
                    </div>
                </Section>
            </div>
        </>
    );
};

export default Hero;
