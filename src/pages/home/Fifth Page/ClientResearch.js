import React from "react";
import Section from "../../../components/Section";
import H2 from "../../../components/H2";
import Button from "./Button";
import Paragraph from "../../../components/Paragraph";
import text from "../../../data.json";
import { clientResearch } from "../../../assets/images/Home/image";

const ClientResearch = () => {
    const data = text.main.home.clientResearch;
    return (
        <>
            <div className="bg-purple-100">
                <Section>
                    <div className="flex flex-col gap-10">
                        <div className="flex justify-start items-center gap-5">
                            <Button />
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center gap-16">
                            <div className="flex flex-col gap-8 md:w-[27rem] lg:w-[33rem]">
                                <H2>{data.heading}</H2>
                                <Paragraph>{data.subHeadingOne}</Paragraph>
                                <Paragraph>{data.subHeadingTwo}</Paragraph>
                            </div>
                            <div>
                                <img src={clientResearch} alt="" />
                            </div>
                        </div>
                    </div>
                </Section>
            </div>
        </>
    );
};

export default ClientResearch;
