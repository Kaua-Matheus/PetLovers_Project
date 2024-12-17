'use client'

import React from "react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import Card from '../components/Card';

export default function ProductPage() {
    return (
        <>
            <Navbar />
            <main className='mx-32 p-5'>
                <h1>Produtos</h1>
            </main>
            <Footer />
        </>
    );

};