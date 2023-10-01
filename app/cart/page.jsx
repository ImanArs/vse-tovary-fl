'use client';
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';

import styles from './Cart.module.scss';

const page = () => {
    const [inputSearch, setInputSearch] = useState('');

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log(inputSearch);
        setInputSearch('');
    };
    return (
        <main className={styles.cart}>
            <div className={styles.cartHeading}>
                <h1>Корзина</h1>
                <span>№ 1695-1984-38867</span>
            </div>
            <form onSubmit={handleSearchSubmit} className={styles.cartSearch}>
                <input
                    type="text"
                    placeholder="Быстрое добавление: введите наименование или код товара"
                    value={inputSearch}
                    onChange={(e) => setInputSearch(e.target.value)}
                />
                <button>
                    <FiSearch color="#666" />
                </button>
            </form>
            <div className={styles.cartItems}>
                <div className={styles.cart_wrapper}>
                    <div className={styles.cart_wrapper__tabs}>
                        <p>Наименование</p>
                        <p>Цена</p>
                        <p>Кол-во</p>
                        <p>Стоимость</p>
                    </div>
                    <hr />
                    <div className={styles.products}>
                        <div className={styles.product_wrapper}>
                            <div className={styles.product_wrapper__name}>
                                <img
                                    src="https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/1760653/98x88/53326035.jpg"
                                    alt=""
                                />
                                <div className={styles.product_wrapper__name_info}>
                                    <div>Лучшая цена</div>
                                    <span>код: 17476254</span>
                                    <p>Дрель-шуруповерт AEG BS18G4-202C 4935478630</p>
                                    <span>
                                        Можно забрать <b>сегодня</b>
                                    </span>
                                </div>
                            </div>
                            <div className={styles.product_wrapper__price}>13014р</div>
                            <div>кол-во</div>
                            <div>13 014 р.</div>
                            <div className={styles.userTools}>
                                <AiOutlineHeart /> <MdDeleteOutline />{' '}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.cartBill}>
                    <h2>Ваш заказ</h2>
                    <p>
                        Выбрано товаров: <span>1</span>
                    </p>
                    <p>
                        Вес заказа: <span>1кг</span>
                    </p>
                    <p>
                        Общая стоимость: <span className={styles.bill}>13014p</span>
                    </p>
                    <div className={styles.cartBill_promocode}>
                        <input type="text" name="" id="" placeholder="Введите промокод" />
                        <span title="введите промокод"> ? </span>
                    </div>
                    <hr />
                    <div className={styles.cartBill_btns}>
                        <button>Оформить заказ</button>
                        <button>Оформить без регистрации</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default page;
