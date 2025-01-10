import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import logoBlog from '../../public/fabicon.png'


const Navber = () => {
    const { user, userLogout } = useAuth();
    const navigate = useNavigate();

    const handleUserLogout = () => {
        userLogout()
            .then(() => {
                navigate('/')
            })
    }

    const links = <>
        <li className="font-semibold"><Link to='/'>Home</Link></li>
        <li className="font-semibold"><Link to='/all-blogs'>All Blogs</Link></li>
        <li className="font-semibold"><Link to='/add-blogs'>Add Blogs</Link></li>
        <li className="font-semibold"><Link to='/featured'>Featured</Link></li>
        <li className="font-semibold"><Link to='/my-wishlist'>Wishlist </Link></li>
    </>
    return (
        <div className="navbar fixed top-0 z-10 md:px-10 lg:px-20 bg-green-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center gap-3">
                    <img className="w-8 hidden lg:block" src={logoBlog} alt="" />
                    <Link to='/' className="text-lg md:text-2xl font-bold text-gray-800 ">Blog Website</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="mr-6">
                            <img referrerPolicy="no-referrer" className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" />
                        </div>
                        <button onClick={handleUserLogout} className=" px-4 py-2 text-base font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700">LogOut</button>
                    </>
                        :
                        <div>
                            <Link to='/register'><button className=" px-4 py-2 text-base font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 mr-2">Register</button></Link>
                            <Link to='/login'><button className=" px-4 py-2 text-base font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700">LogIn</button></Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navber;