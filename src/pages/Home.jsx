import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import BlogCrad from "../Components/BlogCrad";
import NewLetter from "../Components/NewLetter";



const Home = () => {
    const blogs = useLoaderData();
    return (
        <div>
            {/* banner */}
            <div>
                <Banner></Banner>
            </div>
            <main className="mt-12">
                {/* recent blogs section */}
                <div>
                    <h2 className="text-2xl md:text-4xl text-center font-bold ">Recent Blogs Posts </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-12 lg:px-32 mt-6">
                        {
                            blogs.map(blog => <BlogCrad key={blog._id} blog={blog}></BlogCrad>)
                        }
                    </div>
                </div>

                {/* News letter section */}
                <div>
                    <NewLetter></NewLetter>
                </div>
            </main>

            {/* extra two sections */}
            <div></div>
        </div>
    );
};

export default Home;