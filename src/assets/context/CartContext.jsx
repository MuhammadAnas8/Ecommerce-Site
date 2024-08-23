import { createContext } from "react";

const CartContext = createContext();
const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart([...cart, product])        
    }

    const removeFromCart = () => {
        console.log('Removed from cart')    
    }
    return(
        <CartContext.Provider value={{}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext