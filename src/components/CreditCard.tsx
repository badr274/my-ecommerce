import React from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

interface CreditCardWrapperProps {
  creditNumber: string;
  expiry: string;
  cvc: string;
  holderName: string;
  focused?: "number" | "name" | "expiry" | "cvc";
}

export const CreditCardWrapper: React.FC<CreditCardWrapperProps> = ({
  creditNumber,
  expiry,
  cvc,
  holderName,
  focused,
}) => {
  return (
    <div className="credit-card-wrapper">
      <Cards
        number={creditNumber}
        expiry={expiry}
        cvc={cvc}
        name={holderName}
        focused={focused}
      />
    </div>
  );
};
