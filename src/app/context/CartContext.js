"use client";

import React, { useState, createContext } from "react";

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: (
    productId
  ) => {},
  clearCart: () => {},
});

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(
        cart.filter((item) => {
            return item.product.id !== productId;
        })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
};