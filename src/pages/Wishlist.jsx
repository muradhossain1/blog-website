import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";



const Wishlist = () => {
    const { user, theme } = useAuth();
    const [blogs, setBlogs] = useState([]);
    const axiosSecure = useAxiosSecure();

    const fetchAllBlogs = async (user) => {
        const { data } = await axiosSecure.get(`/wishlist?email=${user?.email}`);
        setBlogs(data)
    }
    useEffect(() => {
        fetchAllBlogs(user)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])


    const handleRemove = async (id) => {
        try {
            const { data } = await axiosSecure.delete(`/wishlist/${id}`);
            console.log(data)
            toast.success('Remove wishlist Successfully')
            fetchAllBlogs(user)
            // setBlogs(data)
        }
        catch (err) {
            toast.error(err.message)
        }

    }
    return (
        <div className="overflow-x-auto ">
            <h2 className={`text-2xl md:text-4xl text-center font-bold my-8 ${theme === 'light' ? '' : 'text-white'}`}>My Wishlist Blogs</h2>
            <table className="table">
                {/* head */}
                <thead className={`${theme === 'light' ? 'bg-green-50' : 'text-white'}`}>
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
                <tbody className=" text-base font-semibold">
                    {/* row 1 */}
                    {
                        blogs?.map((blog, index) => <tr key={blog._id}>
                            <th>{index + 1}</th>
                            <td><img className="w-20 h-10 rounded-xl" src={blog.photo} alt="" /></td>
                            <td>{blog.title}</td>
                            <td>{blog.category}</td>
                            <td>{blog.shortDescript?.substring(0, 15)}...</td>
                            <td>{blog.longDescript?.substring(0, 15)}...</td>
                            <td className="flex gap-3">
                            <Link className="px-4 py-2 text-base text-white font-medium my-2 bg-purple-600 rounded-lg hover:bg-purple-700" to={`/details/${blog.blog_Id}`}>Details</Link>
                                <button onClick={() => handleRemove(blog._id)} className="px-4 py-2 text-base font-medium my-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg ">Remove</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Wishlist;