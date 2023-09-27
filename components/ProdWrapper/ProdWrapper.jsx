'use client'

import React, { useEffect, useState } from 'react'
import Sidebar from '@/components/sidebar/Sidebar';
import styles from './ProdWrapper.module.scss'
import Card from '../Product/Card';
import { useSelector } from 'react-redux';
import ProdCard from '../ProdCard/ProdCard';

const ProdWrapper = ({arr}) => {
  const [filteredArr, setFilteredArr] = useState([])
  const { inputValue1, inputValue2 } = useSelector(state => state.filter)
  
  const isFiltering = inputValue1 !== '' || inputValue2 !== '';
  useEffect(() => {
    const newPrice = arr.filter(element => element.price > inputValue1 && element.price < inputValue2)
    setFilteredArr(newPrice)
    console.log(filteredArr);
  }, [arr,inputValue1,inputValue2])
  return (
    <main>
      <div>
        
        <div className={styles.ProdWrapper}>
          <Sidebar />
          <div className={styles.cards_wrapper}>  
            {isFiltering && filteredArr.length === 0 || arr.length === 0 ? (
                <p>Продукты не найдены</p>
              ) : (
              (isFiltering ? filteredArr : arr).map(item => (
                <ProdCard key={item.id} image={item.image} name={item.name} price={item.price} />
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProdWrapper