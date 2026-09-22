import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/thunks/Fetchusers";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { AddUsers } from "../store/thunks/AddUsers";
import { removeUser } from "../store/thunks/RemoveUsers";




function UsersList() {
    const dispatch = useDispatch();
    const { isLoading, data, error } = useSelector((state) => {
        return state.users
    });

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch]);

    const handleUseradd = () => {
        dispatch(AddUsers());
    }

    if (isLoading) {
        return <Skeleton times={5}></Skeleton>
    }
    if (error) {
        return <div> Error occured</div>
    }
    if (data) {
        return (
            <div className="mx-96 mt-10">
                <div className="ml-4 mr-4 flex justify-between">
                    <h2 className="text-xl font-bold"> List of Users</h2>
                    <button onClick={(handleUseradd)} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">+ Add Users</button>

                </div>
                {
                    data.map((user) => {
                        return (
                            <div key={user.id} >
                                <div class="pt-4 pb-4 ml-4 flex justify-start  bg-gray-200 pl-10 font-semibold text rounded-md dark:bg-gray-700 w-2/3 mb-4">
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" onClick={()=>{
                                        dispatch(removeUser(user));
                                        dispatch(fetchUsers())
                                    }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm5.757-1a1 1 0 1 0 0 2h8.486a1 1 0 1 0 0-2H7.757Z" clip-rule="evenodd" />
                                    </svg>
                                    <div className="pl-10">{user.name}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}

export default UsersList;