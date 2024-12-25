import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";


const Wishlist = () => {
    const { user } = useAuth();
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetchAllBids()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user?.email])

    const fetchAllBids = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/wishlist?email=${user?.email}`);
        setBlogs(data)
    }
    console.log(blogs.length)
    return (
        <div className="overflow-x-auto md:px-28">
            <h2 className="text-2xl md:text-4xl text-center font-bold py-8">Featured Blogs</h2>
            <table className="table">
                {/* head */}
                <thead className="bg-blue-100 ">
                    <tr>
                        <th></th>
                        <th>Blog Photo</th>
                        <th>Blog title</th>
                        <th>Category</th>
                        <th>Short Description</th>
                        <th>Long Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-100 text-base font-semibold">
                    {/* row 1 */}
                    {
                        blogs.map((blog, index) => <tr key={blog._id}>
                            <th>{index + 1}</th>
                            <td><img className="w-20 h-10 rounded-xl" src={blog.photo} alt="" /></td>
                            <td>{blog.title}</td>
                            <td>{blog.category}</td>
                            <td>{blog.shortDescript?.substring(0, 20)}...</td>
                            <td>{blog.longDescript?.substring(0, 20)}...</td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Wishlist;