




function RevenueCard({ title, pendingAmount, orderCount }) {
    return (
        <div className="bg-white-500 rounded-lg shadow-md hover:shadow-gray-300 h-24 p-4">
            <div className="flex justifybetween items-center">
                <div className="text-gray-500 mb-2">{title}  </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 pb-2 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
            </div>
            <div className="flex justify-between text-center items-center ">
                <div className="font-semibold text-3xl">
                    ₹ {pendingAmount}
                </div>
                <div>
                    {orderCount ? <a className="text-blue-500 underline hover:text-blue-700 flex start items-center" href="#">
                        {orderCount} {orderCount > 1 ? "Orders" : "Order"}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </a> : null}
                </div>
            </div>
        </div>
    )
}

export default RevenueCard