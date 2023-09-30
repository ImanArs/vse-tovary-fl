'use client';
import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/sidebar/Sidebar';
import CategoryRoutes from '@/features/slices/categoryRotes';
import ProdCard from '@/components/ProdCard/ProdCard';
import Image from 'next/image'

import styles from '@/styles/main/main.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import ProdSlider from '@/components/ProdSlider/ProdSlider';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false)
    const openModal = () => {
        setIsModalOpen(true);
    };
    useEffect(() => {
        console.log(isHovered);
    },[isHovered])
    const closeModal = () => {
        setIsModalOpen(false);
    };

let prods = [
    {
      id:1,
      image: 'https://cdn.vseinstrumenti.ru/res/content/page_templates/9766f966ed60757e90704ae6e037a44a.jpeg',
      name: 'propeler',
      price: 2000
    },
    {
      id:2,
      image: 'https://cdn.vseinstrumenti.ru/res/content/page_templates/e02736054a0becf739b254aa5c5717f9.jpeg',
      name: 'lol',
      price: 2000
    },
    {
      id:3,
      image: 'https://cdn.vseinstrumenti.ru/res/content/page_templates/8ca1db2f0b695a32d644fdae1adf6b3a.jpeg',
      name: 'qwertt',
      price: 2000
    },
    {
      id:4,
      image: 'https://cdn.vseinstrumenti.ru/res/content/page_templates/e02736054a0becf739b254aa5c5717f9.jpeg',
      name: 'propeler',
      price: 2000
    },
    {
        id:5,
        image: 'https://cdn.vseinstrumenti.ru/res/content/page_templates/8ca1db2f0b695a32d644fdae1adf6b3a.jpeg',
        name: 'lol',
        price: 2000
    },
    {
        id:6,
        image: 'https://cdn.vseinstrumenti.ru/res/content/page_templates/9766f966ed60757e90704ae6e037a44a.jpeg',
        name: 'qwertt',
        price: 2000
    },
  ]
    return (
        <main>
            <CategoryRoutes />
            <div className={styles.main_wrapper}>
                <div className={styles.main_wrapper__left}>

                </div>
                <div className={styles.main_wrapper__right}>
                    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className='mySwiper'>  
                        <Swiper
                            rewind={true}
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={isHovered}
                            modules={[Autoplay, Navigation]}
                        >
                            <SwiperSlide><img src='https://cdn.vseinstrumenti.ru/imgtmbnf/992x416/res/img/AdFox/992x416_glavnaya_ov_1692194485.jpg' alt=''/></SwiperSlide>
                            <SwiperSlide><img src='https://cdn.vseinstrumenti.ru/imgtmbnf/992x416/res/img/AdFox/992-416-3_1694167317.jpg' alt=''/></SwiperSlide>
                            <SwiperSlide><img src='https://cdn.vseinstrumenti.ru/imgtmbnf/992x416/res/img/AdFox/992x416_glavnaya_ov__5__1689679858.jpg' alt=''/></SwiperSlide>
                            <SwiperSlide><img src='https://cdn.vseinstrumenti.ru/imgtmbnf/992x416/res/img/AdFox/gigani-k-_a-_kop-_l-_-_-992-_416_1676886082.jpg' alt=''/></SwiperSlide>
                            <SwiperSlide><img src='https://cdn.vseinstrumenti.ru/imgtmbnf/992x416/res/img/AdFox/992x416_glavnaya_ov__11__1694812347.jpg' alt=''/></SwiperSlide>
                            <SwiperSlide><img src='https://cdn.vseinstrumenti.ru/imgtmbnf/992x416/res/img/AdFox/992-_416_ov_1693720247.jpg' alt=''/></SwiperSlide>
                            <SwiperSlide><img src='https://cdn.vseinstrumenti.ru/res/content/banners/home_page_top_placeholder_2.jpg' alt=''/></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className={styles.popular}>
                        <div>
                            <img src="https://cdn.vseinstrumenti.ru/res/content/page_templates/8ca1db2f0b695a32d644fdae1adf6b3a.jpeg" alt="" />
                        </div>
                        <div>
                            <img src="https://cdn.vseinstrumenti.ru/res/content/page_templates/e02736054a0becf739b254aa5c5717f9.jpeg" alt="" />
                        </div>
                        <div>
                            <img src="https://cdn.vseinstrumenti.ru/res/content/page_templates/9766f966ed60757e90704ae6e037a44a.jpeg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2>Ваша подборка популярных товаров</h2>
                <ProdSlider arr={prods} />
            </div>
            <div>
                <h2>Ваша подборка товаров со скидкой</h2>
                <ProdSlider arr={prods} />
            </div>
            <div>
                <h2>Ваша подборка товаров для дома</h2>
                <ProdSlider arr={prods} />
            </div>
            <div>
                <h2>Ваша подборка популярных товаров</h2>
                <ProdSlider arr={prods} />
            </div>
        </main>
    );
}