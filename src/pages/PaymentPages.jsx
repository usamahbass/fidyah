import { useTotalPayable } from "@fidyah/hooks/useTotalPayable";
import { Navigate } from "react-router-dom";
import PaymentManual from "@fidyah/containers/payment/PaymentManual";

const PaymentPages = () => {
  const totalPayable = useTotalPayable();

  if (totalPayable === 0) {
    return <Navigate to="/" />;
  }

  return <PaymentManual />;
};

export default PaymentPages;
