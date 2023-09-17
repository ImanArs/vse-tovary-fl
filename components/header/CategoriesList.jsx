import React from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'

const CategoriesList = ({routesArr}) => {
  return (
    <div className={styles.categories}>
      {routesArr.map((item, index) => (
        <p key={item.id}><Link href={`/category/${item.name}`}>{item.name}</Link></p>
      ))}
    </div>
  )
}

export default CategoriesList