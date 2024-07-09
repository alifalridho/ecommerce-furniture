import React from "react";
import { jobVacancies } from "../../../assets/images/Home/image";
import text from "../../../data.json";
import H2 from "../../../components/H2";

const JobVacancies = () => {
    return (
        <>
            <div className="bg-yellow-600">
                <div className="flex flex-col min-[940px]:flex-row min-[940px]:justify-between min-[940px]:items-center min-[940px]:h-[30rem]">
                    <div className="">
                        <img
                            src={jobVacancies}
                            alt=""
                            className="w-full min-[940px]:h-[30rem] object-contain"
                        />
                    </div>
                    <div className="text-white">
                        <div className="px-5 py-10 flex flex-col gap-5 lg:gap-10 lg:px-16">
                            <div className="lg:w-[30rem]">
                                <H2>{text.main.home.JobVacancies.heading}</H2>
                            </div>
                            <button className="bg-white text-yellow-600 w-48 lg:w-56 lg:text-base text-xs py-2 px-7 rounded-full">
                                See Job Vacancies
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobVacancies;
