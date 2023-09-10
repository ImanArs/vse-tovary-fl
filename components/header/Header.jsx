import React from 'react'

import styles from '@/components/header/Header.module.scss'

const Header = () => {
  return (
    <header>
      <div>
        <img src="/logo.svg" alt="Logo" />
        <img src="/skidki.png" alt="" />
        <div className={styles.header_phone}>
          <p><a href=""></a></p>
          <p><a href=""></a></p>
          <p>Звонок бесплатный 05:00 – 22:00</p>
        </div>
        <div className={styles.header_auth}>
          <button>auth</button>
          <button>auth</button>
        </div>
      </div>
    </header>
  )
}

export default Header