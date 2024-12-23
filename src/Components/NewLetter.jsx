

const NewLetter = () => {
    return (
        <div className="hero bg-base-300 rounded-lg  mt-12">
            <div className="flex flex-col lg:flex-row">
                <div className="md:w-1/2 p-8">
                    <img
                        src="https://i.ibb.co.com/G9hJ3Jr/news-Letter.jpg"
                        className="w-full md:max-w-lg rounded-lg shadow-2xl" />
                </div>
                <div className="md:w-1/2 rounded-lg m-8 bg-white">
                    <div className="bg-white p-6 text-center mt-6">
                        <h1 className="text-4xl font-bold">Our Newsletter</h1>
                        <p className="py-4 text-lg font-medium text-gray-500">
                            Keep up our latest news and events. Subscribe our Newsletter.
                        </p>
                        <div className=" flex items-center justify-center ">
                            <div className="join">
                                <input 
                                className="input input-bordered join-item" placeholder="Enter Your Email" />
                                <button className="btn btn-warning join-item rounded-r-lg">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewLetter;