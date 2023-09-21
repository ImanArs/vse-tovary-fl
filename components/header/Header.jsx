'use client'
import React, { useState, useEffect } from 'react'
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { AiOutlinePercentage, AiFillHeart } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { RiBarChartFill } from 'react-icons/ri';



import styles from '@/components/header/Header.module.scss'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

import NavBar from './NavBar';


const Header = () => {
      const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showResults, setShowResults] = useState(false); 
    const router = useRouter();

    useEffect(() => {
        const url = 'http://127.0.0.1:8000/api/v1/product/';
        axios
            .get(url, {
                headers: { Authorization: 'Bearer ' + localStorage.getItem('access_token') },
            })
            .then((response) => {
                setProducts(response.data);
                if (response.data.length === 0) {
                    router.push('/');
                }
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, [router]);


   const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) 
  
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
            <img className={styles.logo} src="/logo.svg" alt="Logo" />
            </Link>
            <img src="/skidki.png" alt="" />
          </div>
          <div className={styles.header_wrapper_top__phone}>
            <p><Link href="#">+7 (495) 647-10-00</Link></p>
            <p><Link href="#">8 800 550-37-70</Link></p>
            <p>Звонок бесплатный 05:00 – 22:00</p>
          </div>
          <div className={styles.header_wrapper_top__auth}>
            <FaUser color='#d60000' />
            <Link href="/signup">Войти<span></span></Link>
            <hr />
            <Link href="/signin">Регистрация</Link>
          </div>
        </div>

        <div className={styles.header_wrapper_btm}>
          <div className={styles.header_wrapper_btm__catalog}>
            <NavBar />
          </div>
          <p className={styles.header_wrapper_btm__tools}><AiOutlinePercentage color='#d60000' /> Акции</p>
          
          <form action="" className={styles.header_wrapper_btm__search}>
            {/* <input type="text" required placeholder='Поиск среди 1 000 000 товаров. Введите запрос'/> */}
             <input
                        type="text"
                        required 
                        placeholder='Поиск среди 1 000 000 товаров. Введите запрос'
                        value={searchQuery}
                        onChange={handleInputChange}
                    />
            <button type='submit'><FiSearch/></button>
          </form>
          
          <p className={styles.header_wrapper_btm__tools}><RiBarChartFill color='#d60000' /> Сравнение</p>
          <p className={styles.header_wrapper_btm__tools}><AiFillHeart color='#d60000' /> <Link  href="/">Избранное</Link></p>
          <p className={styles.header_wrapper_btm__tools}><FaShoppingCart color='#d60000' /><Link  href="/basket"> Корзина </Link></p>
        </div>
         {showResults && ( 
                <div className={styles.productList}>
                    {filteredProducts.length === 0 ? (
                        <p>Подходящие товары не найдены.</p>
                    ) : (
                        filteredProducts.map((product) => (
                            <div key={product.id} className={styles.product}>
                                <h3>{product.name}</h3>
                                {/* <p>{product.description}</p> */}
                            </div>
                        ))
                    )}
                </div>
            )}
      </div>
      <hr />
    </header>
  )
}

export default Header