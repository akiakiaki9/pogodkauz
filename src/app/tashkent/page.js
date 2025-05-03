import React from 'react'
import Navbar from '../components/Navbar'
import Shapka from '../components/Shapka'
import Footer from '../components/Footer'
import Tashkent from './Tashkent'

export default function page() {
    return (
        <div className='layout'>
            <Navbar />
            <Shapka />
            <Tashkent />
            <Footer />
        </div>
    )
};