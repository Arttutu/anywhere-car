import React from 'react'
import styles from "./iconeFuncoes.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faCar, faChartLine, faCoins, faFileContract, faSitemap, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
export default function IconeFuncoes({icone}) {
    
        const iconeTransformado = icone.map((icon) => {
          
          if (icon === "carro") {
            return faCar
          }
          else if (icon === "comprar") {
            return faCoins
          } else if(icon === "financiamento"){
            return faFileContract
          } else if(icon === "multa"){
            return faTriangleExclamation
          }
          else if(icon === "gestao"){
            return faSitemap
          }
          else if(icon === "vendas"){
            return faChartLine
          }
         
        })
  return (
    <>
    {iconeTransformado.map((icon, key) => {
      return (
        <FontAwesomeIcon
          icon={icon}
          key={key}
          className={styles.icone}
          />
          
      )
    })}
  </>
  )
}
