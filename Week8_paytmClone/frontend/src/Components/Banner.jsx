import { useEffect, useState } from 'react';

function Banner({popmessage, closePopup}) {
    const [render, setRender]= useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setRender(false)
            closePopup();
        }, 5000)
    }, [])
    // if (!popmessage) return null; // Don't render if there's no popup message
    if(render)
    {
        return (
            <div className="fixed top-0 left-0 w-full h-full flex justify-end items-end bg-opacity-50 z-50">
                <div className="p-5 mb-5 mr-5 flex justify-center items-center rounded-xl bg-gray-50 shadow-lg w-1/5 h-20 text-center font-medium text-gray-900 relative">
                    <p className='text-center'>{popmessage}</p>
                    <button onClick={closePopup} className="absolute top-2 right-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white rounded-xl bg-black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>
            </div>
        )
    }
    else{
        return <></>
    }
    
}

export default Banner;
