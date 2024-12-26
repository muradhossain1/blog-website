
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";


const AddBlogs = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const photo = form.photo.value;
        const category = form.category.value
        const shortDescript = form.shortDescript.value
        const longDescript = form.longDescript.value

        const formData = {
            title,
            photo,
            category,
            email: user?.email,
            shortDescript,
            longDescript,
        };

        try{
            axiosSecure.post(`/blogs`, formData);
        
            form.reset();
            toast.success('Blog added successfully!!');
            navigate('/all-blogs')
          }
          catch(err){
            toast.error(err.message)
          }
    }
    return (
        <div className='md:flex justify-center items-center min-h-[calc(100vh-306px)] mt-4'>
            <section className=' p-2 md:p-6 mx-auto border bg-white rounded-md shadow-md '>
                <h2 className='text-xl font-bold text-gray-700 capitalize '>
                    Create a New Blog Post
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        {/* blog title */}
                        <div>
                            <label className='text-gray-700 text-base font-medium ' htmlFor='blog-title'>
                                Blog Title
                            </label>
                            <input
                                id='title'
                                name='title'
                                placeholder="Title"
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        {/* blog category */}
                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700 text-base font-medium ' htmlFor='category'>
                                Category
                            </label>
                            <select
                                name='category'
                                id='category'
                                className='border p-2 rounded-md'
                                defaultValue="Pick your Category"
                            >
                                <option disabled>Pick your Category</option>
                                <option value='Food Blog'>Food Blog</option>
                                <option value='Travel Blog'>Travel Blog</option>
                                <option value='Fashion Blog'>Fashion Blog</option>
                            </select>
                        </div>
                    </div>
                    {/* blog image */}
                    <div className='flex flex-col mt-4'>
                        <label className='text-gray-700 text-base font-medium' htmlFor='photo'>
                            Photo URL
                        </label>
                        <input
                            id='photo'
                            name='photo'
                            type='text'
                            placeholder="Photo Url"
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                        />
                    </div>
                    {/* blog sort text */}
                    <div className='flex flex-col mt-4'>
                        <label className='text-gray-700 text-base font-medium  ' htmlFor='description'>
                            Short Description
                        </label>
                        <textarea
                            name='shortDescript'
                            id='description'
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                        ></textarea>
                    </div>
                    {/* blog long text */}
                    <div className='flex flex-col mt-4'>
                        <label className='text-gray-700 text-base font-medium ' htmlFor='description'>
                            Long Description
                        </label>
                        <textarea
                            name='longDescript'
                            id='description'
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                        ></textarea>
                    </div>
                    <div className='flex justify-end mt-6'>
                        <button className='disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddBlogs;