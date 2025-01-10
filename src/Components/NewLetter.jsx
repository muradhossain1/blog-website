import toast from "react-hot-toast";


const NewLetter = () => {

    const handleSubscribe = (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        console.log(email)
        toast.success('Thank you for subscribing to our newsletter')
        form.reset();
    }
    return (
        <div className="hero bg-base-300 rounded-lg  mt-16">
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-4 md:p-8 ">
                    <img
                        src="https://i.ibb.co.com/G9hJ3Jr/news-Letter.jpg"
                        className=" rounded-lg shadow-2xl" />
                </div>
                <div className="lg:w-1/2 rounded-lg p-4 md:m-8 bg-white">
                    <div className=" md:p-6 text-center mt-6">
                        <h1 className="text-4xl font-bold">Our Newsletter</h1>
                        <p className="py-4 text-lg font-medium text-gray-500">
                            Keep up our latest news and events. Subscribe our Newsletter.
                        </p>
                        <form onSubmit={handleSubscribe} className=" flex items-center justify-center ">
                            <div className="join">
                                <input 
                                type="email"
                                name="email"
                                className="input input-bordered join-item" placeholder="Enter Your Email" />
                                <button  className="btn bg-purple-600 text-white hover:bg-purple-700 join-item rounded-r-lg">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewLetter;