'use client';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '@/components/Product/Card';
import styles from '@/styles/categories/Podcategor.module.scss';
import Link from 'next/link';
import ProdWrapper from '@/components/ProdWrapper/ProdWrapper';

const Page = ({ params }) => {
    const [products, setProducts] = useState([]);
    const categoryRoutes = useSelector((state) => state.routes.categoryRotes);
    const [categoryName, setCategoryName] = useState('');
    const [subcategoryName, setSubcategoryName] = useState('');

    useEffect(() => {
        const decodedCategorySlug = decodeURI(params.slug);
        const decodedSubcategorySlug = decodeURI(params.podcategor);

        const foundCategory = categoryRoutes.find(
            (element) => element.name === decodedCategorySlug,
        );

        if (foundCategory) {
            setCategoryName(foundCategory.name);

            const foundSubcategory = foundCategory.subcategories.find(
                (subcategory) => subcategory.name === decodedSubcategorySlug,
            );

            if (foundSubcategory) {
                setSubcategoryName(foundSubcategory.name);
                setProducts(foundSubcategory);
            }
        }
    }, [params.slug, params.podcategor, categoryRoutes]);

    return (
        <main>
            <h3>
                Категория: <Link href={`/category/${categoryName}`}>{categoryName}</Link> /{' '}
                <Link href={`/category/${categoryName}/${subcategoryName}`}>{subcategoryName}</Link>
            </h3>
            <ProdWrapper arr={products} />
        </main>
    );
};

export default Page;
