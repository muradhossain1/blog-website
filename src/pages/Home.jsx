import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import BlogCrad from "../Components/BlogCrad";
import NewLetter from "../Components/NewLetter";
import TrendingNow from "../Components/TrendingNow";
import EfficientSection from "../Components/EfficientSection";
import useAuth from "../hooks/useAuth";



const Home = () => {
    const { theme } = useAuth();
    const blogs = useLoaderData();
    return (
        <div>
            {/* banner */}
            <div>
                <Banner></Banner>
            </div>
            <main >
                {/* recent blogs section */}
                <div>
                    <h2 className={`text-2xl my-8 md:text-4xl text-center font-bold ${theme === 'light' ? '' : 'text-white'}`}>Recent Blogs Posts </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {
                            blogs.map(blog => <BlogCrad key={blog._id} blog={blog}></BlogCrad>)
                        }
                    </div>
                </div>
            </main>

            {/* extra two sections */}
            <div>
                {/* extra 1st section */}
                <div>
                    <TrendingNow></TrendingNow>
                </div>
                {/* extra 2nd section */}
                <div>
                    <EfficientSection></EfficientSection>
                </div>
                {/* News letter section */}
                <div>
                    <NewLetter></NewLetter>
                </div>
            </div>
        </div>
    );
};

export default Home;