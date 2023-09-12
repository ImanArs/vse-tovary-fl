import React from 'react'
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlinePercentage, AiFillHeart } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { RiBarChartFill } from 'react-icons/ri';


import styles from '@/components/header/Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <div className={styles.header_wrapper_top}>
          <div className={styles.header_wrapper_top__images}>
            <img className={styles.logo} src="/logo.svg" alt="Logo" />
            <img src="/skidki.png" alt="" />
          </div>
          <div className={styles.header_wrapper_top__phone}>
            <p><a href="">+7 (495) 647-10-00</a></p>
            <p><a href="">8 800 550-37-70</a></p>
            <p>Звонок бесплатный 05:00 – 22:00</p>
          </div>
          <div className={styles.header_wrapper_top__auth}>
            <FaUser color='#d60000' />
            <a href="">Войти<span></span></a>
            <hr />
            <a href="">Регистрация</a>
          </div>
        </div>

        <div className={styles.header_wrapper_btm}>
          <div className={styles.header_wrapper_btm__catalog}>
            <button> <GiHamburgerMenu color='#fff' /> Каталог товаров</button>
          </div>
          <p className={styles.header_wrapper_btm__tools}><AiOutlinePercentage color='#d60000' /> Акции</p>
          <div className={styles.header_wrapper_btm__search}>
            <form action="">
              <input type="text" required/>
              <button type='submit'><FiSearch/></button>
            </form>
          </div>
          <p className={styles.header_wrapper_btm__tools}><RiBarChartFill color='#d60000' /> Сравнение</p>
          <p className={styles.header_wrapper_btm__tools}><AiFillHeart color='#d60000' /> Избранное</p>
          <p className={styles.header_wrapper_btm__tools}><FaShoppingCart color='#d60000' /> Корзина</p>
        </div>
      </div>
    </header>
  )
}

export default Header