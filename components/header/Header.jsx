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

    const [isAuth, setIsAuth] = useState('')
    // let user = localStorage.getItem('access_token') || '';
    useEffect(() => {
        setIsAuth(localStorage.getItem('access_token'))
        console.log(isAuth);
        const fetchData = async () => {
            try {
                const response = await axios.get('http://51.20.95.11:8000/api/v1/product/', {
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

    const handleLogOut = () => {
        setIsAuth(false)
        localStorage.removeItem('access_token')
    }

    return (
        <header className={styles.header}>
            <div className={styles.header_wrapper}>
                <div className={styles.header_wrapper_top}>
                    <div className={styles.header_wrapper_top__images}>
                        <Link href={`/`}>
                            <img className={styles.logo} src="/logo-red-1.svg" alt="Logo" />
                        </Link>
                        {/* <img className={styles.image} src="/skidki.png" alt="" /> */}
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
                    {
                        isAuth?
                            <button onClick={() => handleLogOut()} className='px-[15px] py-[5px] rounded-[5px] bg-[#d60000] text-[#fff]'>Выйти</button>
                        
                            :
                            <div className={styles.header_wrapper_top__auth}>
                            <FaUser color="#d60000" />
                            <Link href="/signup">
                                Войти
                            </Link>
                            <hr />
                            <Link href="/signin" onMouseEnter={openModal} onMouseLeave={closeModal}>
                                Регистрация
                            </Link>
                            
                        </div>
                    }
                </div>
                <div className={styles.header_wrapper_btm}>
                    <div className={styles.header_wrapper_btm__catalog}>
                        <NavBar />
                    </div>
                    {/* <p className={styles.header_wrapper_btm__tools}>
                        <AiOutlinePercentage color="#d60000" />
                        Акции
                    </p> */}
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
                       <div className='flex gap-4'>
                         <Link href="/" className={styles.header_wrapper_btm__tools}>
                            <AiFillHeart color="#d60000" />
                       <span>
                          Избранное
                       </span>
                        </Link>

                        
                        <Link href="/cart" className={styles.header_wrapper_btm__tools}> 
                        <FaShoppingCart color="#d60000" />
                         <span>

                         Корзина 
                         </span>
                         </Link>
                       </div>
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
