import React, { useEffect, useState } from "react";
import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import { EmailSender, GeneralUserRegister, StudentRegister } from "../../utils/apiRequest";
import toast from "react-hot-toast";

const CheckoutForm = ({ type, data, title }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            console.log("paymentIntent.status", paymentIntent.status);
            switch (paymentIntent.status) {
                case "succeeded":
                    // setMessage("Payment succeeded!");
                    toast.success("Payment succeeded!");

                    break;
                case "processing":
                    toast.loading("Your payment is processing.")
                    // setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    toast.error("Your payment was not successful, please try again.");
                    // setMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    toast.error("Your payment was not successful, please try again.")
                    // setMessage("Something went wrong.");
                    break;
            }
        });
    }, [stripe]);

    // Custom function to handle actions after successful payment
    const handleSuccessfulPayment = async () => {
        console.log("call xxxxxxxx");
        if (type === "student") {
            let res = await StudentRegister({ ...data, payment_status: "success" });
            if (res) {
                toast.success("Registrations successful!");
                await EmailSender(data.email, title, data.date, data.time, "https://zoom.us/");
            }
        } else if (type === "user") {
            await GeneralUserRegister(data);
        } else if (type === "patreon") {
            // Handle patreon specific logic here
        }
        // Add any other actions you want to perform here
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setIsLoading(true);

        const {error, paymentIntent} = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: window.history.back(),
            },
        });

        console.log("xxxxxxxxxxx", paymentIntent);

        if (error) {
            if (error.type === "card_error" || error.type === "validation_error") {
                setMessage(error.message);
            } else {
                setMessage("An unexpected error occurred.");
            }
        }

        setIsLoading(false);
        await handleSuccessfulPayment();
    };

    const paymentElementOptions = {
        layout: "tabs"
    }

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <PaymentElement id="payment-element" options={paymentElementOptions} />
            <button disabled={isLoading || !stripe || !elements} id="submit">
                <span id="button-text">
                    {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                </span>
            </button>
            {/* Show any error or success messages */}
            {message && <div id="payment-message">{message}</div>}
        </form>
    );
}

export default CheckoutForm;
