'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

import styles from './Card.module.scss';

const Card = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        const url = 'http://127.0.0.1:8000/api/v1/product/'; 
        axios
            .get(url, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("access_token")
                }
            })
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                // console.log(err.response.data);
            });
    };

    return (
        <div className={styles.cardContainer}>
            {products.map((product) => (
                <div className={styles.card} key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>
                    {/* <p>Category: {product.category}</p> */}
                    {/* <Link href={`/product/${product.id}`}>
                        <a>View Details</a>
                    </Link> */}
                </div>
            ))}
        </div>
    );
};

export default Card;
