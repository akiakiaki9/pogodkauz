"use client"
import Link from 'next/link'
import React from 'react'

export default function Shapka() {
    return (
        <div className='shapka'>
            <div className="shapka-blok">
                <Link href='/tashkent'>Ташкент</Link>
                <Link href='/andijan'>Андижан</Link>
                <Link href='/bukhara'>Бухара</Link>
                <Link href='/gulistan'>Гулистан</Link>
                <Link href='/jizakh'>Джизак</Link>
                <Link href='/zarafshan'>Зарафшан</Link>
                <Link href='/karshi'>Карши</Link>
                <Link href='/navoi'>Навои</Link>
                <Link href='/namangan'>Наманган</Link>
                <Link href='/nukus'>Нукус</Link>
                <Link href='/samarkand'>Самарканд</Link>
                <Link href='/termez'>Термез</Link>
                <Link href='/urgench'>Ургенч</Link>
                <Link href='/fergana'>Фергана</Link>
                <Link href='/khiva'>Хива</Link>
            </div>
        </div>
    )
};