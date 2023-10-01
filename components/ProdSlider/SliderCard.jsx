import React, { useState, useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { HiShoppingCart } from 'react-icons/hi';

import styles from './SliderCard.module.scss';

function ProductCard({ name, price, image, productId, accessToken }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [cartProductId, setCartProductId] = useState(null);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
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
                .catch((error) => {});
        }
    }, [cartProductId, accessToken]);

    return (
        <div className={styles.cart}>
            <div className={styles.cart_heart} onClick={toggleFavorite}>
                {isFavorite ? (
                    <AiFillHeart className={styles.cart_heart__svg} color="#d60000" />
                ) : (
                    <AiOutlineHeart className={styles.cart_heart__svg} />
                )}
            </div>
            <div className={styles.cart_image}>
                <img src={image} alt={name} />
            </div>
            <div className={styles.cart_name}>
                <span>{name}</span>
            </div>

            <div className={styles.cart_price}>
                <p>{price} p.</p>
                <div className={styles.cart_icons}>
                    <HiShoppingCart
                        className={styles.cart_icons__svg}
                        color="#fff"
                        onClick={() => setCartProductId(productId)}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
