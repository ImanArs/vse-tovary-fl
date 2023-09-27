'use client'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setInputValue1, setInputValue2 } from "@/features/slices/filter-slice";

import styles from './Sidebar.module.scss'

const Sidebar = ({arr = 0}) => {
  const dispatch = useDispatch();
  const { inputValue1, inputValue2 } = useSelector((state) => state.filter);
  
  const handleInputChange1 = (e) => {
    if(+e.target.value > 0) {
      dispatch(setInputValue1(+e.target.value));
    } else if(+e.target.value == false) {
      dispatch(setInputValue1(''));
      
    } else {
      console.log('none dostup');
    }
  };

  const handleInputChange2 = (e) => {
    if(+e.target.value > 0) {
      dispatch(setInputValue2(+e.target.value));
    } else if(+e.target.value == false) {
      dispatch(setInputValue2(''));
      
    } else {
      console.log('none dostup');
    }
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  }
  
  return (
    <div className={styles.sidebar}>
      <h3>Найдено товаров: {arr?.length}</h3>
      <hr />
      <form className={styles.sidebar_filter} onSubmit={handleFilterSubmit}>
        <p>Цена в р.</p>
        <div className={styles.sidebar_filter__inputs}>
          <input 
            type="number"
            value={inputValue1}
            onChange={handleInputChange1}
            placeholder='От'
            required
            />
          <input 
            type="number"
            value={inputValue2}
            onChange={handleInputChange2}
            required
            placeholder='До'
          />
        </div>
        <div className={styles.sidebar_filter__btn}>
          <button>очистить</button>
          <button>Показать</button>
        </div>
      </form>
    </div>
  )
}

export default Sidebar