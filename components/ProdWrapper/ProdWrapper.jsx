'use client'

import React, { useEffect } from 'react'
import Sidebar from '@/components/sidebar/Sidebar';
import styles from './ProdWrapper.module.scss';
import { useSelector } from 'react-redux';
import ProdCard from '../ProdCard/ProdCard';

const ProdWrapper = ({arr}) => {
  
  const { inputValue1, inputValue2 } = useSelector(state => state.filter)
  const getFilteredArr = () => {
    const newPrice = arr?.filter(element => element.price > inputValue1 && element.price < inputValue2)
    console.log(newPrice, "priceFiltered");
  }
  useEffect(() => {
    console.log(Boolean(inputValue1));    
    getFilteredArr()
  }, [arr,inputValue1,inputValue2])
  return (
    <main>
      <div>
        
        <div className={styles.ProdWrapper}>
          <Sidebar arr={arr}/>
          <div className={styles.cards_wrapper}>
            {arr?.length > 0 ? (
              arr.map(item => (
                <ProdCard key={item.id} image={item.image} name={item.name} price={item.price} />
                ))
                ) : (
                  <p>Продукты не найдены</p>
                )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProdWrapper