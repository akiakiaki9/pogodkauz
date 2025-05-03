import React from 'react'
import Navbar from '../components/Navbar'
import Shapka from '../components/Shapka'
import Navoi from './Navoi'
import Footer from '../components/Footer'

export default function page() {
    return (
        <div className='layout'>
            <Navbar />
            <Shapka />
            <Navoi />
            <Footer />
        </div>
    )
};