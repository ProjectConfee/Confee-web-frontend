import { Button, message, notification } from "antd";
import no_event from "../../assets/img.png";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import {useState} from "react";

const App = () => {
        const location = useLocation();
        const [paymentSaved, setPaymentSaved] = useState(false);  // State to track if payment has been saved

        const queryParams = new URLSearchParams(location.search);
        const workshopId = queryParams.get("workshop_id");
        const amount = queryParams.get("amount");
        const orderId = queryParams.get("order_id");

        const savePaymentDetail = async () => {
                // Check if parameters exist and payment hasn't been saved yet
                if (workshopId && amount && orderId && !paymentSaved) {
                        try {
                                const token = localStorage.getItem("authToken");

                                if (!token) {
                                        message.error("No token found, please log in.");
                                        return;
                                }

                                await axios.post("http://localhost:8080/admin/payments/save", {
                                        workshopId: parseInt(workshopId),
                                        amount: parseFloat(amount),
                                        orderId: parseInt(orderId),
                                }, {
                                        headers: {
                                                Authorization: `Bearer ${token}`,
                                        },
                                });

                                notification.success({
                                        message: "Payment Saved",
                                        description: `Payment for Workshop ID ${workshopId} saved successfully.`,
                                });
                                setPaymentSaved(true);  // Set paymentSaved to true to avoid calling again
                        } catch (error) {
                                console.error("Error saving payment:", error);
                        }
                } else {
                        message.warning("Payment already saved or missing parameters.");
                }
        };


        return (
            <>
                    <div className="bg-white rounded-3xl shadow-lg p-8">
                            <div className="flex justify-end">
                                    <Link to="/ticket">
                                            <Button type="primary" size="large" onClick={savePaymentDetail}>
                                                    View Ticket
                                            </Button>
                                    </Link>
                            </div>

                            <div className="flex justify-center items-center">
                                    <img
                                        src={no_event}
                                        alt="No Event Scheduled"
                                        className="mr-8 rounded-lg h-96 w-96"
                                    />
                            </div>
                    </div>
            </>
        );
};

export default App;
