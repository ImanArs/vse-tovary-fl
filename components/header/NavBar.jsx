'use client'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { showRoutes } from '@/features/slices/categoryRoutesSlice';

const NavBar = () => {
  const [hovered, setHovered] = React.useState(false)
  const routesArr = useSelector((state) => state.routes.categoryRotes)
  console.log(routesArr);
  const mouseOn = () => {
    if (hovered) {
      return(
        <div>{routesArr.map(item => (
          <div key={item}>{item}</div>
        ))}</div>
      )
    }
  }

  return (
    <div onMouseLeave={() => setHovered(false)} onMouseEnter={() => setHovered(true)}>
      <button><GiHamburgerMenu color='#fff' /> Каталог товаров</button>
      <div>
        {mouseOn()}
      </div>
    </div>
  )
}

export default NavBar
