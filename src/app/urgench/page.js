import React from 'react'
import Urgench from './Urgench'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Shapka from '../components/Shapka'

export default function page() {
    return (
        <div className='layout'>
            <Navbar />
            <Shapka />
            <Urgench />
            <Footer />
        </div>
    )
};