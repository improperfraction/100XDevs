import { useState } from "react";
import axios from 'axios';



function Signup() {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [uname, setUname] = useState("");
    const [pword, setPword] = useState("");

    return (
        <div className='flex flex-row items-center justify-center h-screen bg-slate-200 w-screen '>
            <div class="w-96 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h1 class="mb-1text-2xl text-center font-semibold text-gray-900 dark:text-white">Sign Up</h1>
                <p className=' text-base mb-5 text-center font-normal text-gray-500 dark:text-white'>Enter your information to create a paytm account</p>
                <div className='mb-6'>
                    <label for="fname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name </label>
                    <input type="text" onChange={(e) => {
                        setFname(e.target.value)
                    }} name="fname" id="fname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Naredra" required />
                </div>
                <div className='mb-6'>
                    <label for="lname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name </label>
                    <input type="text" onChange={(e) => {
                        setLname(e.target.value);
                    }} name="lname" id="lname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Modi" required />
                </div>
                <div className='mb-6'>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Email</label>
                    <input type="email" onChange={(e) => {
                        setUname(e.target.value);
                    }} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                </div>
                <div className='mb-6'>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" onChange={(e) => {
                        setPword(e.target.value);
                    }} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>

                <button type="submit" onClick={ async() => {
                   const response= await axios.post("http://localhost:3000/api/v1/user/signup", {
                        "username": uname,
                        "firstName": fname,
                        "lastName": lname,
                        "password": pword
                    });
                    if(response)
                    {
                        localStorage.setItem("token", response.data.token);
                    }

                }} class="w-full mb-2 text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
                <div class="text-center text-sm font-medium text-gray-500 dark:text-gray-300">
                    Already have an account? <a href="/signin" class="text-blue-800 hover:underline dark:text-blue-500">Sign in</a>
                </div>
            </div>
        </div>
    )
}

export default Signup