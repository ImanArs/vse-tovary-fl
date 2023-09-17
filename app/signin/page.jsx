'use client';
import React, { useState } from 'react';
import axios from 'axios';
import styles from './Signin.module.scss';

const Signin = () => {
    const [state, setState] = useState({
        username: '',
        password: '',
        password2: '',
    });

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setState({
            ...state,
            [e.target.id]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            username: state.username,
            password: state.password,
            password2: state.password2,
        };
        const url = 'http://127.0.0.1:8000/api/v1/account/register/';
        axios
            .post(url, data)
            .then((res) => {
                console.log(res.data);
                localStorage.setItem('access_token', res.data['access']);
                window.location.href = '/';
            })
            .catch((err) => {
                console.log(err.response.data);
            });

        console.log(data);
    };

    return (
        <div className="px-[3%]">
            <div>
                <h1>Регистрация</h1>
                <p>Зарегистрируйтесь, заполнив следующие поля:</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Имя пользователя"
                        id="username"
                        value={state.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Пароль"
                        id="password"
                        value={state.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Подтвердите пароль"
                        id="password2"
                        value={state.password2}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Зарегистрироваться</button>
                    <a href="/Authentication/Login" style={{ fontSize: '15px', color: '#009B95' }}>
                        Уже есть аккаунт
                    </a>
                </div>
            </form>
        </div>
    );
};

export default Signin;
