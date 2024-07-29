import React from "react";
import Section from "../../../components/Section";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../../data.json";
import HeaderPage from "./HeaderPage";

const BlogContent = () => {
    const { title } = useParams();
    const navigate = useNavigate();
    const blog = data.main.blog.card.find((card) => title === card.title);
    const button = [
        { color: "[#1877F2]", text: "FACEBOOK", icon: "bx bxl-facebook" },
        { color: "[#C74F54]", text: "GMAIL", icon: "bx bxl-gmail" },
        { color: "[#1DA1F2]", text: "TWITTER", icon: "bx bxl-twitter" },
        { color: "[#0a66c2]", text: "LINKEDIN", icon: "bx bxl-linkedin" },
        { color: "[#BD081C]", text: "PINTEREST", icon: "bx bxl-pinterest" },
    ];

    if (!blog) {
        return <div>Blog post not found</div>;
    }

    return (
        <>
            <Section>
                <HeaderPage blog={blog.heading} />

                <div className="mb-16">
                    <img
                        src={process.env.PUBLIC_URL + blog.image}
                        alt={blog.title}
                        className="object-cover h-80 w-full"
                    />
                </div>
                <div className="space-y-5 mb-12">
                    <div className="text-6xl font-bold text-center">
                        {blog.heading}
                    </div>
                    <div className="flex justify-center items-center gap-5 text-lg ">
                        <div>{blog.name}</div>
                        <div>|</div>
                        <div className="text-gray-500">{blog.date}</div>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto">
                    {blog.content.map((content, index) => (
                        <div className="mb-5" key={index}>
                            {content}
                        </div>
                    ))}
                    <div className="flex md:justify-start gap-2 md:items-center md:flex-row flex-col mt-10">
                        {button.map((button, index) => (
                            <div key={index}>
                                <button className="p-1 px-3 bg-gray-500 text-white flex justify-start items-center gap-3">
                                    <i className={button.icon}></i>
                                    {button.text}
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={() => navigate(-1)}
                            className="p-2 bg-slate-200 px-7  rounded mt-12"
                        >
                            Back
                        </button>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default BlogContent;
