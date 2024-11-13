// Basket.js

import Payment from "@/components/payment/Payment";
import Button from "@/components/knapper/button";

const Basket = ({ basketItems }) => {
  return (
    <div className="sticky top-5 right-0 border border-gray-200 rounded-lg shadow-lg p-4">
      <Payment basketItems={basketItems} />
      <Button text="Gå til kurv" />
    </div>
  );
};

export default Basket;
