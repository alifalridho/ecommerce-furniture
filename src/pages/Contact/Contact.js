import React from "react";
import Section from "../../components/Section";
import HeadingPage from "../../components/HeadingPage";
import LeftSide from "./LeftSide";
import Input from "./Input";

const Contact = () => {
    const leftSideArray = [
        {
            icon: "location_on",
            heading: "Address",
            subHeading: "236 5th SE Avenue, New York NY10000, United States",
        },
        {
            icon: "call",
            heading: "Phone",
            subHeading: `Mobile: +(84) 546-6789  Hotline: +(84) 456-6789 `,
        },
        {
            icon: "schedule",
            heading: "Working Time",
            subHeading: `Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00`,
        },
    ];
    const rightSideArray = [
        {
            heading: "Name",
            type: "text",
            placeholder: "Please input your name",
        },
        {
            heading: "Email",
            type: "email",
            placeholder: `Please input your email`,
        },
        {
            heading: "Subject",
            type: "text",
            placeholder: `This is optional`,
        },
    ];
    return (
        <>
            <Section>
                <div className="space-y-20">
                    <HeadingPage head={"Contact"} page={"Contact"} />
                    <div>
                        <div className="space-y-3 text-center flex flex-col items-center">
                            <div className="text-3xl font-bold">
                                Get In Touch With Us
                            </div>
                            <div className="w-[30rem] text-sm text-gray-400">
                                For More Information About Our Product &
                                Services. Please Feel Free To Drop Us An Email.
                                Our Staff Always Be There To Help You Out. Do
                                Not Hesitate!
                            </div>
                        </div>
                        <div className="flex justify-between max-w-4xl mx-auto items-start mt-24">
                            <div className="flex flex-col gap-5">
                                {leftSideArray.map((left, index) => (
                                    <LeftSide
                                        key={index}
                                        heading={left.heading}
                                        icon={left.icon}
                                        subHeading={left.subHeading}
                                    />
                                ))}
                            </div>
                            <div className="flex flex-col gap-5">
                                {rightSideArray.map((right, index) => (
                                    <Input
                                        key={index}
                                        heading={right.heading}
                                        type={right.type}
                                        placeholder={right.placeholder}
                                    />
                                ))}
                                <div className="flex flex-col gap-3">
                                    <label className="font-bold" htmlFor="">
                                        Message
                                    </label>
                                    <textarea
                                        name=""
                                        id=""
                                        className="p-4 h-32 w-[30rem] border-gray-400 border-[1px] rounded"
                                    ></textarea>
                                </div>
                                <div>
                                    <button className="px-10 py-2 border-black border-[1px] rounded-lg ">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Contact;
