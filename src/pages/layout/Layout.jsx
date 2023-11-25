import React from 'react'
import Header from '../../components/header/Header'
import { Outlet } from 'react-router-dom'
import "./layout.scss"
const Layout = () => {
    return (
        <main className='layout'>
            <Header />
            <Outlet />
        </main>
    )
}

export default Layout