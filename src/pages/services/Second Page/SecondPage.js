import React from "react";
import Section from "../../../components/Section";
import LeftSectionFirst from "./First/LeftSection";
import RightSectionFirst from "./First/RightSection";
import LeftSectionSecond from "./Second/LeftSection";
import RightSectionSecond from "./Second/RightSection";
import LeftSectionThird from "./Third/LeftSection";

const SecondPage = () => {
    return (
        <Section>
            <div className="flex flex-col gap-24">
                <LeftSectionFirst />
                <RightSectionFirst />
                <LeftSectionSecond />
                <RightSectionSecond />
                <LeftSectionThird />
            </div>
        </Section>
    );
};

export default SecondPage;
