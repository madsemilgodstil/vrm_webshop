import Payment from "@/components/payment/Payment";
import Button from "@/components/knapper/button";

const Basket = () => {
  return (
    <div className="sticky top-5 right-0 border border-gray-200 rounded-lg shadow-lg p-4">
      <Payment />
      <Button text="Gå til kurv" />
    </div>
  );
};

export default Basket;
