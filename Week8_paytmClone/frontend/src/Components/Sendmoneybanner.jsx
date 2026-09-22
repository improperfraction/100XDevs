import { useEffect, useState } from 'react';

function SendmoneyBanner({ popmessage, closePopup }) {
    const [render, setRender] = useState(true);
    const fname = localStorage.getItem("Reciver_fullname");
    const R_id = localStorage.getItem("Reciver_id");
    const token = localStorage.getItem("token");

    const [amt, setAmt] = useState('');

    // const [isPopupVisible, setIsPopupVisible] = useState(false); // For controlling popup visibility
    // const [popupMessage, setPopupMessage] = useState(''); // For setting the popup message

    // const closePopup = () => {
    //     setIsPopupVisible(false); // Close the banner
    //     setAmt('')
    // };

    useEffect(() => {
        setTimeout(() => {
            setRender(false)
            closePopup();
        }, 5000)
    }, [])
    // if (!popmessage) return null; // Don't render if there's no popup message
    if (render) {
        return (
            <div className='flex flex-row items-center justify-center h-screen bg-slate-200 w-screen '>
                <div class="w-96 mb-1 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h1 class="text-2xl mb-10 text-center font-semibold text-gray-900 dark:text-white">Send Money</h1>
                    <div className="flex items-center ">
                        <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-600 mr-2" >
                            <span class="font-medium text-gray-600 dark:text-gray-300"> {fname[0]} </span>
                        </div>
                        <div className="self-center text-base font-medium text-black">
                            {fname}
                        </div>
                    </div>
                    <div className='mb-6'>
                        <label for="number" class="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white"> Amount</label>
                        <input type="number" name="number" id="number" value={amt} onChange={(e) => {
                            setAmt(e.target.value);
                        }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter amount" required />
                    </div>
                    <button type="submit" data-modal-target="static-modal" data-modal-toggle="static-modal" class="w-full mb-2 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={async () => {
                        try {
                            const response = await axios.post("http://localhost:3000/api/v1/account/transfer", {
                                to: R_id,
                                amount: amt
                            }, {
                                headers: {
                                    Authorization: `Bearer ${token}`
                                }
                            });

                            if (response.status == 200) {
                                //setPopupMessage(response.data.message);
                            }
                        }
                        catch (error) {
                            if (error.response.data.message === "Insufficiant balance") {
                               // setPopupMessage('Insufficiant balance');
                            } else {
                               // setPopupMessage("An error occurred. Please try again.");
                            }
                        }
                        //setIsPopupVisible(true);

                    }}  >Initiate transfer</button>

                   {/* {isPopupVisible && <Banner popmessage={popupMessage} closePopup={closePopup}></Banner>} */}
                </div>
            </div>

            // <div className="fixed top-0 left-0 w-full h-full flex justify-end items-end bg-opacity-50 z-50">
            //     <div className="p-5 mb-5 mr-5 flex justify-center items-center rounded-xl bg-gray-50 shadow-lg w-1/5 h-20 text-center font-medium text-gray-900 relative">
            //         <p className='text-center'>{popmessage}</p>
            //         <button onClick={closePopup} className="absolute top-2 right-2">
            //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white rounded-xl bg-black">
            //                 <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            //             </svg>
            //         </button>
            //     </div>
            // </div>
        )
    }
    else {
        return <></>
    }

}

export default SendmoneyBanner;
