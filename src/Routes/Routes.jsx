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
import BlogDetails from '../pages/BlogDetails'
import UpdateBlog from '../pages/UpdateBlog'

const routes = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        errorElement: <p>Data no found</p>,
        children : [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/recent-blogs`)
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
                path: '/featured',
                element: <FeaturedBlogs></FeaturedBlogs>
            },
            {
                path: '/my-wishlist',
                element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <UpdateBlog></UpdateBlog>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/blog/${params.id}`)
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