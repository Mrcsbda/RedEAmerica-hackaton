import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicRoutes from './publicRoutes/PublicRoutes'
import PrivateRoutes from './privateRoutes/PrivateRoutes'
import Layout from '../pages/layout/Layout'
import Home from '../pages/home/Home'
import { useDispatch, useSelector } from 'react-redux'
import Post from '../pages/post/Post'
import Comments from '../pages/comments/Comments'
import DashboardAdmin from '../pages/dashboardAdmin/DashboardAdmin'
import Login from '../pages/login/Login'
import SignUp from '../pages/signUp/SignUp'
import UserProfile from '../pages/userProfile/UserProfile'
import LandingPage from '../pages/landingPage/LandingPage'
import Members from '../pages/members/Members'
import AddPost from '../pages/addPost/AddPost'
import ContactForm from '../pages/contactForm/ContactForm'
import { setIsAuthenticated, setRole, setUserLogged } from '../store/slides/auth/auth'
import FilterPost from '../pages/filterPosts/FilterPost'

const AppRouter = () => {
    const { role, isAuthenticated } = useSelector(state => state.auth)
    const [validateAuth, setValidateAuth] = useState(false);
    const dispatch = useDispatch();
    const userSession = JSON.parse(sessionStorage.getItem("user"));

    useEffect(() => {
        if (userSession?.id) {
            dispatch(setUserLogged(userSession));
            dispatch(setIsAuthenticated());
            dispatch(setRole(userSession.rol));
        }
        setValidateAuth(true);
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                {
                    validateAuth && (
                        <>
                            <Route element={<PublicRoutes isAuthenticated={isAuthenticated} />}>
                                <Route path='/' element={<LandingPage />} />
                                <Route path='/login' element={<Login />} />
                                <Route path='/signUp' element={<SignUp />} />
                            </Route>
                            <Route element={<PrivateRoutes isAuthenticated={isAuthenticated} />}>
                                {
                                    role === "ADMIN" ? (
                                        <Route path='/home' element={<DashboardAdmin />} />
                                    ) : (
                                        <Route path='/home' element={<Layout />}>
                                            <Route index element={<Home />} />
                                            <Route path="post">
                                                <Route path=":postId" element={<Post />} />
                                            </Route>
                                            <Route path="comments">
                                                <Route path=":postId" element={<Comments />} />
                                            </Route>
                                            <Route path='add-post' element={<AddPost />} />
                                            <Route path='profile' element={<UserProfile />} />
                                            <Route path='members' element={<Members />} />
                                            <Route path='filter' element={<FilterPost />} />
                                            <Route path="filter">
                                                <Route path=":filterAplied" element={<FilterPost />} />
                                            </Route>

                                        </Route>
                                    )
                                }

                            </Route>
                        </>
                    )
                }
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter