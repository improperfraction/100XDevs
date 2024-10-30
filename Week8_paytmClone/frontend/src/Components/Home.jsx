import { useNavigate } from "react-router-dom";
import Dboard from "../pages/Dashboard";
import Signin from "../pages/Signin";
import { useEffect } from "react";

function Home() {

    const navigate = useNavigate();
    let isLoggedIn = false;
    function checkfunc() {
        if (localStorage.getItem("token") && localStorage.getItem("User_fname") && localStorage.getItem("User_lname"))
        {
            isLoggedIn = true;
        }
    }

    checkfunc();

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/dashboard')
        }
        else {
            navigate('/signin')
        }
    }, [isLoggedIn,checkfunc ])
    console.log(isLoggedIn)
    return null;

}

export default Home