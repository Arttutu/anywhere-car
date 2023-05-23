import React from "react"
import styles from "./tabelaEstacionamento.module.scss"
import LinhasTabelasEstacionamentos from "../LinhaTabelaEstabelecimento"
export default function TabelaEstacionamento() {
  return (
    <>
      <div className={styles.tabela}>
        <table>
          <tr className={styles.coluna}>
            <th className={styles.coluna__tituloTabela__carro}>
              Número do Carro
            </th>
            <th className={styles.coluna__tituloTabela}>Modelo</th>
            <th className={styles.coluna__tituloTabela__vaga}>Vaga ocupada</th>
            <th className={styles.coluna__tituloTabela}>data da retirada</th>
            <th className={styles.coluna__tituloTabela}>hora da retirada</th>
            <th className={styles.coluna__tituloTabela}>data da devolução</th>
            <th className={styles.coluna__tituloTabela}>hora da devolução</th>
            <th className={styles.coluna__tituloTabela__total}>
              Número de vagas totais
            </th>
          </tr>
          <LinhasTabelasEstacionamentos
            id="1"
            modelo="xy"
            vaga="Vaga 1"
            dataRetirada="10/11/2024"
            horaRetirada="11:00"
            dataDevolucao="11/11/2024"
            horaDevolucao="11:00"
            NumeroVagas="490"
          />
          <LinhasTabelasEstacionamentos
            id="2"
            modelo="zy"
            vaga="Vaga 2"
            dataRetirada="10/11/2024"
            horaRetirada="13:00"
            dataDevolucao="15/11/2024"
            horaDevolucao="13:00"
            NumeroVagas="490"
          />
          <LinhasTabelasEstacionamentos
            id="3"
            modelo="zy"
            vaga="Vaga 3"
            dataRetirada="10/11/2024"
            horaRetirada="13:00"
            dataDevolucao="19/11/2024"
            horaDevolucao="13:00"
            NumeroVagas="490"
          />
          <LinhasTabelasEstacionamentos
            id="4"
            modelo="zz"
            vaga="Vaga 4"
            dataRetirada="20/11/2024"
            horaRetirada="13:00"
            dataDevolucao="15/11/2024"
            horaDevolucao="13:00"
            NumeroVagas="4900"
          />
        </table>
      </div>
    </>
  )
}
