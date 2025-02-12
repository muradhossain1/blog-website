/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";


const BlogCrad = ({ blog }) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const { _id, photo, title, category, shortDescript, longDescript } = blog;

    const handleWishlist = async () => {
        if(!user) {
            return navigate('/login')
        }

        const wishlistData = { blog_Id: _id, photo, title, category, shortDescript, longDescript, email: user?.email, user_photo: user?.photoURL };

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/wishlists`, wishlistData);
            console.log(data)
            toast.success('Add Wishlist successfully!!');
        } catch (err) {
            toast.error(err.response.data)
        }
    }
    return (
        <div className="card bg-base-100 shadow-xl p-4 border">
            <figure className="">
                <img
                    src={photo}
                    alt="Photo"
                    className="rounded-xl w-full h-36" />
            </figure>
            <div className=" space-y-4 mt-4 ">
                <h2 className="card-title font-bold">{title}</h2>
                <div className="flex items-center gap-2">
                    <p className="font-semibold text-lg">Category : </p>
                    <p className="px-4 mt-1 font-medium border border-purple-600 text-center text-base rounded-full  text-purple-600 bg-purple-100/60">{category}</p>
                </div>
                <div className="">
                    <p className="font-semibold text-lg">Description : </p>
                    <p className="text-base text-gray-500">{shortDescript}</p>
                </div>

                <div className="card-actions grid grid-cols-2">
                    <button className="w-full px-4 py-2 text-base font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700">
                        <Link to={`/details/${_id}`}>Details</Link>
                    </button>
                    <button onClick={handleWishlist} className="w-full px-4 py-2 text-base text-purple-700 font-medium border rounded-md border-purple-600 hover:bg-purple-600 hover:text-white">
                        <Link to={`/my-wishlist`}>Wishlist</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogCrad;