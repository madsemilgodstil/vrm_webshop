"use client";

import { useState } from "react";
import ProductList from "@/components/productlist/ProductList";
import Basket from "@/components/basket/Basket";

export default function Home() {
  const [items, setItems] = useState([]);

  const addToBasket = (product) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // Opdater mængden, hvis produktet allerede er i kurven
        return prevItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      } else {
        // Tilføj produktet med quantity: 1, hvis det ikke er i kurven
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="main grid grid-cols-[70%_30%] gap-6">
      <ProductList addToBasket={addToBasket} />
      <div className="basket-wrapper">
        <Basket items={items} />
      </div>
    </div>
  );
}
