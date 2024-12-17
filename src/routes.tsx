"use client"
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Services from "./pages/ServicesPage";
import Support from "./pages/SupportPage";
import Products from "./pages/ProductPage";
import Blog from "./pages/BlogPage";
import Contact from './pages/ContactPage';

function MainRoutes(){

    return (

        <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<About />} path='/sobre' />
            <Route element={<Services />} path='/servicos' />
            <Route element={<Support />} path='/suporte' />
            <Route element={<Products />} path='/produtos' />
            <Route element={<Blog />} path='/blog' />
            <Route element={<Contact />} path='/contato' />
        </Routes>

    )
}

export default MainRoutes;