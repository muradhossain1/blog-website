import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";


const BlogDetails = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [blog, setBlog] = useState({})
    const [owner, setWoner] = useState(false)
    const [comments, setComments] = useState([])
    const axiosSecure = useAxiosSecure();


    const fetchBlogData = async () => {
        const { data } = await axiosSecure.get(`/blog/${id}`);
        setBlog(data)
        if (user?.email === data?.email) {
            return setWoner(true)
        }

        const comment = await axiosSecure.get(`/comment/${id}`);
        setComments(comment.data)
    }
    useEffect(() => {
        fetchBlogData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const { _id, title, photo, category, shortDescript, longDescript, } = blog;

    const handleSubmitComment = async e => {
        e.preventDefault();
        const form = e.target;
        const user_email = user?.email
        const user_name = user?.displayName
        const user_photo = user?.photoURL
        const comment = form.comment.value

        const commentData = { blog_Id: _id, comment, user_email, user_name, user_photo };
        console.log(commentData)
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/comments`, commentData);
            form.reset();
            console.log(data)
            toast.success('Comment successfully!!');
        } catch (err) {
            toast.error(err.response.data)
        }
    }

    return (
        <div className="card bg-base-100 lg:w-1/2 mx-auto shadow-xl p-6 border">
            <figure className="">
                <img
                    src={photo}
                    alt="Photo"
                    className="rounded-xl w-full h-full" />
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
                <div>
                    {
                        owner ?
                            <div>
                                <div>
                                    <p className='text-lg font-semibold  '> Comment :</p>
                                    <p className="mt-2 text-base text-gray-500">Can not comment on own blog</p>
                                </div>
                                <div className="flex justify-end">
                                    <button className='disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white mt-2 transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                                        <Link to={`/update/${_id}`}>Update</Link>
                                    </button>
                                </div>
                            </div>
                            :
                            <div>
                                <form onSubmit={handleSubmitComment}>
                                    <div className='flex flex-col mt-4 '>
                                        <label className='text-lg font-semibold  ' htmlFor='description'>
                                            Comment :
                                        </label>
                                        <textarea
                                            name='comment'
                                            id='comment'
                                            placeholder="Enter Your Comment"
                                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                        ></textarea>
                                    </div>
                                    <div className="flex justify-end">
                                        <button className='disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white mt-4 transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                                            Comment
                                        </button>
                                    </div>
                                </form>

                            </div>
                    }
                </div>
                <div>
                    {
                        comments?.map(comment => <div key={comment._id} className="flex gap-4 mt-4">
                            <img src={comment.user_photo} alt="" className="w-12 h-12 rounded-full" />
                            <div>
                                <h2 className="text-base font-medium text-gray-800">{comment.user_name}</h2>
                                <div className="flex gap-3">
                                    <p className="text-base font-medium text-gray-500">{comment.comment}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;