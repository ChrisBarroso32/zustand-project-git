import { useState } from 'react'
import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'
import { PRODUCTS } from './products'

const App = () => {
    const [cart, setCart] = useState([])

    return (
        <div className="min-h-screen bg-gray-100 p-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10 tracking-tight">
                    Catálogo de Carros
                </h1>
                <div className="flex flex-col lg:flex-row gap-8">

                    <div className="w-full lg:w-3/4">
                        <ProductList products={PRODUCTS} setCart={setCart} />
                    </div>

                    <div className="w-full lg:w-1/4">
                        <Cart setCart={setCart} cart={cart} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default App;