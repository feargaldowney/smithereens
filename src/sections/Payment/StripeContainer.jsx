import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
import React from 'react'

const PUBLIC_KEY = "pk_test_51Q8KVWGdgIHDv6qP5Vd71iSnJe4G53EwLcgspG8jYs0xPVO8D7l3ulazH8aiE5jfHuqEVH5kaY9uVH3sg08EPvpy000NOFN5S8";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
        <PaymentForm />
    </Elements>
  );
}

export default StripeContainer