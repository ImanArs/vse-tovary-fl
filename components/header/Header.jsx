import React from 'react'
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { AiOutlinePercentage, AiFillHeart } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { RiBarChartFill } from 'react-icons/ri';



import styles from '@/components/header/Header.module.scss'
import Link from 'next/link';

import NavBar from './NavBar';


const Header = () => {
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
            <p><a href="">+7 (495) 647-10-00</a></p>
            <p><a href="">8 800 550-37-70</a></p>
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
            <input type="text" required placeholder='Поиск среди 1 000 000 товаров. Введите запрос'/>
            <button type='submit'><FiSearch/></button>
          </form>
          <p className={styles.header_wrapper_btm__tools}><RiBarChartFill color='#d60000' /> Сравнение</p>
          <p className={styles.header_wrapper_btm__tools}><AiFillHeart color='#d60000' /> <Link  href="/">Избранное</Link></p>
          <p className={styles.header_wrapper_btm__tools}><FaShoppingCart color='#d60000' /><Link  href="/basket"> Корзина </Link></p>
        </div>
      </div>
      <hr />
    </header>
  )
}

export default Header