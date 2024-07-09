import React from "react";
import Home from "./pages/home/Home";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import SmoothScroll from "./components/SmoothScroll";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/about-us/AboutUs";
import Careers from "./pages/careers/Careers";
import Services from "./pages/services/Services";
import Blog from "./pages/blogs/Blog";
import ContactUs from "./pages/contact-us/ContactUs";

const App = () => {
    return (
        <Router>
            <SmoothScroll>
                <Header>
                    <Navbar />
                </Header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/careers/*" element={<Careers />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/blog/*" element={<Blog />} />
                        <Route path="/contact" element={<ContactUs />} />
                    </Routes>
                </main>
                <Footer />
            </SmoothScroll>
        </Router>
    );
};

export default App;
