import React from "react";
import FirstPage from "./First Page/FirstPage";
import SecondPage from "./Second Page/SecondPage";
import { Routes, Route } from "react-router-dom";
import InnerCareers from "./Second Page/InnerCareers";

const Careers = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <FirstPage />
                        <SecondPage />
                    </>
                }
            />
            <Route path="/:title" element={<InnerCareers />} />
        </Routes>
    );
};

export default Careers;
