import React from 'react'
import Navbar from '../components/Navbar'
import Namangan from './Namangan'
import Footer from '../components/Footer'
import Shapka from '../components/Shapka'

export default function page() {
    return (
        <div className='layout'>
            <Navbar />
            <Shapka />
            <Namangan />
            <Footer />
        </div>
    )
};