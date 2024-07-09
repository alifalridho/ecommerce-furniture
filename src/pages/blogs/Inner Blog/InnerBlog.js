import React from "react";
import Section from "../../../components/Section";
import H2 from "../../../components/H2";
import Paragraph from "../../../components/Paragraph";
import data from "../../../data.json";
import { useParams, useNavigate } from "react-router-dom";
import { blogImages, user } from "../../../assets/images/Blog/image";

const InnerBlog = () => {
    const navigate = useNavigate();
    const { title } = useParams();
    const blogTitle = title.replace(/-/g, " ");
    const blog = data.main.blog.cards.find(
        (card) => card.heading.toLowerCase() === blogTitle.toLowerCase()
    );

    if (!blog) {
        return <div className="pt-20">Blog not found</div>;
    }

    return (
        <div>
            <Section>
                <div className="space-y-5 pt-10">
                    <div>
                        <button
                            onClick={() => navigate(-1)}
                            className="p-2 bg-slate-200 px-7 rounded-full"
                        >
                            Back
                        </button>
                    </div>
                    <img
                        src={blogImages[blog.id]}
                        alt={blog.heading}
                        className="w-full h-[30rem] object-cover"
                    />

                    <H2 className="t">{blog.heading}</H2>

                    <div className="flex justify-start items-center gap-5 text-sm text-gray-500">
                        <div className="">
                            <div className="flex items-center gap-2">
                                <div>
                                    <img src={user} alt="" />
                                </div>
                                <div>Andrew Janson</div>
                            </div>
                        </div>
                        <div>Posted on 27th January 2021</div>
                    </div>

                    <div className="space-y-6">
                        {blog.content.map((paragraph, index) => (
                            <Paragraph key={index}>{paragraph}</Paragraph>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default InnerBlog;
