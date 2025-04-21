import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const { name, email, phone, payment_method, card_digits, invoice_num, order_date, refund_reason, message, IP, currentdate, pageUrl } = await request.json();
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "leads@infinityanimations.com",
                pass: "3%yKAgBEbR436eM",
            },
        })
        const mailOptions = {
            from: "leads@infinityanimations.com",
            to: ['queries@infinityanimations.com', 'info@infinityanimations.com', 'ppc@infinityanimations.com', 'rafael@infinityanimations.com', 'travis.king@infinityanimations.com', 'chris@infinityanimations.com', 'nick@infinityanimations.com'],
            subject: `Refund Request Submitted - Infinity Animations`,
            html: `<div style="width:100%;height:100%;padding:1rem;background-color: #efefef;">
                <div style="display:flex; align-items: center;">
                    <h4>Currentdate : ${currentdate}</h4>
                </div>
                <div style="display:flex; align-items: center;">
                    <h4>IP : ${IP}</h4>
                </div>
                <div style="display:flex; align-items: center;">
                    <h4>pageUrl : ${pageUrl}</h4>
                </div>
                <div style="display:flex; align-items: center;">
                    <h4>Name : ${name}</h4>
                </div>
                <div style="display:flex; align-items: center;">
                    <h4>Email : ${email}</h4>
                </div>
                <div style="display:flex; align-items: center;">
                    <h4>Phone : ${phone}</h4>
                </div>
                <div style="display:flex; align-items: center;">
                    <h4>Payment Method : ${payment_method}</h4>
                </div>
                <div style="display:flex; align-items: center;">
                    <h4>Card Digits : ${card_digits}</h4>
                </div>
                <div style="display:flex; align-items: center;">
                    <h4>Invoice Number : ${invoice_num}</h4>
                </div>
                <div style="display:flex; align-items: center;">
                    <h4>Order Date : ${order_date}</h4>
                </div>
                <div style="display:flex; align-items: center;">
                    <h4>Refund Reason : ${refund_reason}</h4>
                </div>
                <div style="display:flex; align-items: center;">
                    <h4>Message : ${message}</h4>
                </div>
            </div>`
        };
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ "mesaage": "Email sent successfully", "status": 200 });
    } catch (error) {
        return NextResponse.json({ "mesaage": "Failed to sent Email", "status": 500 });
    }
}