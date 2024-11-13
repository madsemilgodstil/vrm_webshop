// context/BasketContext.js
import { createContext, useState, useEffect } from "react";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);

  // If you want to persist basket items in localStorage
  useEffect(() => {
    // Check if window is defined to avoid SSR issues
    if (typeof window !== "undefined") {
      const storedItems = localStorage.getItem("basketItems");
      if (storedItems) {
        setBasketItems(JSON.parse(storedItems));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("basketItems", JSON.stringify(basketItems));
    }
  }, [basketItems]);

  const addItemToBasket = (item) => {
    setBasketItems((prevItems) => [...prevItems, item]);
  };

  const removeItemFromBasket = (itemId) => {
    setBasketItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  return (
    <BasketContext.Provider
      value={{ basketItems, addItemToBasket, removeItemFromBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContext;
