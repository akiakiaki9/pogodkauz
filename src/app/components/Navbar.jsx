"use client"
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="navbar-blok">
                <Link href="/">
                    <img src="/images/logo.PNG" alt="Pogodka.uz" />
                </Link>
                <div></div>
            </div>
        </div>
    )
};