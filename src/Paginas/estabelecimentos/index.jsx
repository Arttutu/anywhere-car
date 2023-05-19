import React from "react"
import styles from "./estabelecimentos.module.scss"
import { Container } from "@mui/material"
import Tabela from "../../Componentes/Tabela"
import BotaoVoltar from "../../Componentes/BotaoVoltar"
import { Link } from "react-router-dom"

export default function Estabelecimento() {
  return (
    <div className={styles.estabelecimento}>
      <Container>
        <div className={styles.estabelecimento__titulo}>
          <h1>Encontre os Estabelecimentos Conveniados</h1>
          <p>Descubra o lugar perfeito para deixar seus carros !</p>
        </div>
        <div className={styles.estabelecimento__tabela}>
          <Tabela />
        </div>
        <Link to="/locadora">
          <BotaoVoltar />
        </Link>
      </Container>
    </div>
  )
}
