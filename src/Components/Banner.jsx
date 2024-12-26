import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Banner = () => {
    return (
        <div className="carousel border p-6 rounded-xl w-full mt-6">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper rounded-lg'
            >
                <SwiperSlide id="slide1" className="carousel-item relative w-full">
                    <div
                        className='w-full bg-center bg-cover h-[28rem]'
                        style={{
                            backgroundImage: `url('https://i.ibb.co.com/zfH7ZSp/travel.jpg')`,
                        }}
                    >
                        <div className='flex items-center justify-center w-full h-full bg-gray-700/60 '>
                            <div className=''>
                                <h1 className='text-xl font-semibold text-gray-200 lg:text-4xl'>
                                    Travel Blogs
                                </h1>
                                <p className="text-gray-300 mt-2">A travel blog thats specifically dedicated to travel in some capacity.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id="slide1" className="carousel-item relative w-full">
                    <div
                        className='w-full bg-center bg-cover h-[28rem]'
                        style={{
                            backgroundImage: `url('https://i.ibb.co.com/X81VhBX/fashion.jpg')`,
                        }}
                    >
                        <div className='flex items-center justify-center w-full h-full bg-gray-700/60 '>
                            <div className=''>
                                <h1 className='text-xl font-semibold text-gray-200 lg:text-4xl'>
                                    Fashion Blogs
                                </h1>
                                <p className="text-gray-300 mt-2">A website or online journal that features writing about fashoin-related topics.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id="slide1" className="carousel-item relative w-full">
                    <div
                        className='w-full bg-center bg-cover h-[28rem]'
                        style={{
                            backgroundImage: `url('https://i.ibb.co.com/WPc4qDm/food.jpg')`,
                        }}
                    >
                        <div className='flex items-center justify-center w-full h-full bg-gray-700/60 '>
                            <div className=''>
                                <h1 className='text-xl font-semibold text-gray-200 lg:text-4xl'>
                                  Food Blogs
                                </h1>
                                <p className="text-gray-300 mt-2">That features content about food, cooking tips, and other food-related information.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Banner;