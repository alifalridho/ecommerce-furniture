import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartSidebar = ({ isOpen, onClose }) => {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);

    if (!isOpen) return null;

    return (
        <div className="fixed right-0 top-0 w-80 bg-white shadow-lg p-6 h-[30rem] z-50 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Shopping Cart</h2>
                <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700"
                >
                    <span className="material-icons">close</span>
                </button>
            </div>
            {cart.length === 0 ? (
                <p className="text-gray-500">No items in cart.</p>
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
                                <p className="text-gray-700">{item.name}</p>
                                <p className="text-gray-500">
                                    {item.quantity} x Rs. {item.price}
                                </p>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:text-red-700"
                            >
                                <span className="material-icons">delete</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            {cart.length > 0 && (
                <div className="mt-6">
                    <p className="text-gray-700 text-lg">
                        Subtotal: Rs.{" "}
                        {cart.reduce(
                            (total, item) => total + item.price * item.quantity,
                            0
                        )}
                    </p>
                    <div className="flex mt-4">
                        <button
                            onClick={clearCart}
                            className="w-full mr-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Clear Cart
                        </button>
                        <button className="w-full ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartSidebar;
