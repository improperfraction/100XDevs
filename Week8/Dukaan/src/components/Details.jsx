function Details({pocount, rfcount})
{
    return (
        <div className=" pl-4 ml-56 mt-8">
            <h5 className="font-medium text-[#1A181E] text-xl mb-6">
            Transactions    |    This Month
            </h5>
            <div className="flex justify-start mr-1 ">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Payouts ({pocount})</button>
            <button type="button" class="py-1.5 px-4 me-2 mb-2 text-sm  text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10  focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Refunds ({rfcount})</button>
            </div>
        
        </div>
    )
}
export default Details;