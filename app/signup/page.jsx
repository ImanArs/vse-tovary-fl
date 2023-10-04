'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import styles from './Signup.module.scss';
import { FaArrowRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setUser } from '@/features/slices/userSlice';

const Signup = () => {
    const [state, setState] = useState({
        username: '',
        password: '',
    });

    const dispatch = useDispatch()

    const router = useRouter();

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.id]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        const data = {
            username: state.username,
            password: state.password,
        }
        e.preventDefault();
        const url = 'http://51.20.95.11:8000/api/v1/account/login/';
        axios
            .post(url, data)
            .then((res) => {
                const accessToken = res.data['access'];
                localStorage.setItem('access_token', accessToken);
                console.log(res, 'res');
                dispatch(setUser(res.data))
                router.push('/');
            })
            .catch((err) => {
                console.log(err.response.data);
            });
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
