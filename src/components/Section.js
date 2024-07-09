import React from "react";

const Section = ({ children }) => {
    return (
        <section className="max-w-6xl mx-auto py-16 px-7 min-[1150px]:px-0 overflow-hidden">
            {children}
        </section>
    );
};

export default Section;
