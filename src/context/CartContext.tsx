import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext({
  cart: [],
  addToCart: (item) => {},
  removeFromCart: (id) => {},
  clearCart: () => {}
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load from localStorage once
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      try {
        setCart(JSON.parse(saved));
      } catch {
        setCart([]);
      }
    }
  }, []);

  // Save to localStorage when cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    if (!product || !product.id) {
      console.error("Attempted to add invalid product:", product);
      return;
    }
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
