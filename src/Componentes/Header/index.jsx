import React from "react"
import { Link, NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import styles from "./header.module.scss"
import { useState } from "react"
import { MdOutlineDirectionsCarFilled } from "react-icons/md"

export default function Header() {
  const [isMobile, setIsMobile] = useState(false)

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar__logo}>
          <h3>Anywhere Car</h3>
          <MdOutlineDirectionsCarFilled className={styles.navbar__icone} />
        </div>

        <ul
          className={
            isMobile ? styles.navbar__links__mobile : styles.navbar__links
          }
          onClick={() => setIsMobile(false)}
        >
          <NavLink to="/" className={styles.navbar__links__item}>
            <li>Home</li>
          </NavLink>
          <NavLink to="/" className={styles.navbar__links__item}>
            <li>Sobre Nós</li>
          </NavLink>
          <NavLink to="/" className={styles.navbar__links__item}>
            <li>Idealizadores</li>
          </NavLink>
          <NavLink to="/" className={styles.navbar__links__item}>
            <li>Contato</li>
          </NavLink>
        </ul>
        <button
          className={styles.mobile__icon}
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <AiOutlineClose></AiOutlineClose>
          ) : (
            <GiHamburgerMenu></GiHamburgerMenu>
          )}
        </button>
      </nav>
    </>
  )
}
