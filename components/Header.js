import React from 'react'
import styles from './Header.module.css'
import logo from './logo.png'
import Image from 'next/image'
const Header = () => {
  return (
    <div className={styles.header}>
        <Image src={logo} height={40} width={40}/>
        Image Gallery
    </div>
  )
}

export default Header