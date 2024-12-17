'use client'

import React from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function BlogPage() {

    return (
        <>
            <Navbar />
            <main className='mx-32 p-5'>
                <h1>Blog</h1>
            </main>
            <Footer />
        </>
    );

}