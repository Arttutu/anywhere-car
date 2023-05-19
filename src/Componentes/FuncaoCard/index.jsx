import React from "react"
import styles from "./funcaoCard.module.scss"
import IconeFuncoes from "../IconeFuncoes"
import { Link } from "react-router-dom"

export default function FuncaoCard({ titulo, desc, cor, icone, path }) {
  console.log(titulo)
  const corFundo = {
    backgroundColor: cor,
  }
  const removeStyleLink = {
    textDecoration: "none",
  }
  return (
    <Link to={path} style={removeStyleLink}>
      <div className={styles.card} style={corFundo}>
        <IconeFuncoes icone={icone} />
        <h2>{titulo}</h2>
        <p>{desc}</p>
      </div>
    </Link>
  )
}
