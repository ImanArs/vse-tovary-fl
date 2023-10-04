import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import SliderCard from './SliderCard';

const ProdSlider = ({ route }) => {

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
                {route?.products?.length > 0 ? (
                    route?.products?.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            <SliderCard
                                href={`/category/${route.parent_category.name}/${route.name}/${item.id}`}
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