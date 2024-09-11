import React, { createContext, useState, useContext } from 'react';

// Create the CartContext with an empty array as the default value
const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
   
    // Function to add a product to the cart
    const addToCart = (product) => {
        setCart((prevCart) => {
          const existingProduct = prevCart.find(item => item.id === product.id);
          if (existingProduct) {
            // If the product already exists, don't add it again or update its quantity
            return prevCart;
          }
          // If product doesn't exist, add it with an initial quantity of 1
          return [...prevCart, { ...product, quantity: 1 }];
        });
      };

    // Function to remove a product from the cart
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(product => product.id !== productId));
    };
  
    // Function to get the total number of items in the cart
    const cartItemCount = () => {
        return cart.reduce((count, item) => count + item.quantity, 0);
    };

    // Increment the quantity of a product
    const increaseQuantity = (id) => {
        setCart((prevCart) => 
            prevCart.map((item) => 
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Decrement the quantity of a product
    const decreaseQuantity = (id) => {
        setCart((prevCart) => 
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity:item.quantity - 1 } : item
            ).filter(item => item.quantity > 0) // Remove item if quantity becomes 0
        );
    };

    return (
        <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity, addToCart, removeFromCart, cartItemCount, setCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook for easy access to the CartContext
export const useCart = () => useContext(CartContext);
