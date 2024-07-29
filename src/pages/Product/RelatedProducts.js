import React from "react";
import data from "../../data.json";
import ShopCard from "../Shop/ShopCard";
import SwiperContainer from "../../components/SwiperContainer";

const RelatedProducts = ({ relatedTitles }) => {
    const relatedProducts = data.main.shop.card.filter((product) =>
        relatedTitles.includes(product.title)
    );

    return (
        <div className="mt-16">
            <h2 className="text-2xl font-bold mb-10">Related Products</h2>
            <SwiperContainer>
                {relatedProducts.map((product) => (
                    <ShopCard key={product.title} item={product} />
                ))}
            </SwiperContainer>
        </div>
    );
};

export default RelatedProducts;
