// CategoryRoutes.js
'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setCategoryRoutes } from './categoryRoutesSlice';
import Cookies from 'universal-cookie';

const CategoryRoutes = () => {
    const cookies = new Cookies();
    const dispatch = useDispatch();
    const categoryRoutes = useSelector((state) => state?.routes);

    const fetchCategories = async () => {
        const url = 'http://127.0.0.1:8000/api/v1/category/crud/';
        await axios
            .get(url, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token'),
                },
            })
            .then((res) => {
                dispatch(setCategoryRoutes(res.data));
                console.log(res.data);
                cookies.set('routes', res.data);
            })
            .catch((err) => {
                // console.log(err.response.data);
            });
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div>
            {categoryRoutes?.length > 0 ? (
                categoryRoutes.map((route) => {
                    console.log(route.name, 'routes');
                    return <div key={route.id}>{route.name}</div>;
                })
            ) : (
                <p></p>
            )}
        </div>
    );
};

export default CategoryRoutes;
