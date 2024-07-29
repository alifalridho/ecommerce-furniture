import React, { useState, useContext } from "react";
import List from "./List";
import { CartContext } from "../../context/CartContext"; // Pastikan pathnya benar

const ProductInfo = ({ product }) => {
    const [total, setTotal] = useState(1);
    const { addToCart } = useContext(CartContext);

    const increment = () => {
        setTotal(total + 1);
    };

    const decrement = () => {
        if (total > 1) {
            setTotal(total - 1);
        }
    };

    const handleAddToCart = () => {
        addToCart({ ...product, quantity: total });
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <>
                {"★".repeat(fullStars)}
                {halfStar && "☆"}
                {"☆".repeat(emptyStars)}
            </>
        );
    };

    const icons = ["bx bxl-facebook", "bx bxl-twitter", "bx bxl-instagram"];

    return (
        <div className="w-[30rem]">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-gray-700 mb-4">{product.price}</p>
            <div className="flex items-center mb-4">
                <span className="text-yellow-500">
                    {renderStars(product.rating)}
                </span>
                <span className="ml-2 text-gray-500">
                    ({product.reviews} Customer Reviews)
                </span>
            </div>
            <p className="text-gray-600 mb-8">{product.description}</p>
            <div className="flex items-center gap-5 mb-4">
                <div className="px-4 py-2 border-gray-300 border-solid border-[2px] rounded-lg flex justify-center items-center gap-4">
                    <button onClick={decrement}>-</button>
                    <div>{total}</div>
                    <button onClick={increment}>+</button>
                </div>
                <button
                    className="px-4 py-2 border-black border-solid border-[2px] rounded-lg"
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>
            </div>
            <div className="w-full border-b-gray-200 border-[1px] my-10"></div>
            <div className="space-y-2 font-thin">
                <List list={"SKU"}>{product.sku}</List>
                <List list={"Category"}>{product.category}</List>
                <List list={"Tags"}>{product.tags.join(", ")}</List>
                <List list={"Share"}>
                    {icons.map((icon, index) => (
                        <button key={index} className="mr-2 text-xl text-black">
                            <i className={icon} />
                        </button>
                    ))}
                </List>
            </div>
        </div>
    );
};

export default ProductInfo;
