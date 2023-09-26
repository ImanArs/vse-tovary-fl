'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cards = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = () => {
        const url = 'http://127.0.0.1:8000/api/v1/product/';

        axios
            .get(url, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token'),
                },
            })
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = (id) => {
        const url = `http://127.0.0.1:8000/api/v1/product/${id}/`;

        axios
            .delete(url, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token'),
                },
            })
            .then(() => {
                console.log(`Продукт с ID ${id} удален.`);
                fetchProducts(); // Refresh the product list after deletion
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    };

    return (
        <div>
            {products.map((product)  => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Цена: ${product.price}</p>
                    <p>Категория: {product.category_name}</p>
                    <button onClick={() => handleDelete(product.id)}>Удалить</button>
                </div>
            ))}
        </div>
    );
};

export default Cards;
