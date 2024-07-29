import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import RelatedProducts from "./RelatedProducts";
import Section from "../../components/Section";
import HeaderPage from "./HeaderPage";

const ProductDetail = () => {
    const { title } = useParams();
    const cards = data.main.shop.card;
    const product = cards.find((item) => item.title === title);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <Section>
            <HeaderPage product={product.name} />
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:h-[30rem]">
                <ProductImage image={product.image} />
                <ProductInfo product={product} />
            </div>
            <RelatedProducts relatedTitles={product.related} />
        </Section>
    );
};

export default ProductDetail;
