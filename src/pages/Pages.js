import React from "react";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./Product/ProductDetail";
import Blog from "./Blog/Blog";
import BlogContent from "./Blog/Inner/BlogContent";
import Contact from "./Contact/Contact";
import Cart from "./Cart/Cart";

const Pages = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:title" element={<ProductDetail />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:title" element={<BlogContent />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>
    );
};

export default Pages;
