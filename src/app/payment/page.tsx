import { TPaymentPageProps } from "@/core/types/props";
import PaymentPage from "@/components/templates/payment";

function Payment({ searchParams }:TPaymentPageProps) {
  return <PaymentPage searchParams={searchParams} />;
}

export default Payment;
