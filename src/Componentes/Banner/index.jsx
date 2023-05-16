import React from 'react'
import styles from "./banner.module.scss"
import carros from "./carros.jpg"


export default function Banner() {
  return (
    
    <div className={styles.banner}>
    
        <div className={styles.banner__conteudo}>
            <h1>A melhor empresaa de aluguel de carros do mundo !</h1>
            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        </div>
        <div className={styles.banner__imagem}>
                <img src={carros}></img>
        </div>
        
    </div>
  )
}
