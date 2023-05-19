import React from 'react'
import styles from "./tituloMensagem.module.scss"

export default function TituloMensagem({titulo, descricao}) {
  return (
  <>
        <h1 className={styles.titulo}>{titulo}</h1>
        <p className={styles.descricaol}>{descricao}</p>
  </>
  )
}

