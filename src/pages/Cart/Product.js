import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const Product = () => {
    const { addToCart } = useContext(CartContext);
    const products = [
        { id: 1, name: "Asgaard sofa", price: 250000, image: "path_to_image1" },
        // Tambahkan produk lainnya di sini
    ];

    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = (product) => {
        addToCart({ ...product, quantity });
    };

    return (
        <div className="product-list">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="product border p-4 rounded mb-4"
                >
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p>Rs. {product.price}</p>
                    <div className="flex items-center mt-2">
                        <button
                            onClick={() => setQuantity(quantity - 1)}
                            disabled={quantity <= 1}
                            className="px-2 py-1 bg-gray-200 rounded"
                        >
                            -
                        </button>
                        <span className="mx-2">{quantity}</span>
                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="px-2 py-1 bg-gray-200 rounded"
                        >
                            +
                        </button>
                    </div>
                    <button
                        onClick={() => handleAddToCart(product)}
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Product;
