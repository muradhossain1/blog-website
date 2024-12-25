/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";


const BlogCrad = ({ blog }) => {
    const { user } = useAuth();
    const { _id, photo, title, category, shortDescript, longDescript } = blog;

    const handleWishlist = async () => {

        const wishlistData = { blog_Id: _id, photo, title, category, shortDescript,longDescript, email: user?.email, user_photo: user?.photoURL };

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/wishlists`, wishlistData);
            console.log(data)
            toast.success('Add Wishlist successfully!!');
        } catch (err) {
            toast.error(err.response.data)
        }
        console.log(wishlistData)
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
                <p className="font-semibold text-lg">Category : <span className="text-base text-purple-600">{category}</span></p>
                <div className="">
                    <p className="font-semibold text-lg">Description : </p>
                    <p className="text-base text-gray-500">{shortDescript}</p>
                </div>

                <div className="card-actions grid grid-cols-2">
                    <button className="w-full px-4 py-2 text-base font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700">
                        <Link to={`/details/${_id}`}>Details</Link>
                    </button>
                    <button onClick={handleWishlist} className="w-full px-4 py-2 text-base font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700">
                        <Link to={`/my-wishlist`}>Wishlist</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogCrad;