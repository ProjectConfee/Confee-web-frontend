//
// import React, { useState, useEffect } from "react";
// import axios from "axios";
//
// interface Message {
//     sender: string;
//     recipient: string;
//     message: string;
//     timestamp: string;
// }
//
// const App: React.FC = () => {
//     const [messages, setMessages] = useState<Message[]>([]); // Chat messages
//     const [inputMessage, setInputMessage] = useState<string>(""); // Message input
//     const [currentUser, setCurrentUser] = useState<string>("john_doe"); // Logged-in user
//     const [recipient, setRecipient] = useState<string>("jane_doe"); // Selected recipient
//
//     // Fetch conversation between currentUser and recipient
//     const fetchMessages = async () => {
//         try {
//             const response = await axios.get(
//                 `http://localhost:8080/api/chat/conversation?sender=${currentUser}&recipient=${recipient}`
//             );
//             setMessages(response.data);
//         } catch (error) {
//             console.error("Error fetching messages:", error);
//         }
//     };
//
//     // Send a message
//     const sendMessage = async () => {
//         if (!inputMessage.trim()) return; // Do not send empty messages
//
//         try {
//             const response = await axios.post("http://localhost:8080/api/chat/send", {
//                 sender: currentUser,
//                 recipient: recipient,
//                 message: inputMessage,
//             });
//
//             // Update chat with the new message
//             setMessages((prevMessages) => [...prevMessages, response.data]);
//             setInputMessage(""); // Clear input box
//         } catch (error) {
//             console.error("Error sending message:", error);
//         }
//     };
//
//     // Fetch messages whenever the recipient or current user changes
//     useEffect(() => {
//         fetchMessages();
//     }, [currentUser, recipient]);
//
//     return (
//         <div className="flex h-screen bg-gray-100">
//             {/* Sidebar */}
//             <div className="w-1/4 bg-white shadow-lg flex flex-col">
//                 <h2 className="text-xl font-bold text-center py-4 border-b">Users</h2>
//                 <ul className="flex-1 overflow-y-auto p-4">
//                     {["jane_doe", "alex_smith", "john_doe"].map((user) => (
//                         <li
//                             key={user}
//                             className={`p-3 rounded-lg cursor-pointer ${
//                                 recipient === user ? "bg-blue-500 text-white" : "hover:bg-gray-200"
//                             }`}
//                             onClick={() => setRecipient(user)}
//                         >
//                             {user}
//                         </li>
//                     ))}
//                 </ul>
//                 <div className="p-4">
//                     <button
//                         className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//                         onClick={() => setCurrentUser(currentUser === "john_doe" ? "jane_doe" : "john_doe")}
//                     >
//                         Switch User
//                     </button>
//                 </div>
//             </div>
//
//             {/* Chat Window */}
//             <div className="flex-1 flex flex-col">
//                 {/* Chat Header */}
//                 <div className="p-4 bg-blue-500 text-white text-lg font-bold">
//                     Chat with {recipient}
//                 </div>
//
//                 {/* Chat Messages */}
//                 <div className="flex-1 overflow-y-auto p-4 space-y-4">
//                     {messages.map((msg, index) => (
//                         <div
//                             key={index}
//                             className={`flex ${
//                                 msg.sender === currentUser ? "justify-end" : "justify-start"
//                             }`}
//                         >
//                             <div
//                                 className={`p-3 rounded-lg ${
//                                     msg.sender === currentUser
//                                         ? "bg-blue-500 text-white"
//                                         : "bg-gray-200 text-black"
//                                 }`}
//                             >
//                                 <p className="text-sm font-medium">{msg.message}</p>
//                                 <p className="text-xs text-gray-500">
//                                     {new Date(msg.timestamp).toLocaleTimeString()}
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//
//                 {/* Message Input */}
//                 <div className="p-4 bg-gray-200 flex items-center space-x-2">
//                     <input
//                         type="text"
//                         placeholder="Type your message..."
//                         value={inputMessage}
//                         onChange={(e) => setInputMessage(e.target.value)}
//                         className="flex-1 p-2 rounded-lg border border-gray-300"
//                     />
//                     <button
//                         onClick={sendMessage}
//                         className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//                     >
//                         Send
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default App;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
//
// interface Message {
//     sender: string;
//     recipient: string;
//     message: string;
//     timestamp: string;
// }
//
// const App: React.FC = () => {
//     const [messages, setMessages] = useState<Message[]>([]);
//     const [inputMessage, setInputMessage] = useState<string>("");
//     const [currentUser, setCurrentUser] = useState<string>("john_doe");
//     const [recipient, setRecipient] = useState<string>("jane_doe");
//
//     // Retrieve the auth token from localStorage
//     const token = localStorage.getItem("authToken");
//
//     // Axios instance with the authorization header
//     const axiosInstance = axios.create({
//         baseURL: "http://localhost:8080/api",
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     });
//
//     const fetchMessages = async () => {
//         try {
//             const response = await axiosInstance.get(
//                 `/chat/conversation?sender=${currentUser}&recipient=${recipient}`
//             );
//             setMessages(response.data);
//         } catch (error) {
//             console.error("Error fetching messages:", error);
//         }
//     };
//
//     const sendMessage = async () => {
//         if (!inputMessage.trim()) return;
//
//         try {
//             const response = await axiosInstance.post("/chat/send", {
//                 sender: currentUser,
//                 recipient: recipient,
//                 message: inputMessage,
//             });
//
//             setMessages((prevMessages) => [...prevMessages, response.data]);
//             setInputMessage("");
//         } catch (error) {
//             console.error("Error sending message:", error);
//         }
//     };
//
//     useEffect(() => {
//         fetchMessages();
//     }, [currentUser, recipient]);
//
//     const formatTimestamp = (timestamp: string) => {
//         try {
//             const date = new Date(timestamp);
//             if (isNaN(date.getTime())) {
//                 console.error(`Invalid timestamp: ${timestamp}`);
//                 return "Invalid Date";
//             }
//             return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
//         } catch (error) {
//             console.error("Error formatting timestamp:", error);
//             return "Invalid Date";
//         }
//     };
//
//     return (
//         <div className="flex h-screen bg-gray-100">
//             {/* Sidebar */}
//             <div className="w-1/4 bg-white shadow-lg flex flex-col">
//                 <h2 className="text-xl font-bold text-center py-4 border-b">Users</h2>
//                 <ul className="flex-1 overflow-y-auto p-4">
//                     {["jane_doe", "alex_smith", "john_doe"].map((user) => (
//                         <li
//                             key={user}
//                             className={`p-3 rounded-lg cursor-pointer ${
//                                 recipient === user ? "bg-blue-600 text-white" : "hover:bg-gray-200"
//                             }`}
//                             onClick={() => setRecipient(user)}
//                         >
//                             {user}
//                         </li>
//                     ))}
//                 </ul>
//                 <div className="p-4">
//                     <button
//                         className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
//                         onClick={() => setCurrentUser(currentUser === "john_doe" ? "jane_doe" : "john_doe")}
//                     >
//                         Switch User
//                     </button>
//                 </div>
//             </div>
//
//             {/* Chat Window */}
//             <div className="flex-1 flex flex-col">
//                 {/* Chat Header */}
//                 <div className="p-4 bg-blue-600 text-white text-lg font-bold">
//                     Chat with {recipient}
//                 </div>
//
//                 {/* Chat Messages */}
//                 <div className="flex-1 overflow-y-auto p-4 space-y-4">
//                     {messages.map((msg, index) => (
//                         <div
//                             key={index}
//                             className={`flex ${
//                                 msg.sender === currentUser ? "justify-end" : "justify-start"
//                             }`}
//                         >
//                             <div
//                                 className={`p-3 rounded-lg ${
//                                     msg.sender === currentUser
//                                         ? "bg-blue-600 text-white"
//                                         : "bg-gray-200 text-black"
//                                 }`}
//                             >
//                                 <p className="text-sm font-medium">{msg.message}</p>
//                                 <p className="text-xs text-gray-500">
//                                     {formatTimestamp(msg.timestamp)}
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//
//                 {/* Message Input */}
//                 <div className="p-4 bg-gray-200 flex items-center space-x-2">
//                     <input
//                         type="text"
//                         placeholder="Type your message..."
//                         value={inputMessage}
//                         onChange={(e) => setInputMessage(e.target.value)}
//                         className="flex-1 p-2 rounded-lg border border-gray-300"
//                     />
//                     <button
//                         onClick={sendMessage}
//                         className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//                     >
//                         Send
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default App;
import React, { useState, useEffect } from "react";
import axios from "axios";

