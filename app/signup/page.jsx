'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

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
        <div className="rounded-lg boxShadow-lg p-8">
            <div className="min-h-70vh flex items-center justify-center bg-white">
                <div className="space-y-8 mx-auto max-w-lg py-6 px-3">
                    <div className="rounded-lg bg-white boxShadow-lg p-8">
                        <div className="text-center">
                            <h1 className="text-4xl text-black">Войти</h1>
                            <p className="text-lg text-gray-600 text-center">
                                Create an account by providing your email
                            </p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="mt-8">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    id="username"
                                    value={state.username}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mt-8">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    id="password"
                                    value={state.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex justify-between mt-8">
                                <button type="submit">Signup</button>
                                <a href="/login" className="text-15px text-#009B95">
                                    Login
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
