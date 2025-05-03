import React from 'react'
import Navbar from '../components/Navbar'
import Shapka from '../components/Shapka'
import Footer from '../components/Footer'
import Gulistan from './Gulistan'

export default function page() {
    return (
        <div className='layout'>
            <Navbar />
            <Shapka />
            <Gulistan />
            <Footer />
        </div>
    )
};