import React from 'react'
import styles from './Header.module.scss'

const CategoriesList = ({routesArr}) => {
  return (
    <div className={styles.categories}>
      {routesArr.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  )
}

export default CategoriesList