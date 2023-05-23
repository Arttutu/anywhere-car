import React, { useState } from "react"
import styles from "./login.module.scss"
import {
  Box,
  Container,
  Input,
  MenuItem,
  Select,
  TextField,
} from "@mui/material"
import BotaoPrincipal from "../../Componentes/BotaoPrincipal"
import { Link } from "react-router-dom"
import BotaoVoltar from "../../Componentes/BotaoVoltar"

export default function Login() {
  const [clientes, setClientes] = useState("")

  const handleChange = (event) => {
    setClientes(event.target.value)
  }
  return (
    <div className={styles.login}>
      <div className={styles.login__conteudo}>
        <Container>
          <div className={styles.login__conteudo__container}>
            <h1>Faça o seu login</h1>
            <form className={styles.login__conteudo__container__form}>
              <TextField
                id="fullWidth"
                label="E-mail
                            "
                variant="outlined"
                type="number"
                sx={{ border: 1, borderColor: "#0f98f8", width: 250 }}
              />
              <TextField
                id="fullWidth"
                label=" Senha
                            "
                variant="outlined"
                type="password"
                sx={{ border: 1, borderColor: "#0f98f8", width: 250 }}
              />
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                value={clientes}
                onChange={handleChange}
                sx={{ border: 1, borderColor: "#0f98f8", width: 250 }}
              >
                <MenuItem value="Locadora">Locadora</MenuItem>
                <MenuItem value="Estabelecimentos">Estabelecimento</MenuItem>
              </Select>
              <Link to="/locadora">
                <BotaoPrincipal descricao="ENVIAR"></BotaoPrincipal>
              </Link>
            </form>
          </div>
        </Container>
      </div>
    </div>
  )
}
