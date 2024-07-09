import React from "react";
import Section from "../../../components/Section";
import H1 from "../../../components/H1";
import text from "../../../data.json";
import SubParagraph from "../../../components/SubParagraph";
import Card from "./Card";
import {
    clientTestimonialsImages,
    clientTestimonialsProfiles,
} from "../../../assets/images/Home/image";

const ClientTestimonials = () => {
    const data = text.main.home.clientTestimonials;
    return (
        <div className="bg-white">
            <Section>
                <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-center">
                    <div className="flex flex-col gap-5 w-96">
                        <H1>{data.heading}</H1>
                        <SubParagraph>{data.subHeading}</SubParagraph>
                        <div>
                            <Card
                                img={clientTestimonialsProfiles}
                                name={data.card.name}
                                title={data.card.title}
                            />
                        </div>
                    </div>
                    <div>
                        <img
                            src={clientTestimonialsImages}
                            alt=""
                            className=""
                        />
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default ClientTestimonials;
