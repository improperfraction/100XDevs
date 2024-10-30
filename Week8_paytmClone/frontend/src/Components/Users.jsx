import { useNavigate } from 'react-router-dom'
function Users({ user }) {
    const navigate = useNavigate();
    return (
        <div className="flex flex-row items-center justify-between px-6 mt-4">
            <div className="flex items-center	">
                <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-600 mr-2" >
                    <span class="font-medium text-gray-600 dark:text-gray-300"> {user.firstName[0]}{user.lastName[0]}</span>
                </div>
                <div className="self-center text-base font-medium text-black">
                    {user.firstName} {user.lastName}
                </div>
            </div>
            <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={() => {
                localStorage.setItem("Reciver_fullname", `${user.firstName} ${user.lastName}`);
                localStorage.setItem("Reciver_id", user._id);
                navigate('/sendmoney');

            }}>Send Money</button>
        </div>
    )
}

export default Users;