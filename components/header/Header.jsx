'use client';
import React, { useState, useEffect } from 'react';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { AiOutlinePercentage, AiFillHeart } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { RiBarChartFill } from 'react-icons/ri';
import styles from '@/components/header/Header.module.scss';
import Link from 'next/link';
import axios from 'axios';
import NavBar from './NavBar';
import Cookies from 'universal-cookie';

const Header = () => {
    const cookie = new Cookies();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/v1/product/', {
                    headers: { Authorization: 'Bearer ' + localStorage.getItem('access_token') },
                });
                setProducts(response.data);
                if (response.data.length === 0) {
                    // Use router.push('/'); if you want to navigate to the home page
                    // This requires 'next/router' to be imported and configured.
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, []);

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
        setShowResults(e.target.value !== '');
    };

    return (
        <header className={styles.header}>
            <div className={styles.header_wrapper}>
                <div className={styles.header_wrapper_top}>
                    <div className={styles.header_wrapper_top__images}>
                        <Link href={`/`}>
                            <img className={styles.logo} src="/logo-red.png" alt="Logo" />
                        </Link>
                        <img src="/skidki.png" alt="" />
                    </div>
                    <div className={styles.header_wrapper_top__phone}>
                        <p>
                            <Link href="#">+7 (495) 647-10-00</Link>
                        </p>
                        <p>
                            <Link href="#">8 800 550-37-70</Link>
                        </p>
                        <p>Звонок бесплатный 05:00 – 22:00</p>
                    </div>
                    <div className={styles.header_wrapper_top__auth}>
                        <FaUser color="#d60000" />
                        <Link href="/signup">
                            Войти<span></span>
                        </Link>
                        <hr />
                        <Link href="/signin" onMouseEnter={openModal} onMouseLeave={closeModal}>
                            Регистрация
                        </Link>
                        {isModalOpen && (
                            <div
                                onMouseEnter={openModal}
                                onMouseLeave={closeModal}
                                className="z-10 absolute transform -translate-x-[50%] -translate-y-[113%] p-3 border-orange-400 border-2 rounded-md border-spacing-14 bg-white w-[200px]">
                                <p className="text-[12px] font-bold">Placeholder Translation</p>
                                <p className="text-[11px]">
                                    Адрес: г.Бишкек ул.Орозбекова, д. 2/2, офис. №7
                                </p>
                                <p className="text-[11px]">Placeholder Translation</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.header_wrapper_btm}>
                    <div className={styles.header_wrapper_btm__catalog}>
                        <NavBar />
                    </div>
                    <p className={styles.header_wrapper_btm__tools}>
                        <AiOutlinePercentage color="#d60000" />
                        Акции
                    </p>
                    <form action="" className={styles.header_wrapper_btm__search}>
                        <input
                            type="text"
                            required
                            placeholder="Поиск среди 1 000 000 товаров. Введите запрос"
                            value={searchQuery}
                            onChange={handleInputChange}
                        />
                        <button type="submit">
                            <FiSearch />
                        </button>
                    </form>
                    <p className={styles.header_wrapper_btm__tools}>
                        <AiFillHeart color="#d60000" /> Избранное
                    </p>
                    <p className={styles.header_wrapper_btm__tools}>
                        <FaShoppingCart color="#d60000" />
                        <Link href="/cart"> Корзина </Link>
                    </p>
                </div>
                <div className={styles.product_input}>
                    {showResults && (
                        <div className={styles.productList}>
                            {filteredProducts.length === 0 ? (
                                <p>Подходящие товары не найдены.</p>
                            ) : (
                                filteredProducts.map((product) => (
                                    <div key={product.id} className={styles.product}>
                                        <div>
                                            <img src={product.image} alt={product.name} />
                                        </div>
                                        <div>
                                            <h3>{product.name}</h3>
                                            <p>{product.price} p.</p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    )}
                </div>
            </div>
            <hr />
        </header>
    );
};

export default Header;
