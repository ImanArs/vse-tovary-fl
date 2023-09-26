'use client'
import React, { useState } from 'react';
import Sidebar from '@/components/sidebar/Sidebar';
import Card from '@/components/product/Card';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Define openModal and closeModal functions here

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
         
          
        </div>
      </div>
    </main>
  );
}
