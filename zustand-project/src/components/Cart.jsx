import React from 'react'

const Cart = ({ cart, setCart }) => {
    return (
        <div>
            <h2>Carros</h2>
            {cart.map((product) => (
                <div key={product.id}>
                    <span>{product.name}</span>
                    <button
                        onClick={() =>
                            setCart(
                                cart.filter((productItem) => productItem.id !== product.id)
                        )
                    }
                    >
                        Quitar
                    </button>
                </div>
            ))}
            {cart.length > 0 && (
                <button onClick={() => setCart([])}>Borrar Carro</button>
            )}
        </div>
    );
};

export default Cart;