import React from "react"
import styles from "./linhasTabela.module.scss"
import { AiFillPlusCircle } from "react-icons/ai"
import { IoMdRemoveCircle } from "react-icons/io"
export default function LinhasTabelas({
  nome,
  cnpj,
  logradouro,
  bairro,
  numero,
  vagas,
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
        <th>{nome}</th>
        <td>{cnpj}</td>
        <td> {logradouro} </td>
        <td>{bairro}</td>
        <td>{numero}</td>
        <td>{vagas}</td>
        <td>
          <AiFillPlusCircle className={styles.icon} style={stylesSelecionar} />
        </td>
        <td>
          <IoMdRemoveCircle className={styles.icon} style={stylesRemover} />
        </td>
      </tr>
    </>
  )
}
