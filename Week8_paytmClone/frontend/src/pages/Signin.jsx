import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Signin() {
    const [uname, setUname]= useState("");
    const [pword, setPword]= useState("");
    const navigate= useNavigate();
    return (
        <div className='flex flex-row items-center justify-center h-screen bg-slate-200 w-screen '>
            <div class="w-96 mb-1 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h1 class="text-2xl text-center font-semibold text-gray-900 dark:text-white">Sign In</h1>
               
                <div className='mb-6'>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Email</label>
                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" onChange={(e)=>{
                        setUname(e.target.value);
                    }} required />
                </div>
                <div className='mb-6'>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  onChange={(e)=>{
                        setPword(e.target.value);
                    }} required />
                </div>

                <button type="submit" class="w-full mb-2 text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={ async()=>{
                    const response= await axios.post("http://localhost:3000/api/v1/user/signin", {
                        "username": uname,
                        "password": pword
                    });
                    if(response.data)
                    {
                        localStorage.setItem("token", response.data.token);
                        localStorage.setItem("User_fname", response.data.firstname);
                        localStorage.setItem("User_lname", response.data.lastname);
                        navigate("/dashboard");
                    }

                }}>Sign In</button>
                <div class="text-center text-sm font-medium text-gray-500 dark:text-gray-300">
                    Dont have an account? <a href="/signup" class="text-blue-800 hover:underline dark:text-blue-500">Sign Up</a>
                </div>
            </div>
        </div>
    )
}

 export default Signin