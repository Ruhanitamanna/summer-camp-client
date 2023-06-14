import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { Fade } from "react-awesome-reveal";
import CheckoutForm from "./CheckoutForm";
import useClass from "../../hooks/useClass";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const [item] = useClass();
  const price = item.price;

  console.log(price);
  return (
    <div className="my-10">
      <div className="text-center m-4 p-4 bg-blue-200">
        <Fade>
          <h1 className="text-4xl uppercase font-semibold">payment</h1>
        </Fade>
      </div>
      <div className="divider"></div>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
