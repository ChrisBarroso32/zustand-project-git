import { useState } from 'react'
import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'
import { PRODUCTS } from './products'

const App = () => {
    const [cart, setCart] = useState([])

    return (
        <div className="App">
            <h3>¡Bienvenido a la tienda virtual de carros!</h3>
            <ProductList products={PRODUCTS} setCart={setCart} />
            <Cart setCart={setCart} cart={cart} />
        </div>
    )
}
export default App;
