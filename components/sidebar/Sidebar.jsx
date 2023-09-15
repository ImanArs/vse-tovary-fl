import React from 'react'

import styles from './Sidebar.module.scss'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h3>Найдено товаров: 11</h3>
      <hr />
      <div className={styles.sidebar_filter}>
        <p>Цена в р.</p>
        <div className={styles.sidebar_filter__inputs}>
          <input type="text" required />
          <input type="text" required />
        </div>
        <div className={styles.sidebar_filter__btn}>
          <button>очистить</button>
          <button>Показать</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar