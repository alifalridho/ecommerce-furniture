import React from "react";

const ProductImage = ({ image }) => {
    return (
        <div className="md:w-1/2 h-full p-10 bg-yellow-50">
            <img
                src={`/${image}`}
                alt="Product"
                className="w-full h-full object-contain rounded-lg"
            />
        </div>
    );
};

export default ProductImage;
