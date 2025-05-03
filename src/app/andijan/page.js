import React from 'react'
import Navbar from '../components/Navbar'
import Shapka from '../components/Shapka'
import Andijan from './Andijan'
import Footer from '../components/Footer'

export default function page() {
    return (
        <div className='layout'>
            <Navbar />
            <Shapka />
            <Andijan />
            <Footer />
        </div>
    )
};