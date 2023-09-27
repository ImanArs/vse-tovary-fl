'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const page = ({ params }) => {
    const categoryRoutes = useSelector((state) => state.routes.categoryRotes);
    const [categoryName, setCategoryName] = useState('');
    const [subCategory, setSubCategories] = useState([]);

    useEffect(() => {
        const decodedCategorySlug = decodeURI(params?.slug);

        const foundCategory = categoryRoutes?.find(
            (element) => element.name === decodedCategorySlug,
        );
        console.log(foundCategory?.subcategories, 'wqeq');
        if (foundCategory) {
            setCategoryName(foundCategory.name);
            setSubCategories(foundCategory.subcategories);
        }
    }, [params.slug, categoryRoutes]);
    return (
        <main>
            <h1>page {categoryName}</h1>
            <div>
                {categoryName ? (
                    subCategory?.map((item) => (
                        <div key={item.id}>
                            <Link href={`/category/${params.slug}/${item.name}`}>{item.name}</Link>
                        </div>
                    ))
                ) : (
                    <p>загрузка данных</p>
                )}
            </div>
        </main>
    );
};

export default page;
