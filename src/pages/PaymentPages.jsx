import { useTotalPayable } from "@fidyah/hooks/useTotalPayable";
import { Navigate } from "react-router-dom";
import PaymentManual from "@fidyah/containers/payment/PaymentManual";
import { rupiahToInt } from "@fidyah/utils/helpers";

const PaymentPages = () => {
  const totalPayable = useTotalPayable();

  if (rupiahToInt(totalPayable) === 0) {
    return <Navigate to="/" />;
  }

  return <PaymentManual />;
};

export default PaymentPages;
