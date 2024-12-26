import axios from "axios";
import { useEffect, useState } from "react";


const FeaturedBlogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const fetchFeatured = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/featured`);
            setBlogs(data)
        }
        fetchFeatured()
    }, [])
    return (
        <div className="overflow-x-auto ">
            <h2 className="text-2xl md:text-4xl text-center font-bold py-8">Featured Blogs top 10 posts</h2>
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
                    </tr>
                </thead>
                <tbody className="text-base font-semibold ">
                    {/* row 1 */}
                    {
                        blogs.map((blog, index) => <tr key={blog._id}>
                            <th>{index + 1}</th>
                            <td><img className="w-20 h-10 rounded-xl" src={blog.photo} alt="" /></td>
                            <td>{blog.title}</td>
                            <td className="text-purple-600">{blog.category}</td>
                            <td>{blog.shortDescript.substring(0, 20)}...</td>
                            <td>{blog.longDescript.substring(0, 20)}...</td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>

    );
};

export default FeaturedBlogs;