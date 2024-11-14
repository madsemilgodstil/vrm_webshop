"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartData = searchParams.get("cart");

    if (cartData) {
      const items = JSON.parse(cartData); // Parse JSON-strengen direkte
      setCartItems(items); // Opdater `cartItems` state med indholdet
    }
  }, [searchParams]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Betaling</h1>
      {cartItems.length > 0 ? (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div key={index} className="product flex items-center justify-between border-b pb-2">
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <img src={item.thumbnail} alt={item.title} width="50" />
                <p>Antal: {item.quantity}</p>
                <p>Pris per stk.: ${item.price}</p>
              </div>
              <p>Subtotal: ${item.price * item.quantity}</p>
            </div>
          ))}
          <p className="text-lg font-bold mt-4">I alt at betale: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
        </div>
      ) : (
        <p className="text-center">Ingen varer i kurven.</p>
      )}
    </div>
  );
}
