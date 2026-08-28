import Cart from "./components/Cart.jsx";
import ProductList from "./components/ProductList.jsx";
import { PRODUCTS } from './products.js'

const App = () => {
    return (
        <div className="min-h-screen bg-gray-800 p-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-center text-gray-300 mb-10 tracking-tight">
                    Catálogo de Carros
                </h1>

                <div className="flex flex-col lg:flex-row gap-8">

                    <div className="w-full lg:w-3/4">
                        <ProductList products={PRODUCTS}/>
                    </div>

                    <div className="w-full lg:w-1/4">
                        <Cart/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default App;