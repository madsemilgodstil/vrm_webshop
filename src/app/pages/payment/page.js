import Payment from "@/components/payment/Payment";
import Button from "@/components/knapper/button";

export default function PaymentPage() {
  return (
    <div className="max-w-[700px] mx-auto my-10">
      <Payment />
      <Button text="Betal her" />
    </div>
  );
}
