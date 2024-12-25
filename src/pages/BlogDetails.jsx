import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";


const BlogDetails = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [blog, setBlog] = useState({})
    const [owner, setWoner] = useState(false)

    useEffect(() => {
        fetchBlogData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])
    const fetchBlogData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/blog/${id}`);
        setBlog(data)
        // 0. Cheak blog Permission validation
        if (user?.email === data?.email) {
            return setWoner(true)
        }
    }
    const { _id, title, photo, category, shortDescript, longDescript, } = blog;

    const handleSubmitComment = async e => {
        e.preventDefault();
        const form = e.target;
        const user_email = user?.email
        const user_photo = user?.photoURL
        const comment = form.comment.value

        const commentData = { blog_Id: _id, comment, user_email, user_photo };

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/comments`, commentData);
            form.reset();
            console.log(data)
            toast.success('Comment successfully!!');
        } catch (err) {
            toast.error(err.response.data)
        }
        console.log(commentData)
    }


    return (
        <div className="card bg-base-100 lg:w-1/2 mx-auto shadow-xl p-6 border">
            <figure className="">
                <img
                    src={photo}
                    alt="Photo"
                    className="rounded-xl w-full h-36" />
            </figure>
            <div className=" space-y-4 mt-4 ">
                <div className="flex items-center justify-between">
                    <h2 className="card-title font-bold">{title}</h2>
                    <div className="flex justify-end">
                        <p className="px-6 text-center font-medium rounded-full  py-1 text-purple-600 bg-purple-100/60">{category}</p>
                    </div>
                </div>
                <div className="">
                    <p className="font-semibold text-lg">Short Description : </p>
                    <p className="text-base text-gray-500">{shortDescript}</p>
                </div>
                <div className="">
                    <p className="font-semibold text-lg">Long Description : </p>
                    <p className="text-base text-gray-500">{longDescript}</p>
                </div>
                <form >
                    <div className='flex flex-col mt-4'>
                        <label className='text-gray-700 text-base font-medium  ' htmlFor='description'>
                            Comment
                        </label>
                        <textarea
                            name='comment'
                            id='comment'
                            placeholder={owner ? 'Can not comment on own blog' : 'Enter Your comment'}
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                        ></textarea>
                    </div>
                    <div className='flex justify-end mt-6'>
                        {
                            owner ?
                                <button className='disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                                   <Link to={`/update/${_id}`}>Update</Link>
                                </button> : <button onSubmit={handleSubmitComment} className='disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                                    Comment
                                </button>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BlogDetails;