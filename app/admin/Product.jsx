'use client'
import React, { useState, useEffect } from 'react'; 
import axios from 'axios';

const Product = () => {
    const [state, setState] = useState({
        name: '',
        description: '',
        price: '',
        category: 0,
    });

    const [errors, setErrors] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
    });

    const [categories, setCategories] = useState([]); 


    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = () => {
        const url = 'http://127.0.0.1:8000/api/v1/category/crud/';
        axios
            .get(url, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token'),
                },
            })
            .then((res) => {
                setCategories(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};
        if (state.name.trim() === '') {
            validationErrors.name = 'Name is required';
        }
        if (state.description.trim() === '') {
            validationErrors.description = 'Description is required';
        }
        if (isNaN(state.price) || Number(state.price) <= 0) {
            validationErrors.price = 'Price must be a positive number';
        }
        if (state.category === 0) {
            validationErrors.category = 'Category is required';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const formData = new FormData();
        formData.append('name', state.name);
        formData.append('description', state.description);
        formData.append('price', state.price);
        formData.append('category', state.category);

        const url = 'http://127.0.0.1:8000/api/v1/product/';

        axios
            .post(url, formData, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token'),
                },
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    };

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setState({
            ...state,
            [e.target.id]: value,
        });
        setErrors({
            ...errors,
            [e.target.id]: '', // Сбрасываем ошибку при изменении поля
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={state.name}
                    onChange={handleChange}
                />
                <span className="error">{errors.name}</span>

                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    id="description"
                    value={state.description}
                    onChange={handleChange}
                />
                <span className="error">{errors.description}</span>

                <label htmlFor="price">Price</label>
                <input
                    type="text"
                    id="price"
                    value={state.price}
                    onChange={handleChange}
                />
                <span className="error">{errors.price}</span>

                <label htmlFor="category">Category</label>
                <select id="category" value={state.category} onChange={handleChange}>
                    <option value={0}>Select a category</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name} - {category.parent}
                        </option>
                    ))}
                </select>
                <span className="error">{errors.category}</span>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Product;
