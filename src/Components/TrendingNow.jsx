import { FaCheckCircle } from "react-icons/fa";


const TrendingNow = () => {
    return (
        <div className="mt-12">
            <h2 className="text-2xl md:text-4xl font-bold ">Tranding Now </h2>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="hero border rounded-lg p-4 mt-6">
                    <div className="flex flex-col gap-4 lg:flex-row">
                        <div className="md:w-1/2 ">
                            <img
                                src="https://i.ibb.co.com/vvD4XFv/sports.jpg"
                                className="h-full w-full md:h-[350px] rounded-lg shadow-2xl" />
                        </div>
                        <div className="md:w-1/2 py-6  rounded-lg">
                            <div className="flex justify-end">
                                <p className="px-6 text-center font-medium rounded-full  py-1 text-purple-600 bg-purple-100/60">Sports</p>
                            </div>
                            <h1 className="text-xl font-bold mt-4">Playing football with your feet is one thing.</h1>
                            <p className="py-2 text-base font-medium text-gray-500">
                                The sport of soccer involves solely using your feet to control and play during the game.
                            </p>
                            <div className="flex gap-4 mt-4">
                                <img src="https://i.ibb.co.com/J7V3pK7/author.jpg" alt="" className="w-12 h-12 rounded-full" />
                                <div>
                                    <h2 className="text-base font-medium text-gray-800">Jak Miller</h2>
                                    <div className="flex gap-3">
                                        <p className="text-base font-medium text-gray-500">Dec 19, 2024</p>
                                        <p className="flex items-center text-base font-medium text-gray-500"><FaCheckCircle />11 min</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero border rounded-lg p-4 mt-6">
                    <div className="flex flex-col gap-4 lg:flex-row">
                        <div className="md:w-1/2 ">
                            <img
                                src="https://i.ibb.co.com/SKwLftz/fashoin.jpg"
                                className=" h-full rounded-lg shadow-2xl" />
                        </div>
                        <div className="md:w-1/2 py-6  rounded-lg">
                            <div className="flex justify-end">
                                <p className="px-6 text-center font-medium rounded-full  py-1 text-purple-600 bg-purple-100/60">Fashions</p>
                            </div>
                            <h1 className="text-xl font-bold mt-4">Fashion is a constantly the expression of clothing.</h1>
                            <p className="py-2 text-base font-medium text-gray-500">
                            Fashion describes the creation and expression of clothing, footwear, cosmetics, and jewelry.
                            </p>
                            <div className="flex gap-4 mt-4">
                                <img src="https://i.ibb.co.com/7R8M9vG/author2.jpg" alt="" className="w-12 h-12 rounded-full" />
                                <div>
                                    <h2 className="text-base font-medium text-gray-800">Cristania</h2>
                                    <div className="flex gap-3">
                                        <p className="text-base font-medium text-gray-500">Des 14, 2024</p>
                                        <p className="flex items-center text-base font-medium text-gray-500"><FaCheckCircle />32 min</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TrendingNow;