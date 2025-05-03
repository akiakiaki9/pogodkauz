import React from 'react'
import Navbar from '../components/Navbar'
import Shapka from '../components/Shapka'
import Karshi from './Karshi'
import Footer from '../components/Footer'

export default function page() {
    return (
        <div className='layout'>
            <Navbar />
            <Shapka />
            <Karshi />
            <Footer />
        </div>
    )
};