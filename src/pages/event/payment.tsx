import React from "react";
import {message} from "antd";

interface PaymentRequest {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    orderId: string;
    items: string;
    currency: string;
    amount: number;
    hash?: string;
}

const PayHerePaymentForm: React.FC = () => {
    const handlePayment = async () => {
        try {
            // Sample payment data
            const paymentRequest: PaymentRequest = {
                firstName: "John",
                lastName: "Doe",
                email: "johndoe@example.com",
                phone: "0771234567",
                address: "No.1, Main Street",
                city: "Colombo",
                country: "Sri Lanka",
                orderId: "ORD12345",
                items: "Sample Items",
                currency: "LKR",
                amount: 1000,
            };

            const token = localStorage.getItem("authToken");

            if (!token) {
                message.error("No token found, please log in.");
                return;
            }

            // Call the backend API to initiate the payment and get the hash
            const response = await fetch("http://localhost:8080/admin/payments/initiate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(paymentRequest),
            });

            if (!response.ok) {
                throw new Error("Failed to initiate payment");
            }

            const data: PaymentRequest = await response.json();

            // Dynamically create a form and submit it to PayHere
            const form = document.createElement("form");
            form.method = "post";
            form.action = "https://sandbox.payhere.lk/pay/checkout";

            const addField = (name: string, value: string | number) => {
                const input = document.createElement("input");
                input.type = "hidden";
                input.name = name;
                input.value = String(value);
                form.appendChild(input);
            };

            addField("merchant_id", "1225745");
            addField("return_url", "http://localhost:5173/success");
            addField("cancel_url", "http://localhost:5173/cancel");
            addField("notify_url", "http://localhost:8080/admin/payments/notify");
            addField("order_id", data.orderId);
            addField("items", data.items);
            addField("currency", data.currency);
            addField("amount", data.amount);
            addField("first_name", data.firstName);
            addField("last_name", data.lastName);
            addField("email", data.email);
            addField("phone", data.phone);
            addField("address", data.address);
            addField("city", data.city);
            addField("country", data.country);
            addField("hash", data.hash || "");

            document.body.appendChild(form);
            form.submit();
        } catch (error) {
            console.error("Payment initiation failed", error);
        }
    };

    return (
        <button onClick={handlePayment}>Pay with PayHere</button>
    );
};

export default PayHerePaymentForm;
