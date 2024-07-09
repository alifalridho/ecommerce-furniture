import React from "react";
import Section from "../../components/Section";
import H2 from "../../components/H2";
import Paragraph from "../../components/Paragraph";
import InputContainer from "../careers/Second Page/InputContainer";
import Contact from "../../components/Contact";

const ContactUs = () => {
    const arrayinput = ["First Name", "Last Name", "Email Address"];
    return (
        <>
            <Section>
                <div className="flex flex-col gap-12 pt-10">
                    <div className="flex flex-col gap-5">
                        <H2>Have a question ? Let’s get in touch with us.</H2>
                        <Paragraph>
                            Fill up the Form and ou team will get back to within
                            24 hrs
                        </Paragraph>
                    </div>
                    <div>
                        <InputContainer arrayinput={arrayinput} />
                    </div>
                    <div>
                        <Contact />
                    </div>
                </div>
            </Section>
        </>
    );
};

export default ContactUs;
