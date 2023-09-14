import React from 'react'
import styles from './Header.module.scss'

const CategoriesList = ({routesArr}) => {
  return (
    <div className={styles.categories}>
      {routesArr.map(item => (
        <div key={item}>{item}</div>
      ))}
    </div>
  )
}

export default CategoriesList