interface Message {
    sender: string;
    recipient: string;
    message: string;
    timestamp: string;
}

const App: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState<string>("");
    const [currentUser, setCurrentUser] = useState<string>("john_doe");
    const [recipient, setRecipient] = useState<string>("jane_doe");

    // Retrieve the auth token from localStorage
    const token = localStorage.getItem("authToken");
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    const fetchMessages = async () => {
        try {
            const response = await axios.get(
                `http://localhost:8080/api/chat/conversation?sender=${currentUser}&recipient=${recipient}`
            );
            setMessages(response.data);
        } catch (error) {
            console.error("Error fetching messages:", error);
        }
    };

    const sendMessage = async () => {
        if (!inputMessage.trim()) return;

        try {
            const response = await axios.post("http://localhost:8080/api/chat/send", {
                sender: currentUser,
                recipient: recipient,
                message: inputMessage,
            });

            setMessages((prevMessages) => [...prevMessages, response.data]);
            setInputMessage("");
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, [currentUser, recipient]);

    const formatTimestamp = (timestamp: string) => {
        try {
            const date = new Date(timestamp);
            if (isNaN(date.getTime())) {
                console.error(`Invalid timestamp: ${timestamp}`);
                return "Invalid Date";
            }
            return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        } catch (error) {
            console.error("Error formatting timestamp:", error);
            return "Invalid Date";
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-1/4 bg-white shadow-lg flex flex-col">
                <h2 className="text-xl font-bold text-center py-4 border-b">Users</h2>
                <ul className="flex-1 overflow-y-auto p-4">
                    {["jane_doe", "alex_smith", "john_doe"].map((user) => (
                        <li
                            key={user}
                            className={`p-3 rounded-lg cursor-pointer ${
                                recipient === user ? "bg-blue-600 text-white" : "hover:bg-gray-200"
                            }`}
                            onClick={() => setRecipient(user)}
                        >
                            {user}
                        </li>
                    ))}
                </ul>
                <div className="p-4">
                    <button
                        className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
                        onClick={() => setCurrentUser(currentUser === "john_doe" ? "jane_doe" : "john_doe")}
                    >
                        Switch User
                    </button>
                </div>
            </div>

            {/* Chat Window */}
            <div className="flex-1 flex flex-col">
                {/* Chat Header */}
                <div className="p-4 bg-blue-600 text-white text-lg font-bold">
                    Chat with {recipient}
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${
                                msg.sender === currentUser ? "justify-end" : "justify-start"
                            }`}
                        >
                            <div
                                className={`p-3 rounded-lg ${
                                    msg.sender === currentUser
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-black"
                                }`}
                            >
                                <p className="text-sm font-medium">{msg.message}</p>
                                <p className="text-xs text-gray-500">
                                    {formatTimestamp(msg.timestamp)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message Input */}
                <div className="p-4 bg-gray-200 flex items-center space-x-2">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        className="flex-1 p-2 rounded-lg border border-gray-300"
                    />
                    <button
                        onClick={sendMessage}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
