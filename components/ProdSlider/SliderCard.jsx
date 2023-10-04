import React, { useState, useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { HiShoppingCart } from 'react-icons/hi';

import styles from './SliderCard.module.scss';
import { API_URL } from '@/utils/api';
import Link from 'next/link';


function ProductCard({ name, price, image, productId, accessToken, href }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [cartProductId, setCartProductId] = useState(null);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };
    const handleCartBtn = () => {
        setCartProductId(productId)
    }

    const checkImage = (img) => {
        if (img.slice(0,4) == 'http') {
            return img
        }else {
            return API_URL+img
        }
    }
    useEffect(() => {
        let accToken = localStorage.getItem('access_token')
        if (cartProductId !== null) {
            const headers = {
                Authorization: `Bearer ${accToken}`,
                'Content-Type': 'application/json',
            };
            fetch(`http://51.20.95.11:8000/api/v1/cart/add_to_cart/${cartProductId}/`, {
                method: 'POST',
                headers: headers,
            })
            .then((response) => {
                if (response.ok) {
                    console.log('response 200!');
                } else {
                    console.log('response not ok');
                }
            })
            .catch((error) => {
                console.error('Произошла ошибка при запросе:', error);
            });
        }
    }, [cartProductId]); 
    const result = checkImage(image)

    const handleAddFav = (item) => {
        const favArr = JSON.parse(localStorage.getItem('favourites')) || [];      
        favArr.push(item);
        localStorage.setItem('favourites', JSON.stringify(favArr));
      };
    const delFav = () => {
        localStorage.removeItem('favourites')
    }

    return (
        <div className={styles.card}>
            <div className={styles.card_heart} onClick={toggleFavorite}>
                {isFavorite ? (
                    <AiFillHeart className={styles.card_heart__svg} color="#d60000" onClick={() => delFav()} />
                ) : (
                    <AiOutlineHeart className={styles.card_heart__svg} onClick={() => handleAddFav(name)} />
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
                        onClick={() => handleCartBtn(name)}
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