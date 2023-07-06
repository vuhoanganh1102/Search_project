

import React from "react";
import Home from "../pages/Home.tsx";


import { Routes, Route, Navigate } from "react-router-dom";


const Routers = () =>{
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/educationWebSite" element={<Home />} />
            
        </Routes>
    )
} 

export default Routers;