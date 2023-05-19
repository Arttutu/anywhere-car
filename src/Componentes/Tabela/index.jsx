import React from "react"
import styles from "./tabela.module.scss"
import LinhasTabelas from "../LinhasTabela"
import BotaoVoltar from "../BotaoVoltar"
import { Link } from "react-router-dom"
export default function Tabela() {
  return (
    <>
      <div className={styles.tabela}>
        <table>
          <tr className={styles.coluna}>
            <th className={styles.coluna__tituloTabela__empresa}>Empresas</th>
            <th className={styles.coluna__tituloTabela}>CNPJ</th>
            <th className={styles.coluna__tituloTabela__logradouro}>
              Logradouro
            </th>
            <th className={styles.coluna__tituloTabela}>Bairro</th>
            <th className={styles.coluna__tituloTabela}>Número</th>
            <th className={styles.coluna__tituloTabela__vagas}>
              Número de vagas
            </th>
            <th className={styles.coluna__tituloTabela}>Selecionar</th>
            <th className={styles.coluna__tituloTabela}>Remover</th>
          </tr>
          <LinhasTabelas
            nome="Veste Fácil"
            cnpj="50.735.648/0001-12"
            logradouro="Rua Armando"
            bairro="Vila Amora"
            numero="101"
            vagas="500"
          />
          <LinhasTabelas
            nome="Veste Fácil"
            cnpj="50.735.648/0001-12"
            logradouro="Rua Armando"
            bairro="Vila Amora"
            numero="101"
            vagas="500"
          />
          <LinhasTabelas
            nome="Veste Fácil"
            cnpj="50.735.648/0001-12"
            logradouro="Rua Armando"
            bairro="Vila Amora"
            numero="101"
            vagas="500"
          />
          <LinhasTabelas
            nome="Veste Fácil"
            cnpj="50.735.648/0001-12"
            logradouro="Rua Armando"
            bairro="Vila Amora"
            numero="101"
            vagas="500"
          />
          <LinhasTabelas
            nome="Veste Fácil"
            cnpj="50.735.648/0001-12"
            logradouro="Rua Armando"
            bairro="Vila Amora"
            numero="101"
            vagas="500"
          />
        </table>
      </div>
    </>
  )
}
