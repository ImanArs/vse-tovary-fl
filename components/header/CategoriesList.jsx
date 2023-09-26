import React from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import SubCategories from './SubCategories'

const CategoriesList = ({routesArr}) => {
  const [hovered, setHovered] = React.useState(false)
  const [currentCategory, setCurrentCategory] = React.useState(null)

  console.log(hovered);


  return (
    <div className={styles.categories} onMouseLeave={() => setHovered(false)} onMouseEnter={() => setHovered(true)}>
      {routesArr.map(item => (
        <div key={item.id} className={styles.SubCategories} onMouseEnter={() => setCurrentCategory(item)}>
          <p>
            <Link href={`/category/${item.name}`} onClick={() => setHovered(false)}>
              {item.name}
            </Link>
          </p>
        </div>
      ))}
      {hovered && <SubCategories item={currentCategory} />}
    </div>
  )
}

export default CategoriesList