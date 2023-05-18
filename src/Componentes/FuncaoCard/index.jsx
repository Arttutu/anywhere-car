import React from 'react'
import styles from "./funcaoCard.module.scss"
import IconeFuncoes from '../IconeFuncoes'

export default function FuncaoCard({titulo, desc, cor, icone}) {
  console.log(titulo)
  const corFundo ={
    backgroundColor: cor
  }
  return (
    <div className={styles.card} style={corFundo}>
      <IconeFuncoes icone= {icone}/>
      <h2>{titulo}</h2>
      <p>{desc}</p>
    </div>
  )
}
