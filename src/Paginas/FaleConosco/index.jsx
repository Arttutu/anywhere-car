import React from "react"
import styles from "./faleconosco.module.scss"
import { AiFillPhone, AiFillMail } from "react-icons/ai"
import { Container } from "@mui/material"

export default function FaleConosco() {
  const styleIcon = {
    fontSize: 42,
    color: "#fff",
  }
  return (
    <div className={styles.faleconosco}>
      <Container>
        <div className={styles.faleconosco__conteudo}>
          <div className={styles.faleconosco__conteudo__titulo}>
            <h1>Entre em contato ! </h1>
            <p> Dúvidas ? mande uma mensagem</p>
          </div>
          <div className={styles.faleconosco__conteudo__contatos}>
            <div className={styles.faleconosco__conteudo__contatos__info}>
              <div
                className={styles.faleconosco__conteudo__contatos__info__nome}
              >
                <h2>Telefone</h2>
                <AiFillPhone style={styleIcon} />
              </div>
              <span>(11)99999-9999</span>
            </div>
            <div className={styles.faleconosco__conteudo__contatos__info}>
              <div
                className={styles.faleconosco__conteudo__contatos__info__nome}
              >
                <h2>E-mail</h2>
                <AiFillMail style={styleIcon} />
              </div>
              <span> anywherecar@fiap.com.br</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
