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
import { setUserLogged } from '../store/slides/auth/auth'

const AppRouter = () => {
    const { role, isAuthenticated } = useSelector(state => state.auth)
    const [validateAuth, setValidateAuth] = useState(false);
    const dispatch = useDispatch();
    const userSession = JSON.parse(sessionStorage.getItem("user"));

    useEffect(() => {
        if(userSession?.id){
            setValidateAuth(true);
            dispatch(setUserLogged(userSession));
        }
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
                                            <Route path='profile'>
                                                <Route path=":memberId" element={<UserProfile />} />
                                            </Route>
                                            <Route path='members' element={<Members />} />
                                            <Route path='contact'>
                                                <Route path=":memberId" element={<ContactForm />} />
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