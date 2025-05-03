import React from 'react'
import Navbar from '../components/Navbar'
import Shapka from '../components/Shapka'
import Khiva from './Khiva'
import Footer from '../components/Footer'

export default function page() {
    return (
        <div className='layout'>
            <Navbar />
            <Shapka />
            <Khiva />
            <Footer />
        </div>
    )
};