import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);

const addToCart = (item) => {
  console.log("Item received in CartContext:", item);
  setCartItems((prev) => [...prev, item]);
};

  const clearCart = () => {
    setCartItems([]);
  };

  const createOrder = (orderData) => {
    setOrders((prev) => [...prev, orderData]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        clearCart,
        orders,
        createOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}