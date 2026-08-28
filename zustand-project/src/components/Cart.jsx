import React from 'react'
import {useCartStore} from "../store/cartStore.js";

const Cart = () => {
    const { cart, removeFromCart, clearCart} = useCartStore((state) => ({
        cart: state.cart,
        removeFromCart: state.removeFromCart,
        clearCart: state.clearCart,
    }));

    return (
        <div className="bg-white rounded-2xl shadow-md p-6 sticky top-8">
            <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-4 mb-4">
                Tu Carrito ({cart.length})
            </h2>

            {cart.length === 0 ? (
                <p className="text-gray-500 text-center italic mt-6">El carrito está vacío.</p>
            ) : (
                <div className="flex flex-col gap-3">
                    {cart.map((product) => (
                        <div
                            key={product.id}
                            className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100"
                        >
                            <span className="font-medium text-gray-700 truncate mr-2">
                                {product.name}
                            </span>
                            <button
                                onClick={() => removeFromCart(product.id)}
                                className="text-sm text-red-500 hover:text-red-700 hover:bg-red-50 font-semibold px-2 py-1 rounded transition-colors"
                            >
                                Quitar
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {cart.length > 0 && (
                <button
                    onClick={clearCart}
                    className="w-full mt-6 bg-red-100 text-red-600 hover:bg-red-200 font-bold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                    Vaciar Carrito
                </button>
            )}
        </div>
    );
};

export default Cart;