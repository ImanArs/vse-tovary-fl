'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; 
import styles from './Basket.module.scss';

const Basket = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter(); 

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/v1/product/')
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

    // Function to filter products based on searchQuery
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className={styles.basket}>
                <div className={styles.basket_text}>
                    <h2>Ваша корзина пока пуста</h2>
                    <span>
                        Акции, специальные предложения и обзоры самых интересных товаров на{' '}
                        <a href="/">главной странице</a> помогут вам определиться с выбором!
                    </span>
                    <input
                        type="text"
                        placeholder="Быстрое добавление: введите наименование или описание товара"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className={styles.productList}>
                {searchQuery && filteredProducts.length === 0 ? (
                    <p>No matching products found.</p>
                ) : (
                    filteredProducts.map((product) => (
                        <div key={product.id} className={styles.product}>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                        </div>
                    ))
                )}
            </div>
        </>
    );
};

export default Basket;
