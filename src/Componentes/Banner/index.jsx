import React from "react"
import styles from "./banner.module.scss"
import carro from "./carro.png"
import { Button, Container } from "@mui/material"
import BotaoPrincipal from "../BotaoPrincipal"
import { Link } from "react-router-dom"

export default function Banner() {
  return (
    <div className={styles.bannerPrincipal}>
      <Container>
        <div className={styles.banner}>
          <div className={styles.banner__conteudo}>
            <h1>
              Conecte a sua empresa as locadoras de carro de todo Brasil !{" "}
            </h1>
            <p>
              “Anywhere Car” é uma funcionalidade de serviço da Easy Carros, que
              propõe ampliação da acessibilidade de locações de carros (regiões
              periféricas).
            </p>
            <div className={styles.banner__conteudo_botoes}>
              <Link to="/cadastre">
                <BotaoPrincipal descricao="Cadastre seu estabelecimento" />
              </Link>
              <Link to="/login">
                <BotaoPrincipal descricao="Acesse Nosso serviço" />
              </Link>
              <Link to="/faleconosco">
                <BotaoPrincipal descricao="Fale Conosco" />
              </Link>
            </div>
          </div>
          <div className={styles.banner__imagem}>
            <img src={carro} className={styles.banner__imagem_carro}></img>
          </div>
        </div>
      </Container>
    </div>
  )
}
