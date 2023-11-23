import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoutes = ({ isAuthenticated }) => {
    return (
        <>
            {isAuthenticated ? < Navigate to="/admin" /> : <Outlet />}
        </>
    )
}

export default PublicRoutes