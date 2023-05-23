import React from "react"
import styles from "./linhasTabelasEstabelecimento.module.scss"

export default function LinhasTabelasEstacionamentos({
  id,
  modelo,
  vaga,
  dataRetirada,
  horaRetirada,
  dataDevolucao,
  horaDevolucao,
  NumeroVagas,
}) {
  const stylesSelecionar = {
    color: "#072CE6",
    fontSize: 32,
  }
  const stylesRemover = {
    color: "#FF3B33",
    fontSize: 32,
  }
  return (
    <>
      <tr className={styles.estabelecimento}>
        <th>{id}</th>
        <td>{modelo}</td>
        <td> {vaga} </td>
        <td>{dataRetirada}</td>
        <td>{horaRetirada}</td>
        <td>{dataDevolucao}</td>
        <td>{horaDevolucao}</td>
        <td>{NumeroVagas}</td>
      </tr>
    </>
  )
}
