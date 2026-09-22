import { set } from "mongoose";
import { useEffect, useRef, useState } from "react";


function Slider() {
    const [isOpen, setIsOpen] = useState(false);

    const sliderRef= useRef(null);
    const buttonRef = useRef(null);

    useEffect(()=>{
        const clickOutside=(e)=>{
            if(sliderRef.current && !sliderRef.current.contains(e.target) && !buttonRef.current.contains(e.target)){
                setIsOpen(false);
            }  
        }
        document.addEventListener("mousedown", clickOutside);
            return () => {
                document.removeEventListener("mousedown", clickOutside);
            }
    }, []);
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Popup Slider Example</h1>
                <button ref={buttonRef}
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    {isOpen ? "Close Slider" : "Open Slider"}
                </button>
                <div ref={sliderRef} className={`fixed left-0 right-0 bottom-0 bg-slate-300 rounded-t-xl p-12 transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0" : "translate-y-full"}`}>
                    <div className="flex flex-row justify-center">
                        <h1 className="text-2xl font-bold"> slider</h1>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Slider;
<span class="offer-price premium-price pdpCommon_offer-price__rPb_7 pdpCommon_premium-price__nH_uk "><strong>Price:</strong>₹5625</span>