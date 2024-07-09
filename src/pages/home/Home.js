import React from "react";
import Hero from "./First Page/Hero";
import Services from "./Second Page/Services";
import SoftwareSolutions from "./Third Page/SoftwareSolutions";
import Experiences from "./Fourth Page/Experiences";
import ClientResearch from "./Fifth Page/ClientResearch";
import JobVacancies from "./Sixth Page/JobVacancies";
import ClientTestimonials from "./Seventh Page/ClientTestimonials";
import Blog from "./Eighth Page/Blog";

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <SoftwareSolutions />
            <Experiences />
            <ClientResearch />
            <JobVacancies />
            <ClientTestimonials />
            <Blog />
        </>
    );
};

export default Home;
