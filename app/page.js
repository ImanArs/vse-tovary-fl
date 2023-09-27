'use client';
import React, { useState } from 'react';
import Sidebar from '@/components/sidebar/Sidebar';
import Card from '@/components/product/Card';
import CategoryRoutes from '@/features/slices/categoryRotes';
import ProdCard from '@/components/ProdCard/ProdCard';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <main>
            <Sidebar />
            <Card />

            <div className="">
                <div className="">
                    <CategoryRoutes />
                </div>
                    {/* <ProdCard /> */}
            </div>
        </main>
    );
}
