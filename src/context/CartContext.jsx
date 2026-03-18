import { createContext, useState , useEffect} from "react";
import React from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    // Load cart from LocalStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ADD PRODUCT
  const addToCart = (product, size, qty) => {

    setCart((prev) => {
    const exist = prev.find(
      (item) => item.id === product.id && item.size === size
    );

    if (exist) {
      return prev.map((item) =>
        item.id === product.id && item.size === size
          ? { ...item, qty: item.qty + qty }
          : item
      );
    }

    return [...prev, { ...product, size, qty }];
  });
};

  // REMOVE PRODUCT
  const removeFromCart = (id, size) => {
    setCart(cart.filter(item => !(item.id === id && item.size === size)));
  };

  // INCREASE
  const increaseQty = (id, size) => {
    setCart(cart.map(item =>
      item.id === id && item.size === size
        ? { ...item, qty: item.qty + 1 }
        : item
    ));
  };

  // DECREASE
  const decreaseQty = (id, size) => {
    setCart(cart.map(item =>
      item.id === id && item.size === size
        ? { ...item, qty: item.qty - 1 }
        : item
    ).filter(item => item.qty > 0));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increaseQty, decreaseQty }}
    >
      {children}
    </CartContext.Provider>
  );
};