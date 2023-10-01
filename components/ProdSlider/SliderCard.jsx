import React, { useState, useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { HiShoppingCart } from 'react-icons/hi';

import styles from './SliderCard.module.scss';
import { toast } from 'react-toastify';
import { API_URL } from '@/utils/api';
import Link from 'next/link';

function ProductCard({ name, price, image, productId, accessToken }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [cartProductId, setCartProductId] = useState(null);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const checkImage = (img) => {
        if (img.slice(0, 4) == 'http') {
            return img;
        } else {
            return API_URL + img;
        }
    };
    useEffect(() => {
        if (cartProductId !== null) {
            const headers = {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            };

            fetch(`http://127.0.0.1:8000/api/v1/cart/add_to_cart/${cartProductId}/`, {
                method: 'POST',
                headers: headers,
            })
                .then((response) => {
                    if (response.ok) {
                    } else {
                    }
                })
                .catch((error) => {
                    console.error('Произошла ошибка при запросе:', error);
                });
        }
<<<<<<<<< Temporary merge branch 1
       
    }, [cartProductId, accessToken]); 
=========
    }, [cartProductId, accessToken]);
>>>>>>>>> Temporary merge branch 2

    const result = checkImage(image);
    console.log(result, 'res');

    return (
        <div className={styles.card}>
            <div className={styles.card_heart} onClick={toggleFavorite}>
                {isFavorite ? (
                    <AiFillHeart className={styles.card_heart__svg} color="#d60000" />
                ) : (
                    <AiOutlineHeart className={styles.card_heart__svg} />
                )}
            </div>
            <div className={styles.card_image}>
                <img src={result} alt={name} />
            </div>
            <div className={styles.card_name}>
                <span>{name}</span>
            </div>

            <div className={styles.card_price}>
                <p>{price} p.</p>
                <div className={styles.card_icons}>
                    <HiShoppingCart
                        className={styles.card_icons__svg}
                        color="#fff"
                        // onClick={() => setCartProductId(productId)}
                        onClick={() => {
                            setCartProductId(productId);
                            notify();
                        }}
                    />
                </div>
            </div>
            <Link href={href}>
                <button>Подробнее</button>
            </Link>
        </div>
    );
}

export default ProductCard;
