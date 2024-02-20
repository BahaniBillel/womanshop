import React from "react";
import MasterCard from "@/public/images/mastercard.png";
import VisaCard from "@/public/images/visa.png";
import Paypal from "@/public/images/paypal.png";
import Paysera from "@/public/images/paysera.png";
import Image from "next/image";

function Payment() {
  return (
    <div className="px-5">
      <div
        className="flex flex-col  space-y-4 rounded-3xl 
         max-h-fit px-4 mx-auto max-w-lg  shadow-lg place-items-center p-8"
      >
        <p className="font-semibold text-lg ">Payment</p>
        <p className="text-center">
          The following payment providers are supported.
        </p>
        <div className="grid grid-cols-4 place-items-center gap-5">
          <Image src={MasterCard} alt="mastercard" width={50} />
          <Image src={VisaCard} alt="mastercard" width={50} />
          <Image src={Paypal} alt="mastercard" width={50} />
          <Image src={Paysera} alt="mastercard" width={50} />
        </div>
      </div>
    </div>
  );
}

export default Payment;
