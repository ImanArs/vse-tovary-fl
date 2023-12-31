'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';

import styles from '../cart/Cart.module.scss';
import axios from 'axios';
import { API_URL } from '@/utils/api';

const Page = () => {
    const [inputSearch, setInputSearch] = useState('');
    const [favArr, setFavArr] = useState(null);
    const [deleteId, setDeleteId] = useState(null);
    const [token, setToken] = useState('');

    useEffect(() => {
        const localAcces = localStorage.getItem('access_token');
        setToken(localAcces);
    }, []);

    useEffect(() => {
        const favArr = JSON.parse(localStorage.getItem('favourites'));
        setFavArr(favArr);
    }, [deleteId]);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setInputSearch('');
    };

    let summary = 0;
    favArr?.forEach((elem) => {
        summary += +elem.price;
    });

    const checkImage = (img) => {
        return img.slice(0, 4) === 'http' ? img : API_URL + img;
    };

    const handleDelete = (id) => {
        setDeleteId(id);
        const favArr = JSON.parse(localStorage.getItem('favourites')) || [];
        const uptFavArr = favArr.filter((item) => item.id !== id);
        localStorage.setItem('favourites', JSON.stringify(uptFavArr));
        setDeleteId('');
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
                        {
                            favArr?.length > 0 ? (
                              favArr?.map(elem => (
                                <div className={styles.product_wrapper} key={elem.id}>
                                    <div className={styles.product_wrapper__name}>
                                        <img
                                            src={checkImage(elem.image1)}
                                            alt={elem.name}
                                        />
                                        <div className={styles.product_wrapper__name_info}>
                                            <div>Лучшая цена</div>
                                            <span>код: 17476254</span>
                                            <p>{elem.name} AEG BS18G4-202C 4935478630</p>
                                            <span>
                                                Можно забрать <b>сегодня</b>
                                            </span>
                                        </div>
                                    </div>
                                    <div className={styles.product_wrapper__price}>{elem.price} р</div>
                                    <div>1</div>
                                    <div>{elem.price} р.</div>
                                    <div className={styles.userTools}>
                                        <MdDeleteOutline onClick={() => handleDelete(elem.id)} />
                                    </div>
                                </div>
                                ))
                            ) : (
                                <p>в корзине ничего нет</p>
                            )
                        }
                        
                    </div>
                </div>
                <div className={styles.cartBill}>
                    <h2>Ваш заказ</h2>
                    <p>
                        Выбрано товаров: <span>{favArr?.length}</span>
                    </p>
                    <p>
                        Вес заказа: <span>1кг</span>
                    </p>
                    <p>
                        Общая стоимость: <span className={styles.bill}>{summary}</span>
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
export default Page;