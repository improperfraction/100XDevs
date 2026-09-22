import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function Routing() {
    const Navigate = useNavigate(null);
    return (
        <>
            {/* <button onClick={() => { window.location.href = "/routing/dashboard" }}>Dashboard</button>
            <button onClick={() => { window.location.href = "/routing/about" }}>About</button> */}
            <button onClick={() => { Navigate("/routing/dashboard") }}>Dashboard</button>
            <button onClick={() => { Navigate("/routing/about") }}>About</button>
        </>
    )
}


export function Dashboard() {
    return (

        <h1>This is Dashboard page</h1>

    )
}

export function About() {
    return (
        <h1> this is About page</h1>
    )
}

export default Routing