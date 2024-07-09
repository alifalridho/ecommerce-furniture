import React from "react";
import { Routes, Route } from "react-router-dom";
import FirstPage from "./First Page/FirstPage";
import SecondPage from "./Second Page/SecondPage";
import InnerBlog from "./Inner Blog/InnerBlog";

const Blog = () => {
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
            <Route path="/:title" element={<InnerBlog />} />
        </Routes>
    );
};

export default Blog;
