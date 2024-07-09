import React from "react";
import Section from "../../../components/Section";
import H2 from "../../../components/H2";
import Paragraph from "../../../components/Paragraph";
import { arrow } from "../../../assets/images/Home/image";
import { firstPage, user } from "../../../assets/images/Blog/image";
import data from "../../../data.json";
import { Link } from "react-router-dom";

const FirstPage = () => {
    const text = data.main.blog.firstPage;
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div className="bg-purple-100">
            <Section>
                <div className="pt-16 flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-center">
                    <div className="space-y-7 md:w-[30rem]">
                        <div className="flex justify-start items-center gap-6 text-xs">
                            <div className="flex gap-2 items-center">
                                <img src={user} alt="" />
                                <div>{text.name}</div>
                            </div>
                            <div>{text.date}</div>
                        </div>
                        <H2>{text.heading}</H2>
                        <Paragraph>{text.subHeading}</Paragraph>
                        <Link
                            to={`/blog/${text.heading
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                        >
                            <div
                                onClick={scrollToTop}
                                className="flex items-center gap-2 hover:underline hover:cursor-pointer text-orange-500"
                            >
                                <p>Learn More</p>
                                <img src={arrow} alt="Arrow" />
                            </div>
                        </Link>
                    </div>
                    <div>
                        <img src={firstPage} alt="" />
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default FirstPage;
