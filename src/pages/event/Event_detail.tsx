import {Button, Divider, Typography} from "antd";
import event from "../../assets/event_post.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faClock, faCreditCard, faLink, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {useState} from "react";
// import {useState} from "react";
// import {Link} from "react-router-dom";

const { Title,Text } = Typography;



const App = () => {


        const [paymentData, setPaymentData] = useState({
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            country: '',
            order_id: '',
            items: '',
            currency: 'LKR',
            amount: 0.0
        });

    // interface FormData {
    //     merchant_id:string,
    //     orderId: string;
    //     amount: number;
    //     currency: string;
    //     first_name: string;
    //     last_name: string;
    //     email: string;
    //     phone: string;
    //     address: string;
    //     city: string;
    //     country: string;
    //     items:number;
    //     hash:string;
    //     return_url:string;
    //     cancel_url:string;
    //     notify_url:string;
    // }
    //
    // // Redirect response interface
    // interface RedirectResponse {
    //     redirectUrl: string;
    // }
    //
    // // State for form data
    // const [formData] = useState<FormData>({
    //     merchant_id: "1225745",
    //     orderId: "1234",  // Static value; you can make it dynamic if needed
    //     amount: 10000.00,
    //     currency: "LKR",
    //     first_name: "Viraji",
    //     last_name: "Dewmini",
    //     email: "virajidewmini@gmail.com",
    //     phone: "0771234567",
    //     address: "Galle",
    //     city:"Galle",
    //     country:"SriLanka",
    //     items:1,
    //     hash:"B2E2C6D6F23E6A88F5A5F6BEB1234A33",
    //     return_url: 'https://your-website.com/return',
    //     cancel_url: 'https://your-website.com/cancel',
    //     notify_url: 'https://your-website.com/notify'
    // });

    // Handle form submission
    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    //     e.preventDefault();
    //
    //     const token = localStorage.getItem('authToken');
    //
    //     if (!token) {
    //         alert('No token found, please log in.');
    //         return;
    //     }
    //
    //
    //     try {
    //         const config = {
    //             headers: {
    //                 'Authorization': `Bearer ${token}`, // Add the Bearer token to the headers
    //             },
    //         };
    //         // Send form data to backend API
    //         const response: AxiosResponse<RedirectResponse> = await axios.post(
    //             'http://localhost:8080/admin/payments/initiate',
    //             formData,
    //             config
    //         );
    //         console.log("Token: ", token);
    //         console.log(response.data);
    //         // Get the redirect URL and navigate to PayHere
    //         // const  redirectUrl  = response.data.redirectUrl;
    //         // console.log("redirect Url :", redirectUrl);
    //         // window.location.href = redirectUrl;
    //
    //         const redirectUrl = "https://sandbox.payhere.lk/pay/checkout?" +
    //             "country=" + encodeURIComponent("Sri") +
    //             "&amount=" + encodeURIComponent("10000.0") +
    //             "&address=" + encodeURIComponent("Galle") +
    //             "&city=" + encodeURIComponent("Galle") +
    //             "&last_name=" + encodeURIComponent("Dewmini") +
    //             "&merchant_id=" + encodeURIComponent("1225745") +
    //             "&notify_url=" + encodeURIComponent("https://your-website.com/notify") +
    //             "&phone=" + encodeURIComponent("0771234567") +
    //             "&return_url=" + encodeURIComponent("https://your-website.com/return") +
    //             "&currency=" + encodeURIComponent("LKR") +
    //             "&order_id=" + encodeURIComponent("1234") +
    //             "&first_name=" + encodeURIComponent("Viraji") +
    //             "&items=" + encodeURIComponent("1") +
    //             "&cancel_url=" + encodeURIComponent("https://your-website.com/cancel") +
    //             "&email=" + encodeURIComponent("virajidewmini@gmail.com") +
    //             "&hash=" + encodeURIComponent("39D3C3F9B7E8C7F7B206D0A6E25CFE1B");
    //
    //         window.location.href = redirectUrl;
    //     } catch (error) {
    //         console.error('Error initiating payment:', error);
    //         alert('Failed to initiate payment. Please try again.');
    //     }
    // };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const token = localStorage.getItem('authToken');

            if (!token) {
                alert('No token found, please log in.');
                return;
            }

        try {
            const config = {
                            headers: {
                                'Authorization': `Bearer ${token}`, // Add the Bearer token to the headers
                            },
                        };
                        // Send form data to backend API

            await axios.post('/admin/payments/initiate', paymentData,config);
            alert('Payment initiated successfully');
        } catch (error) {
            alert('Error initiating payment');
        }
    };



    return(
        <div className={"flex flex-col"}>
            <div className=" flex bg-white rounded-lg   gap-4 p-8">

                <div className="w-2/3 ">

                    <div className="mt-2 flex-1">
                        <div>
                            <Title level={5}>Type</Title>
                        </div>
                        <div>
                            <Text className="text-base">Pre Conference Workshop</Text>
                        </div>

                        <div className={"mt-3"}>
                            <Title level={5}>Description</Title>
                        </div>
                        <div style={{textAlign: "justify"}}>
                            <Text className="text-base">Join us for an in-depth exploration of LibreOffice and its
                                technology. This workshop is designed for individuals and organizations looking to
                                migrate
                                to LibreOffice or simply learn more about this powerful open-source office suite.

                            </Text>
                        </div>

                        <Divider></Divider>

                        <div style={{backgroundColor: '#f5f5f5'}} className="p-4 rounded-lg">
                            <div className=" items-center">
                                <Title level={5} className="mr-2 mt-3">Day 1 </Title>

                                <div className=" flex items-center">
                                    <div className={"flex mr-2"}>
                                        <FontAwesomeIcon
                                            icon={faCalendarDays}

                                            style={{color: '#878787'}}
                                        />
                                    </div>
                                    <Text style={{color: '#878787'}} className="mr-2 font-bold">Date :</Text>

                                    <div className="flex-1 ">
                                        <Text style={{color: '#878787'}} className={"font-bold"}>20 th of November
                                            2024</Text>
                                    </div>
                                </div>

                                <div className=" flex items-center">
                                    <div className={"flex mr-2"}>

                                        <FontAwesomeIcon
                                            icon={faClock}

                                            style={{color: '#878787'}}
                                        />
                                    </div>
                                    <Text style={{color: '#878787'}} className="mr-2 font-bold">Time :</Text>

                                    <div className="flex-1 ">
                                        <Text style={{color: '#878787'}} className="font-bold">8.30 AM to 5.00 PM</Text>
                                    </div>


                                </div>


                                <div className="flex-1 mt-3">
                                    <Title style={{color: '#4C3BCF'}} level={5}>Introduction to LibreOffice and
                                        LibreOffice
                                        Technology</Title>
                                </div>
                            </div>

                            <div>
                                <ul className="list-disc pl-5">
                                    <li className="mb-2 text-base">LibreOffice Project's History</li>
                                    <li className="mb-2 text-base">Technical Evolution of the development platform</li>
                                    <li className="mb-2 text-base">LibreOffice six modules</li>
                                    <li className="mb-2 text-base">Introduction to main features</li>
                                    <li className="mb-2 text-base">Introduction to open source software and open
                                        standards
                                    </li>
                                </ul>

                            </div>

                        </div>

                        <div style={{backgroundColor: '#f5f5f5'}} className="p-4 rounded-lg mt-2">
                            <div className="items-center">

                                <Title level={5} className="mr-2 mt-3">Day 2 </Title>

                                <div className=" flex items-center">
                                    <div className={"flex mr-2"}>
                                        <FontAwesomeIcon
                                            icon={faCalendarDays}

                                            style={{color: '#878787'}}
                                        />
                                    </div>
                                    <Text className="mr-2 font-bold " style={{color: '#878787'}}>Date :</Text>


                                    <div className="flex-1 ">
                                        <Text style={{color: '#878787'}} className="font-bold">23 th of November
                                            2024</Text>
                                    </div>
                                </div>

                                <div className=" flex items-center">
                                    <div className={"flex mr-2"}>

                                        <FontAwesomeIcon
                                            icon={faClock}

                                            style={{color: '#878787'}}
                                        />
                                    </div>
                                    <Text className="mr-2 font-bold" style={{color: '#878787'}}>Time :</Text>

                                    <div className="flex-1">
                                        <Text style={{color: '#878787'}} className="font-bold">8.30 AM to 5.00 PM</Text>
                                    </div>


                                </div>

                                <div className="mt-3">
                                    <Title style={{color: '#4C3BCF'}} level={5}>LibreOffice Migration Protocol</Title>
                                </div>
                            </div>

                            <div>
                                <ul className="list-disc pl-5">
                                    <li className="mb-2 text-base">Interoperability with proprietary document formats
                                    </li>
                                    <li className="mb-2 text-base">Conversion of document templates and macros</li>
                                    <li className="mb-2 text-base">Compatibility with VBA macros</li>
                                    <li className="mb-2 text-base">Integration with third party application</li>
                                    <li className="mb-2 text-base">Fixing bugs and regression</li>
                                </ul>

                            </div>
                        </div>


                        <Divider></Divider>


                        <div className=" flex items-center">
                            <div className={"flex mr-2"}>
                                <FontAwesomeIcon
                                    icon={faLocationDot}

                                />
                            </div>
                            <Text  className="mr-2 font-bold" >Venue :</Text>

                            <div className="flex-1">
                                <Text className={"font-bold"}>University of Colombo School of Computing</Text>
                            </div>
                        </div>

                        <div className=" flex items-center">
                            <div className={"flex mr-2"}>
                                <FontAwesomeIcon
                                    icon={faLink}
                                />
                            </div>
                            <Text className="mr-2 font-bold" >Google Map Link :</Text>

                            <div className="flex-1 ">
                                <a href="https://maps.app.goo.gl/N6jbYPNALgMkS2227"
                                   className="text-base text-blue-500 underline" target="_blank"
                                   rel="noopener noreferrer">
                                    https://maps.app.goo.gl/N6jbYPNALgMkS2227
                                </a>
                            </div>
                        </div>

                        <div className=" flex items-center">
                            <div className={"flex mr-2"}>
                                <FontAwesomeIcon
                                    icon={faCreditCard}
                                />
                            </div>
                            <Text className="mr-2 font-bold" >Investment :</Text>

                            <div className="flex-1 ">
                                <Text style={{color: "Red"}} className={"font-bold"}>Rs.8500.00 per day</Text>
                            </div>
                        </div>


                        <div className="flex-1 mt-3">
                            <Text style={{color: 'red'}} className={"font-bold"}>* Lunch & Refreshments are
                                provided</Text>
                        </div>
                    </div>

                </div>

                <div className="flex-1 items-start">
                    <div className="mt-10 flex-1">
                        <div className=" flex">
                            <img
                                src={event}
                                alt="Event Post"
                                className=" rounded-lg h-[400px] w-full"
                            />
                        </div>

                        <div className="mt-2 ">
                            <Title level={5}>Conducted By </Title>
                        </div>
                        <div>
                            <ul className="list-disc pl-5">
                                <li className="mb-2 text-base">Italo Vignoli</li>
                                <li className="mb-2 text-base">Lother K. Becker</li>
                            </ul>

                        </div>

                        <div className="mt-2 ">
                            <Title level={5}>Certificates From</Title>
                        </div>
                        <div>
                            <ul className="list-disc pl-5">
                                <li className="mb-2 text-base">LibreOffice</li>
                                <li className="mb-2 text-base">University of Colombo School of Computing</li>
                            </ul>

                        </div>
                        <div className="mt-2 ">
                            <Title level={5}>Sponsors </Title>
                        </div>
                        <div>
                            <ul className="list-disc pl-5">
                                <li className="mb-2 text-base">Cambio</li>
                                <li className="mb-2 text-base">LSEG</li>
                                <li className="mb-2 text-base">Softlogic</li>
                                <li className="mb-2 text-base">Dell</li>
                            </ul>

                        </div>

                    </div>

                    {/*<div className={"flex flex-col justify-end items-end bottom-0"}>*/}
                    {/*    */}

                    {/*</div>*/}
                </div>

            </div>
            <div className={"flex justify-end"}>

                <form onSubmit={handleSubmit}>
                    <input type="text" name="first_name"
                           onChange={(e) => setPaymentData({...paymentData, first_name: e.target.value})}/>
                    <input type="text" name="last_name"
                           onChange={(e) => setPaymentData({...paymentData, last_name: e.target.value})}/>
                    <input type="email" name="email"
                           onChange={(e) => setPaymentData({...paymentData, email: e.target.value})}/>
                    <input type="text" name="phone"
                           onChange={(e) => setPaymentData({...paymentData, phone: e.target.value})}/>
                    <input type="text" name="address"
                           onChange={(e) => setPaymentData({...paymentData, address: e.target.value})}/>
                    <input type="text" name="city"
                           onChange={(e) => setPaymentData({...paymentData, city: e.target.value})}/>
                    <input type="text" name="country"
                           onChange={(e) => setPaymentData({...paymentData, country: e.target.value})}/>
                    <input type="text" name="order_id"
                           onChange={(e) => setPaymentData({...paymentData, order_id: e.target.value})}/>
                    <input type="text" name="items"
                           onChange={(e) => setPaymentData({...paymentData, items: e.target.value})}/>
                    <input type="number" name="amount"
                           onChange={(e) => setPaymentData({...paymentData, amount: parseFloat(e.target.value)})}/>
                    <Button type="primary" size="large" htmlType={"submit"}>
                        Buy Ticket
                    </Button>
                </form>

                {/*<form onSubmit={handleSubmit}>*/}

                {/*    <input type="text" name="orderId" value={formData.orderId} hidden/>*/}
                {/*    <input type="number" name="amount" value={formData.amount} hidden/>*/}
                {/*    <input type="text" name="firstName" value={formData.first_name} hidden/>*/}
                {/*    <input type="text" name="lastName" value={formData.last_name} hidden/>*/}
                {/*    <input type="email" name="email" value={formData.email} hidden/>*/}
                {/*    <input type="text" name="phone" value={formData.phone} hidden/>*/}


                {/*    <Button type="primary" size="large" htmlType={"submit"}>*/}
                {/*        Buy Ticket*/}
                {/*    </Button>*/}

                {/*</form>*/}

                {/*<Link to="/view_ticket">*/}

                {/*</Link>*/}

            </div>
        </div>
    )
};

export default App

