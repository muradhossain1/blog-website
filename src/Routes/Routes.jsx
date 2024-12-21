import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import AllBlogs from '../pages/AllBlogs'
import AddBlogs from '../pages/AddBlogs'
import FeaturedBlogs from '../pages/FeaturedBlogs'
import Wishlist from '../pages/Wishlist'
import PrivateRoute from './PrivateRoute'

const routes = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        errorElement: <p>Data no found</p>,
        children : [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/all-blogs',
                element: <AllBlogs></AllBlogs>
            },
            {
                path: '/add-blogs',
                element: <PrivateRoute><AddBlogs></AddBlogs></PrivateRoute>
            },
            {
                path: '/featured-blogs',
                element: <FeaturedBlogs></FeaturedBlogs>
            },
            {
                path: '/my-wishlist',
                element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])

export default routes