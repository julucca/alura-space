import React from 'react'
import facebook from './facebook.svg';
import twitter from './twitter.svg';
import instagram from './instagram.svg';
import styles from './Rodape.module.scss';

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
        <div className={styles.rodape__icones}>
            <a href="/">
                <img src={facebook} alt="Ícone do Facebook" />
            </a>
            <a href="/">
                <img src={twitter} alt="Ícone do Twitter" />
            </a>
            <a href="/">
                <img src={instagram} alt="Ícone do Instagram" />
            </a>
        </div>
        <p>Desenvolvido por Juliana Lucca.</p>
    </footer>
  )
}
