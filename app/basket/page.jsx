'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import styles from './Basket.module.scss';
import Link from 'next/link';

const Basket = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showResults, setShowResults] = useState(false); 
    const router = useRouter();

    useEffect(() => {
        const url = 'http://51.20.95.11:8000/api/v1/product/';
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
        <>
            <div className={styles.basket}>
                <div className={styles.basket_text}>
                    <h2>Ваша корзина пока пуста</h2>
                    <span>
                        Акции, специальные предложения и обзоры самых интересных товаров на
                        <Link href="/">главной странице</Link> помогут вам определиться с выбором!
                    </span>
                    <input
                        type="text"
                        placeholder="Быстрое добавление: введите наименование или описание товара"
                        value={searchQuery}
                        onChange={handleInputChange}
                    />
                </div>
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
        </>
    );
};

export default Basket;