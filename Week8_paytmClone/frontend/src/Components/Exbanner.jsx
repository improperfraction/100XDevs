import { useState } from "react";
import axios from 'axios';
import Banner from "./Banner";

function Exbanner({ closeTransferBanner }) {
    const fname = localStorage.getItem("Reciver_fullname");
    const R_id = localStorage.getItem("Reciver_id");
    const token = localStorage.getItem("token");

    const [amt, setAmt] = useState(''); // Initialize state for amount
    const [isMessagePopupVisible, setIsMessagePopupVisible] = useState(false); // Control popup visibility
    const [popupMessage, setPopupMessage] = useState(''); // Message for the popup

    const closeMessageBanner = () => {
        setIsMessagePopupVisible(false); // Close the banner  
    };

    const transfer = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/account/transfer", {
                to: R_id,
                amount: amt,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                setPopupMessage(response.data.message);
            }
        } catch (error) {
            if (error.response?.data?.message === "Insufficiant balance") {
                setPopupMessage('Insufficient balance');
            } else {
                setPopupMessage("An error occurred. Please try again.");
            }
        }
        setIsMessagePopupVisible(true);
    };

    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="w-96 mb-1 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h1 className="text-2xl mb-10 text-center font-semibold text-gray-900 dark:text-white">Send Money</h1>
                <div className="flex items-center">
                    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-600 mr-2">
                        <span className="font-medium text-gray-600 dark:text-gray-300">{fname?.[0]}</span>
                    </div>
                    <div className="self-center text-base font-medium text-black">{fname}</div>
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="number"
                        className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Amount
                    </label>
                    <input
                        type="number"
                        name="number"
                        id="number"
                        value={amt}
                        onChange={(e) => setAmt(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Enter amount"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full mb-2 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={async () => {
                        await transfer();
                        closeTransferBanner();
                    }}
                >
                    Initiate transfer
                </button>

                {isMessagePopupVisible && (
                    <Banner popmessage={popupMessage} closeBanner={closeMessageBanner} />
                )}
            </div>
        </div>
    );
}

export default Exbanner;
