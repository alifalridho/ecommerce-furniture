import React from "react";
import Section from "../../../components/Section";
import { Link } from "react-router-dom";

const FirstSection = () => {
    return (
        <div className=" font-roboto">
            <Section>
                <div className="flex lg:justify-between lg:items-center lg:flex-row flex-col gap-14">
                    <div className="space-y-10">
                        <div className="space-y-5">
                            <p className="text-7xl font-medium">LuxeFurn</p>
                            <p className="text-4xl font-thin lg:w-96">
                                Bringing Luxury to Every Corner of Your Home
                            </p>
                        </div>

                        <button className="border-b-[1px] border-black">
                            <Link to={"/shop"}>Shop now</Link>
                        </button>
                    </div>
                    <div className="lg:w-[34rem]">
                        <img
                            src="/images/First Section/First Section Image 1.png"
                            alt=""
                        />
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default FirstSection;
