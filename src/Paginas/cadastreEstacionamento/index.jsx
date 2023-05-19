import React from "react"
import styles from "./cadastreEstacionamento.module.scss"
import { Box, Container, TextField } from "@mui/material"
import TituloMensagem from "../../Componentes/TituloMensagem"
import img from "./parking.jpg"
import BotaoPrincipal from "../../Componentes/BotaoPrincipal"
import { FaParking } from "react-icons/fa"
import BotaoVoltar from "../../Componentes/BotaoVoltar"
import { Link } from "react-router-dom"

export default function CadastreEstacionamento() {
  const styleIcon = {
    fontSize: 32,
    color: "#0f98f8",
  }
  return (
    <div className={styles.formulario}>
      <div className={styles.formulario__conteudo}>
        <div className={styles.formulario__conteudo__container}>
          <div className={styles.formulario__conteudo__container__form}>
            <div
              className={styles.formulario__conteudo__container__form__titulo}
            >
              <h1>Cadastre seu estabelecimento</h1>
              <FaParking style={styleIcon} />
            </div>

            <form className={styles.formulario__conteudo__container__form__box}>
              <Box
                sx={{
                  width: 300,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.2,
                }}
              >
                <TextField
                  id="fullWidth"
                  label=" Nome da Empresa
                            "
                  variant="outlined"
                  type="text"
                />
                <TextField
                  id="fullWidth"
                  label=" Endereço
                            "
                  variant="outlined"
                  type="text"
                />
                <TextField
                  id="outlined-basic"
                  label="CNPJ
                            "
                  variant="outlined"
                  type="number"
                />
                <TextField
                  id="outlined-basic"
                  label=" Número de Vagas Disponíveis"
                  variant="outlined"
                  type="number"
                />
              </Box>

              <BotaoPrincipal descricao="ENVIAR"></BotaoPrincipal>
            </form>
          </div>
          <img src={img}></img>
        </div>
        <Link to="/">
          <BotaoVoltar />
        </Link>
      </div>
    </div>
  )
}
