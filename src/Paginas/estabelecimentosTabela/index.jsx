import React from "react"
import styles from "./estabelecimentoTabela.module.scss"
import { Container } from "@mui/material"
import { Link } from "react-router-dom"
import BotaoVoltar from "../../Componentes/BotaoVoltar"
import Tabela from "../../Componentes/Tabela"
import TabelaEstacionamento from "../../Componentes/TabelaEstabelecimento"

export default function EstabelecimentoTabela() {
  return (
    <div className={styles.estabelecimentoTabela}>
      <Container>
        <div className={styles.estabelecimentoTabela__conteudo}>
          <div className={styles.estabelecimentoTabela__conteudo__titulo}>
            <h1>Verifique a situação do seu estacionamento</h1>
          </div>
          <div className={styles.estabelecimento__conteudo__tabela}>
            <TabelaEstacionamento />
          </div>
          <Link to="/">
            <BotaoVoltar />
          </Link>
        </div>
      </Container>
    </div>
  )
}
