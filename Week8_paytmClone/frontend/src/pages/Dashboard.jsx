import { useState, useEffect, memo, useMemo } from "react";
import axios from 'axios';
import Users from "../Components/Users";



function Dboard() {
    const [search, setSearch] = useState("");
    const [value, setValue] = useState("");
    const [us, setUs] = useState([]);
    const [balance, setBalance] = useState(0);


    const fname = localStorage.getItem("User_fname");
    const lname = localStorage.getItem("User_lname");


    useEffect(() => {
        const handler = setTimeout(() => {
            setSearch(value)
        }, 500)

        return () => {
            clearTimeout(handler);
        }
    }, [value])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${search}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
                );
                setUs(response.data.bulkUser)
            } catch (error) {
                console.log("Error fetching users:", error);
            }

        }
        fetchData();
    }, [search])


    useEffect(() => {
        const getBal = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setBalance(parseFloat(response.data.current_Balance.toFixed(2)));
                console.log(parseFloat(response.data.current_Balance.toFixed(2)));
            }
            catch (error) {
                console.log("Error fetching users:", error);
            }

        }
        getBal();
    }, [])


    return (
        <div>
            <div className="flex flex-row justify-between px-5 py-4 border-stone-600 shadow" >
                <div className="self-center text-2xl font-semibold text-slate-600">
                    Paytm Clone
                </div>
                <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-blue-200 rounded-full dark:bg-gray-600 mr-2" >
                    <span class="font-medium text-blue-900 dark:text-blue-300"> {fname[0]}{lname[0]}</span>
                </div>
            </div>
            <div className=" mt-6 ml-5 self-center text-xl font-semibold text-black"> Current Balance is Rs {balance}</div>
            <div className=" mt-16 ml-6 self-center text-xl font-semibold text-black"> Available Users:</div>
            <div className="px-5 mt-3">
                <input type="text" id="simple-search" onChange={(e) => {
                    setValue(e.target.value);
                }} className="bg-gray-50 border border-gray-300 focus:border-gray-400 text-gray-900 focus:outline-none  text-base rounded-lg block w-full l ps-10 p-2.5 " placeholder="Enter User's name... " required />
            </div>
            {us.map((u) => {
                return <Users user={u}></Users>
            })}

        </div>
    )
}


export default Dboard;