import axios from "axios";
import { useEffect, useState } from "react";
import BlogCrad from "../Components/BlogCrad";


const AllBlogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const fetchAllBlogs = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-blogs`);
            setBlogs(data)
        }
        fetchAllBlogs()
    }, [])

    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5 mt-4 '>
                <div>
                    <select
                        name='category'
                        id='category'
                        className='border px-4 py-3 rounded-lg'
                    >
                        <option value='' >Filter By Category</option>
                        <option value='Food Blog'>Food Blog</option>
                        <option value='Travel Blog'>Travel Blog</option>
                        <option value='Fashion Blog'>Fashion Blog</option>
                    </select>
                </div>

                <form>
                    <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                        <input
                            className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                            type='text'
                            name='search'
                            placeholder='Enter Blog Title'
                            aria-label='Enter Blog Title'
                        />

                        <button className='px-1 md:px-4 py-2 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-purple-600 rounded-md hover:bg-purple-700 '>
                            Search
                        </button>
                    </div>
                </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {
                    blogs.map(blog => <BlogCrad key={blog._id} blog={blog}></BlogCrad>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;