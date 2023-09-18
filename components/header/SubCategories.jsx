import React from 'react'

import styles from './Header.module.scss'
import Link from 'next/link';

const SubCategories = ({item}) => {
  console.log(item);
  
  return (
    <div className={styles.SubCategory_item}>
      <h3>{item?.name}</h3>
      {item?.subcategories?.map(elem => (
        <p key={elem.id}>
          <Link href={`/category/${elem.parent}/${elem.name}`}>{elem.name}</Link>
        </p>
      ))}
    </div>
  )
}

export default SubCategories