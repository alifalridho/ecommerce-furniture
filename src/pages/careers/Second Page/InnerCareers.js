import React from "react";
import data from "../../../data.json";
import { useParams, useNavigate } from "react-router-dom";
import Section from "../../../components/Section";
import H2 from "../../../components/H2";
import Paragraph from "../../../components/Paragraph";
import CareersCard from "./CareersCard";
import InputContainer from "./InputContainer";

const InnerCareers = () => {
    const { title } = useParams();
    const navigate = useNavigate();
    const careerTitle = title.replace(/-/g, " ");
    const careers = data.main.careers.secondPage.card.find(
        (card) => card.position.toLowerCase() === careerTitle.toLowerCase()
    );
    const arrays = ["Details", "Requirements", "Responsibilities"];
    const arraystwo = [
        careers.details,
        careers.requirements.join(", "),
        careers.responsibilities.join(", "),
    ];
    const arrayinput = ["First Name", "Last Name", "Email", "Mobile No"];
    if (!careers) {
        return <div>Position not found</div>;
    }

    return (
        <Section>
            <div className="flex flex-col gap-12 pt-12">
                <div>
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 bg-slate-200 px-7 rounded-full"
                    >
                        Back
                    </button>
                </div>
                <H2>{careers.position}</H2>
                <div className="flex flex-col gap-5 md:flex-row md:justify-between md:items-center">
                    <div className="flex flex-col gap-2">
                        <div className="font-bold text-xl">Job Description</div>
                        <Paragraph>
                            {careers.place}, {careers.type},{" "}
                            {careers.experience}, Department:{" "}
                            {careers.department}
                        </Paragraph>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="font-bold text-xl">Salary</div>
                        <Paragraph>{careers.salary}</Paragraph>
                    </div>
                </div>
                <CareersCard arrays={arrays} arraystwo={arraystwo} />
                <InputContainer arrayinput={arrayinput} />
            </div>
        </Section>
    );
};

export default InnerCareers;
