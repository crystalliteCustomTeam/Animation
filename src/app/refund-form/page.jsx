"use client"
import React, { useEffect, useState } from 'react'
import Axios from "axios";
import { usePathname } from "next/navigation"


const Page = () => {
    //========== Form
    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [errors, setErrors] = useState({});
    const [formStatus, setFormStatus] = useState('Submit');
    const [isDisabled, setIsDisabled] = useState(false);
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        payment_method: "",
        card_digits: "",
        invoice_num: "",
        order_date: "",
        refund_reason: ""
    });

    //========== Fetch IP data from the API
    const getIPData = async () => {
        try {
            const res = await Axios.get('https://ipwho.is/');
            setIP(res.data);
        } catch (error) {
            console.error('Error fetching IP data:', error);
        }
    };

    useEffect(() => {
        getIPData();
        setPagenewurl(window.location.href);
    }, []);

    const router = usePathname();
    const currentRoute = router;

    const handleDataChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const formValidateHandle = () => {
        let errors = {};
        if (!data.name.trim()) {
            errors.name = "Name is required";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email.match(emailRegex)) {
            errors.email = "Valid email is required";
        }
        const phoneRegex = /^[0-9]+$/;
        if (!data.phone.match(phoneRegex)) {
            errors.phone = "Valid phone number is required";
        }
        const cardRegex = /^\d{4}$/;
        if (!data.card_digits.match(cardRegex)) {
            errors.card_digits = "Valid card number is required";
        }
        if (!data.payment_method.trim()) {
            errors.payment_method = "Payment Method is required";
        }
        if (!data.invoice_num.trim()) {
            errors.invoice_num = "Invoice Num is required";
        }
        if (!data.order_date.trim()) {
            errors.order_date = "Order Date is required";
        }
        if (!data.refund_reason.trim()) {
            errors.refund_reason = "Refund Reason is required";
        }
        return errors;
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("Processing...");
        setIsDisabled(true);

        const errors = formValidateHandle();
        setErrors(errors);
        console.log(errors)
        console.log(data)


        if (Object.keys(errors).length === 0) {
            const currentdate = new Date().toLocaleString();
            const dataToSend = {
                ...data,
                pageUrl: pagenewurl,
                IP: `${ip.ip} - ${ip.country} - ${ip.city}`,
                currentdate: currentdate,
            };
            const JSONdata = JSON.stringify(dataToSend);

            try {
                //========== First API call to your server
                await fetch('/api/refund/', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSONdata
                });
                setTimeout(() => {
                    window.location.href = '/thank-you';
                }, 2000);
            } catch (error) {
                console.error('Error during form submission:', error);
                setFormStatus("Failed...");
                setIsDisabled(false);
            }

            console.log(dataToSend)

        } else {
            setFormStatus("Failed...");
            setIsDisabled(false);
        }
    };

    return (
        <>
            <section className='relative xl:pt-[130px] lg:pt-[100px] md:pt-[80px] py-[40px] bg-black font-sans '>
                <div className="container">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                        <div className="text-white">
                            <h1 className="text-3xl font-bold mb-6">Refund Policy for Infinity Animations</h1>
                            <p className="border-b pb-4 text-justify">Infinity Animations, aims to provide excellent service and ensure customer satisfaction. Our refund and cancellation policies are designed to protect both our clients and our company. Please read through the following policy to understand how refund requests are handled.</p>
                            <div className="text-xl font-semibold mb-2 mt-4">General Refund Policy:</div>
                            <ul className="list-none mb-4">
                                <li className="mb-2 text-justify"><strong className="text-secondary-100">Cancellation: </strong>You are eligible for a full refund (less a 10% processing fee) if the order is canceled within 24 hours of order placement. Refunds are not applicable if initial content or designs are delivered or revisions are requested within this timeframe.</li>
                                <li className="mb-2 text-justify"><strong className="text-secondary-100">Order Inactivity: </strong>No refund will be issued if there is no activity on the order for 30 days after the order is placed. To reactivate the project, you will need to pay a fee depending on the project scope.</li><li className="mb-2 text-justify"><strong className="text-secondary-100">Final Deliverables: </strong>Refund requests will not be entertained after final files have been delivered.</li>
                                <li className="mb-2 text-justify"><strong className="text-secondary-100">Refund Reasons: </strong>Refund requests must be based on valid reasons, such as non-compliance with the brief or inadequate revisions. No refunds will be issued for change of mind or if the content meets the agreed-upon requirements.</li>
                                <li className="mb-2 text-justify"><strong className="text-secondary-100">Good Faith: </strong>If you have placed the same content order with multiple agencies to claim a refund, this will be considered a breach of good faith, and the refund request may be denied.</li>
                                <li><strong className="text-secondary-100">Customer Feedback: </strong>Clients are expected to provide timely feedback to ensure the completion of the project. Lack of feedback may affect the project delivery and refund eligibility.</li>
                            </ul>
                            <p><i>*** Fill out the refund form or email it to <a href="mailto:finance@infinityanimations.com" className="text-secondary-100">finance@infinityanimations.com</a>. ***</i></p>
                        </div>
                        <div>
                            <div className="form">
                                <form className=''>
                                    <div>
                                        <input type="text" name="name" placeholder='Name' className='text-[14px] text-black placeholder:text-black montserrat py-[10px] px-[20px] w-full mb-[16px] font-[500]' onChange={handleDataChange} />
                                        {errors.name && (
                                            <span className="text-[14px] block p-2 text-red-500">
                                                {errors.name}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <input type="email" name="email" placeholder='Email' className='text-[14px] text-black placeholder:text-black montserrat py-[10px] px-[20px] w-full mb-[16px] font-[500]' onChange={handleDataChange} />
                                        {errors.email && (
                                            <span className="text-[14px] block p-2 text-red-500">
                                                {errors.email}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <input type="phone" name="phone" minLength={7} maxLength={15} placeholder='Phone' className='text-[14px] text-black placeholder:text-black montserrat py-[10px] px-[20px] w-full mb-[16px] font-[500]' onChange={handleDataChange} />
                                        {errors.phone && (
                                            <span className="text-[14px] block p-2 text-red-500">
                                                {errors.phone}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <select name="payment_method" id="payment_method" className="text-[14px] text-black placeholder:text-black montserrat py-[10px] px-[20px] w-full mb-[16px] font-[500] appearance-none" onChange={handleDataChange} defaultValue="Payment Method">
                                            <option value="Payment Method" disabled>Payment Method</option>
                                            <option value="Card">Card</option>
                                            <option value="Cheque">Cheque</option>
                                            <option value="Wire">Wire</option>
                                        </select>
                                        {errors.payment_method && (
                                            <span className="text-[14px] block p-2 text-red-500">
                                                {errors.payment_method}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <input type="phone" name="card_digits" minLength={4} maxLength={4} placeholder='Last 4 Card Digits' className='text-[14px] text-black placeholder:text-black montserrat py-[10px] px-[20px] w-full mb-[16px] font-[500]' onChange={handleDataChange} />
                                        {errors.card_digits && (
                                            <span className="text-[14px] block p-2 text-red-500">
                                                {errors.card_digits}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <input type="text" name="invoice_num" placeholder='Invoice Number' className='text-[14px] text-black placeholder:text-black montserrat py-[10px] px-[20px] w-full mb-[16px] font-[500]' onChange={handleDataChange} />
                                        {errors.invoice_num && (
                                            <span className="text-[14px] block p-2 text-red-500">
                                                {errors.invoice_num}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <input type="date" name="order_date" placeholder='Invoice Number' className='text-[14px] text-black placeholder:text-black montserrat py-[10px] px-[20px] w-full mb-[16px] font-[500]' onChange={handleDataChange} />
                                        {errors.order_date && (
                                            <span className="text-[14px] block p-2 text-red-500">
                                                {errors.order_date}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <select name="refund_reason" id="refund_reason" className="text-[14px] text-black placeholder:text-black montserrat py-[10px] px-[20px] w-full mb-[16px] font-[500] appearance-none" onChange={handleDataChange} defaultValue="Refund Reason">
                                            <option value="Refund Reason" disabled>Refund Reason</option>
                                            <option value="Pre-delivery refund">Pre-delivery refund</option>
                                            <option value="Post-delivery refund">Post-delivery refund</option>
                                            <option value="Inactivity">Inactivity</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        {errors.refund_reason && (
                                            <span className="text-[14px] block p-2 text-red-500">
                                                {errors.refund_reason}
                                            </span>
                                        )}
                                    </div>
                                    <div className="col-span-2">
                                        <textarea name='message' placeholder='Message' className='text-[14px] text-black placeholder:text-black montserrat py-[10px] px-[20px] w-full mb-[10px] font-[500] resize-none' onChange={handleDataChange}></textarea>
                                    </div>
                                    <div className="btn mt-3">
                                        <button type='submit' className='py-[10px] px-[30px] border-0 text-white text-[16px] uppercase font-[600] bg-[#231f20] poppins' onClick={handleFormSubmit} disabled={isDisabled}>
                                            {formStatus}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="text-white text-center max-w-[750px] mx-auto mt-10">
                        <div class="text-2xl font-semibold mb-2 mt-4">Contact Us</div>
                        <p class="mb-4">For any inquiries or concerns regarding the Refund Policy, please feel free to reach out to our customer support team. We are here to assist you and ensure your satisfaction with our services.</p>
                        <ul>
                            <li>
                                <strong class="text-secondary-100">Email: </strong>
                                <a href="mailto:finance@infinityanimations.com">finance@infinityanimations.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page