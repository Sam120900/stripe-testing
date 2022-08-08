import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51LS7BjLSxOnT2C7i9BIgmIljRLwGnWZNYJA9sDHOoAmcuSPqzeB7YhKGYFTjEuTGMBLAc4S36HIf7OPZpvznB5ba00upZRYvgZ";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;