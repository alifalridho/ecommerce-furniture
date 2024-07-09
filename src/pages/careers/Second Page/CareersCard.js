import React from "react";
import Paragraph from "../../../components/Paragraph";

const CareersCard = ({ arrays, arraystwo }) => {
    return (
        <>
            <div className="flex flex-col gap-5 bg-sky-50 p-12">
                {arrays.map((array, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-5 md:flex-row md:justify-between md:items-start"
                    >
                        <div className="font-bold text-xl">{array}</div>
                        <div className="md:w-[45rem]">
                            <Paragraph>{arraystwo[index]}</Paragraph>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CareersCard;
