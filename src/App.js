import React from "react";
import SmoothScroll from "./components/SmoothScroll";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Pages from "./pages/Pages";

const App = () => {
    return (
        <Router>
            <SmoothScroll>
                <Header>
                    <Navbar />
                </Header>
                <Main>
                    <Pages />
                </Main>
                <Footer />
            </SmoothScroll>
        </Router>
    );
};

export default App;
