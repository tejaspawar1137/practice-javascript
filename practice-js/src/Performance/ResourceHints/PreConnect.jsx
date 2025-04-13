import { useEffect } from "react";

const preconnectDomains = (domains) => {
  domains.forEach((domain) => {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = domain;
    document.head.appendChild(link);
  });
};

const PaymentPage = () => {
  useEffect(() => {
    preconnectDomains([
      "https://api.stripe.com",
      "https://fonts.googleapis.com",
    ]);
  }, []);

  return <div>Proceed to Payment</div>;
};

export default PaymentPage;
