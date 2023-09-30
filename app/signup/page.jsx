'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import styles from './Signup.module.scss';
import { FaArrowRight } from 'react-icons/fa';

const Signup = () => {
    const [state, setState] = useState({
        username: '',
        password: '',
    });

    const router = useRouter();

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.id]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = state;
        const url = 'http://127.0.0.1:8000/api/v1/account/login/';

        axios
            .post(url, { username, password })
            .then((res) => {
                console.log(res.data);
                localStorage.setItem('access_token', res.data['access']);
                router.push('/');
            })
            .catch((err) => {
                console.log(err.response.data);
            });

        console.log(state);
    };

    return (
        <div className={styles.signup}>
            <div className={styles.signup__wrapper}>
                <div className={styles.signup__wrapper__content}>
                    <div className={styles.signup__wrapper__content__one}>
                        <div className={styles.signup__wrapper__content__one__text}>
                            <h1>Войти</h1>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className={styles.signup__wrapper__content__one__input}>
                            <input
                                type="text"
                                placeholder="Email"
                                id="username"
                                value={state.username}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                id="password"
                                value={state.password}
                                onChange={handleChange}
                                required
                            />
                            <div className={styles.signup__wrapper__content__one__button}>
                                <button type="submit">
                                    Продолжить
                                    <FaArrowRight
                                        className={
                                            styles.signup__wrapper__content__one__button__arrow
                                        }
                                    />
                                </button>
                                <a
                                    href="/signin"
                                    className={styles.signup__wrapper__content__one__button__text}>
                                    Регистрация
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
