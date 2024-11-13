import Payment from "@/components/payment/Payment";
import ButtonPri from "@/components/knapper/ButtonPri";

export default function PaymentPage() {
  return (
    <div className="max-w-[700px] mx-auto my-10">
      <Payment />
      <ButtonPri text="Betal her" />
    </div>
  );
}
