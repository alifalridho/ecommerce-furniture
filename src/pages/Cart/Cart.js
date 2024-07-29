import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Product from "./Product";

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);

    return (
        <div className="fixed right-0 top-0 w-72 bg-white shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                <ul className="space-y-4">
                    {cart.map((item) => (
                        <li key={item.id} className="flex items-center">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-auto mr-4"
                            />
                            <div className="flex-1">
                                <p>{item.name}</p>
                                <p>
                                    {item.quantity} x Rs. {item.price}
                                </p>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            {cart.length > 0 && (
                <div className="mt-4">
                    <p>
                        Subtotal: Rs.{" "}
                        {cart.reduce(
                            (total, item) => total + item.price * item.quantity,
                            0
                        )}
                    </p>
                    <button
                        onClick={clearCart}
                        className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                    >
                        Clear Cart
                    </button>
                    <button className="mt-2 ml-2 px-4 py-2 bg-green-500 text-white rounded">
                        Checkout
                    </button>
                </div>
            )}
            <div className="mt-8">
                <Product />
            </div>
        </div>
    );
};

export default Cart;
