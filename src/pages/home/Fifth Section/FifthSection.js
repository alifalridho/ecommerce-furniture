import React, { useEffect, useState } from "react";
import data from "../../../data.json";
import FeaturedBlog from "./FeaturedBlog";
import NonFeaturedBlog from "./NonFeaturedBlog";
import Section from "../../../components/Section";

const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

const FifthSection = () => {
    const [featuredBlogs, setFeaturedBlogs] = useState([]);
    const [nonFeaturedBlogs, setNonFeaturedBlogs] = useState([]);

    useEffect(() => {
        const featured = shuffleArray(
            data.main.blog.card.filter((card) => card.isFeatured)
        );
        const nonFeatured = shuffleArray(
            data.main.blog.card.filter((card) => !card.isFeatured)
        );

        setFeaturedBlogs(featured);
        setNonFeaturedBlogs(nonFeatured);
    }, []);

    return (
        <Section>
            <h2 className="text-3xl font-bold mb-10 text-center">Our Blogs</h2>
            <div className="flex flex-col justify-between  gap-10 md:flex-row md:justify-between md:gap-5 md:items-stretch">
                <div className="flex flex-wrap">
                    {featuredBlogs.slice(0, 1).map((blog) => (
                        <FeaturedBlog key={blog.id} blog={blog} />
                    ))}
                </div>
                <div className="flex flex-col md:justify-between gap-7 md:gap-0">
                    {nonFeaturedBlogs.slice(0, 3).map((blog) => (
                        <NonFeaturedBlog key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default FifthSection;
