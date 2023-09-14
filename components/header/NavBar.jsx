'use client'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { showRoutes } from '@/features/slices/categoryRoutesSlice';
import CategoriesList from './CategoriesList';

import styles from './Header.module.scss'

const NavBar = () => {
  const [hovered, setHovered] = React.useState(false)
  const routesArr = useSelector((state) => state.routes.categoryRotes)
  console.log(routesArr);

  return (
    <div className={styles.catalog_btn} onMouseLeave={() => setHovered(false)} onMouseEnter={() => setHovered(true)}>
      <button><GiHamburgerMenu color='#fff' /> Каталог товаров</button>
      <div className={styles.catalog_wrapper}>
        { hovered && <CategoriesList routesArr={routesArr} /> }
        
      </div>
    </div>
  )
}

export default NavBar
