import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { IoMdArrowRoundBack } from "react-icons/io";

import "./payment.css";
import { useSelector } from "react-redux";

const Checkout = () => {

    let webinarItem = useSelector((state) => state.webinar.webinar);
    let accountType = useSelector((state) => state.webinar.account_type);
    let userInfo = useSelector((state) => state.webinar.info);

    // console.log("webinarItem", webinarItem);
    // console.log("accountType", accountType);
    // console.log("userInfo", userInfo);

    const [clientSecret, setClientSecret] = useState("");
    let public_key = import.meta.env.VITE_STRIPE_PK;

    // console.log("public_key", public_key);
    const stripePromise = loadStripe(public_key);


    useEffect(() => {
        handelWebinarOverview();

        if (!accountType) {
            window.history.back();
        }
        // Create PaymentIntent as soon as the page loads
        fetch("http://52.52.171.224:8000/api/v1/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price : handelPrice(webinarItem, accountType) }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret))
            .catch(error => console.log(error))
    }, []);

    function handelWebinarOverview() {
        let divElement = document.getElementById("webinar_overview");
        if (divElement) {
            divElement.innerHTML = webinarItem?.description;
        }
    }
    // name, email, institution, address, graduation_year, phone, zoom_link, date, time, payment_status, id_card

    // console.log("stripePromise", stripePromise);
    const appearance = {
        theme: 'stripe',
    };

    const options = {
        clientSecret,
        appearance,
    };

    const handelPrice = (item, type) => {
        if (type === 'student') {
            return item?.price_student;
        }
        if (type === 'user') {
            return item?.price_user;
        }
    }

    const handelUserInfo = (item, type) => {
        if (type === 'student') {
            return item?.student
        }
        if (type === 'user') {
            return item?.user;
        }
        if (type === 'patreon') {
            return item?.patreon;
        }
    }

    return (
        <div className="grid lg:grid-cols-2 min-h-lvh">
            <div className="p-10">
                <div className="">
                    <div onClick={() => window.history.back()} className="h-[30px] w-[30px] bg-[#bebbbb3d] hover:bg-slate-300 rounded-full flex items-center justify-center cursor-pointer">
                        <IoMdArrowRoundBack className="text-[20px]" />
                    </div>
                    <div className="flex items-center justify-center my-5">
                        <img className="w-[250px]" src={webinarItem?.webinar_banner} alt="" />
                        {/* <img className="w-[250px]" src={`http://52.52.171.224:8000/${webinarItem?.webinar_banner}`} alt="" /> */}
                    </div>
                    <h1 className="text-[22px] font-semibold">{webinarItem?.title}</h1>
                    <div className="mt-4">
                        <p className="text-[18px]">Webinar ticket price <span className="text-[20px] font-semibold" >£ {handelPrice(webinarItem, accountType)}</span></p>

                        <p className="text-[18px]">Webinar Date/Time : {handelUserInfo(userInfo, accountType)?.date} , {handelUserInfo(userInfo, accountType)?.time}.</p>
                    </div>

                    <p className="text-[26px] font-bold my-5">Overview</p>
                    <div id="webinar_overview"></div>

                </div>
            </div>
            <div className="px-10 pt-[170px]">
                {clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm type={accountType} data={{ ...handelUserInfo(userInfo, accountType), price: handelPrice(webinarItem, accountType) }} title={webinarItem?.title} />
                    </Elements>
                )}

                <div className="mt-[50px]">
                    <div className="flex items-center justify-center">
                        <img src={webinarItem?.facilitator_image} alt="" />
                        {/* <img src={`http://52.52.171.224:8000/${webinarItem?.facilitator_image}`} alt="" /> */}
                    </div>

                    <div className="p-10">
                        <h5 className='text-[15px] font-semibold my-5'>{webinarItem?.facilitator_title}</h5>

                        <p className='text-[14px]'>
                            {webinarItem?.facilitator_description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout