import React from 'react'
import styles from "./locadora.module.scss"
import { Container, Grid } from '@mui/material'
import funcoes from "./Funcoes.json"
import FuncaoCard from '../../Componentes/FuncaoCard'
export default function Locadora() {
const itens  = funcoes
  return (
    <div className={styles.locadora}>
      <div className={styles.locadora__conteudo}>
     <Container>
        <div className={styles.locadora__conteudo__mensagem}>
          <h1 className={styles.locadora__conteudo__mensagem__tituloPrincipal}>Nossos Serviços !</h1>
          <p className={styles.locadora__conteudo__mensagem__descricaoPrincipal}>O que você busca ?</p>
    
            <div className={styles.locadora__conteudo__itens}>
              <Grid container rowSpacing={5}>
                      {
                        itens.map(item => {
                          return(
                            <Grid item xs={12} sm={12} md={6} lg={4} key={item.id}  >
                              <FuncaoCard
                                titulo={item.titulo}
                                desc={item.descricao}
                                cor= {item.cor}
                                icone= {item.icones}
                                />
                            </Grid>
                          )
                        })
                      }
                </Grid>
              </div>
            </div>
 
      
     </Container>
      </div>
    </div>
  )
}
