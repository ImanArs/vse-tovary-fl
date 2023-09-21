'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cards = () => {
    // Состояние для хранения списка продуктов
    const [products, setProducts] = useState([]);

    // Функция для получения списка продуктов с сервера
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

    // Используем useEffect для вызова функции fetchProducts при загрузке компонента
    useEffect(() => {
        fetchProducts();
    }, []);

    // Функция для удаления продукта по его ID
    const handleDelete = (id) => {
        const url = `http://127.0.0.1:8000/api/v1/product/${id}/`;

        axios
            .delete(url, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token'),
                },
            })
            .then((res) => {
                // Обработка успешного удаления, например, удаление продукта из состояния
                console.log(`Продукт с ID ${id} удален.`);
                // После успешного удаления обновляем список продуктов
                fetchProducts();
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    };

    // Функция для обработки изменения значений в полях ввода
    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setState({
            ...state,
            [e.target.id]: value,
        });
        setErrors({
            ...errors,
            [e.target.id]: '', // Сбрасываем сообщение об ошибке при изменении поля
        });
    };

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Цена: ${product.price}</p>
                    <p>Категория: {product.category_name}</p>
                    <button key={product.id} onClick={() => handleDelete(product.id)}>Удалить</button>
                </div>
            ))}
        </div>
    )
}

export default Cards;
