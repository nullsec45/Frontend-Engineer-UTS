import React, { useState } from "react"
import styles from "./Navbar.module.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <div className={styles.navbar__brand}>
          <h1>Covid ID</h1>
        </div>

        <ul className={`${styles.navbar__list} ${isOpen ? styles.show : ''}`}>
          <li className={styles.navbar__item}>
            <a href="">Global</a>
          </li>
          <li className={styles.navbar__item}>
            <a href="">Indonesia</a>
          </li>
          <li className={styles.navbar__item}>
            <a href="">Provinsi</a>
          </li>
          <li className={styles.navbar__item}>
            <a href="">About</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
