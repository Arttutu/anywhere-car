import React from 'react'
import styles from "./BotaoPrincipal.module.scss"

export default function BotaoPrincipal({descricao}) {
  return (
    <button className={styles.botao}>{descricao}</button>
  )
}
