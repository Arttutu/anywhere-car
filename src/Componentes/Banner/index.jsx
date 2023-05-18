import React from 'react'
import styles from "./banner.module.scss"
import carro from "./carro.png"
import { Button, Container } from '@mui/material'
import BotaoPrincipal from '../BotaoPrincipal'
import { Link } from 'react-router-dom'


export default function Banner() {
  return (
    <div className={styles.bannerPrincipal}>
            <Container>
              <div className={styles.banner}>
                  <div className={styles.banner__conteudo}>
                      <h1>A melhor empresa de aluguel de carros do mundo !</h1>
                      <p>“Anywhere Car” é uma funcionalidade de serviço da Easy Carros, que propõe ampliação da acessibilidade de locações de carros (regiões periféricas). 
                      </p>
                      <div className={styles.banner__conteudo_botoes}>
                       <BotaoPrincipal descricao="Cadastre seu estabelecimento"/>
                       <Link to="/locadora">
                       <BotaoPrincipal descricao="Locadora"/>
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
