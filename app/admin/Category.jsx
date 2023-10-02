'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Category = () => {
    const [state, setState] = useState({
        name: '',
        parent: '',
        icon: '',
    });

    const [categories, setCategories] = useState([]);
    const [categoryToDelete, setCategoryToDelete] = useState('');
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = () => {
        const url = 'http://51.20.95.11:8000/api/v1/category/crud/';
        axios
            .get(url, {
                headers: {
                    "Authorization": "Bearer "+localStorage.getItem("access_token")
                }
            })
            .then((res) => {
                setCategories(res.data);
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
    };

    const handleIconChange = (e) => {
        const file = e.target.files[0];
        setIcon(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', state.name);
        formData.append('parent', state.parent);
        // formData.append('icon', null);

        // if (state.icon) {
        //     formData.append('icon', state.icon, state.icon.name);
        // } else {
        //     formData.append('icon', null);
        // }

        const url = 'http://51.20.95.11:8000/api/v1/category/crud/';

        axios
            .post(url, formData, {
                headers: {
                    "Authorization": "Bearer "+localStorage.getItem("access_token")
                }
            })
            .then((res) => {
                fetchCategories();
                setIcon(null);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    };

    const handleDelete = (id) => {
        const url = `http://51.20.95.11:8000/api/v1/category/crud/${id}/`;
        axios
            .delete(url,{
                headers: {
                    "Authorization": "Bearer "+localStorage.getItem("access_token")
                }
            })
            .then(() => {
                console.log(`Category ${id} deleted.`);
                fetchCategories();
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={state.name} onChange={handleChange} />

                <label htmlFor="parent">Parent</label>
                <input type="text" id="parent" value={state.parent} onChange={handleChange} />

                <label htmlFor="icon">icon</label>
                <input type="file" id="icon" onChange={handleIconChange} />

                <button type="submit">Submit</button>
            </form>

            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        {category.name} - {category.parent}
                        {category.icon && (
                            <img className='w-[100px]'
                                key={category.id}
                                src={`${category.icon}`}
                                alt="Category Icon"
                            />
                        )}
                        <button onClick={() => handleDelete(category.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Category;
