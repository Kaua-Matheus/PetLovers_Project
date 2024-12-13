"use client"
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Services from "./pages/ServicesPage";
import Support from "./pages/SupportPage";

function MainRoutes(){

    return (

        <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<About />} path='/sobre' />
            <Route element={<Services />} path='/servicos' />
            <Route element={<Support />} path='/suporte' />
        </Routes>

    )
}

export default MainRoutes;