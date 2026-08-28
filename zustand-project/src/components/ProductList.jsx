import React from 'react'
import {useCartStore} from "../store/cartStore.js";

const ProductList = ({products}) => {
    const addToCart = useCartStore((state) => state.addToCart);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {products?.map((product) => (
                <div
                    key={product.id}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 p-6 flex flex-col justify-between"
                >
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            {product.description}
                        </p>
                    </div>
                    <button
                        onClick={() => addToCart(product)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200"
                    >
                        Agregar al carrito
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;