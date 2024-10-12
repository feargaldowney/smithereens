import React, {useState} from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

const CARD_OPTIONS = {
    icon_style: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, OpenSans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialised",
            ":-webkit-autofill": {color: '#fce883' },
            "::placeholder": {color: "#87bbfd" }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}

function PaymentForm() {
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        });

    if (!error) {
        try {
            const {id} = paymentMethod;
            const response = await axios.post("http://localhost:5000/payment", {
                amount: 1000, // in cents
                id

            });

            if (response.data.success) {
                console.log("Successful payment");
                setSuccess(true);
            }
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log(error.message);
    }
}

  return (
    <>
        {!success ?
        <form onSubmit={handleSubmit}>
            <fieldset className='FormGroup'>
                <div className='FormRow'>
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button>Pay</button>
        </form>
        :
        <div>
            <h2>Thank you for your support</h2>
            <p>Your ticket has been sent to your email address</p>
        </div>
    }
    </>
  )
}

export default PaymentForm