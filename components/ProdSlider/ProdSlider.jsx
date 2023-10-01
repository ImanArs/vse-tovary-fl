import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import ProdCard from '../ProdCard/ProdCard';
import SliderCard from './SliderCard';

const ProdSlider = ({ arr = [] }) => {
    return (
        <div>
            <Swiper
                rewind={true}
                slidesPerView={5}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="my-slider">
                {arr.length > 0 ? (
                    arr?.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            <SliderCard
                                key={item.id}
                                image={item.image1}
                                name={item.name}
                                price={item.price}
                                productId={item.id}
                            />
                        </SwiperSlide>
                    ))
                ) : (
                    <h3>Loading...</h3>
                )}
            </Swiper>
        </div>
    );
};

export default ProdSlider;
