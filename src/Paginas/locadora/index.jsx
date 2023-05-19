import React from "react"
import styles from "./locadora.module.scss"
import { Container, Grid } from "@mui/material"
import funcoes from "./Funcoes.json"
import FuncaoCard from "../../Componentes/FuncaoCard"
import TituloMensagem from "../../Componentes/TituloMensagem"
import BotaoVoltar from "../../Componentes/BotaoVoltar"
import { Link } from "react-router-dom"
export default function Locadora() {
  const itens = funcoes
  return (
    <div className={styles.locadora}>
      <div className={styles.locadora__conteudo}>
        <Container>
          <div className={styles.locadora__conteudo__mensagem}>
            <TituloMensagem
              titulo="Nossos Serviços !"
              descricao="O que você Busca ?"
            />
            <div className={styles.locadora__conteudo__itens}>
              <Grid container rowSpacing={5}>
                {itens.map((item) => {
                  return (
                    <Grid item xs={12} sm={12} md={6} lg={4} key={item.id}>
                      <FuncaoCard
                        titulo={item.titulo}
                        desc={item.descricao}
                        cor={item.cor}
                        icone={item.icones}
                      />
                    </Grid>
                  )
                })}
              </Grid>
            </div>
          </div>
          <Link to="/">
            <BotaoVoltar />
          </Link>
        </Container>
      </div>
    </div>
  )
}
