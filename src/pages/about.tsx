import styles from './about.module.css'

import { GithubLogo, LinkedinLogo } from "phosphor-react";

export function About(){
    return(
        <div className={styles.about}>
            <h2>Sobre</h2>
            <p>Boas vindas ao GoodGeek!</p>
            <p>Explore o mundo geek em um só lugar para ficar bem informado(a)!</p>

            <img src="https://pbs.twimg.com/media/EaMKffLWkAEuhTw.png:large" alt="imagem ilustrativa" />

            <footer className={styles.footer}>
                <p>Site desenvolvido por Carlos</p>
                
                <div className={styles.logoFooter}>
                <a href="https://www.linkedin.com/in/carlos-eduardo-310a5a255/"><LinkedinLogo/></a>
                <a href="https://github.com/CarlosEduDev"><GithubLogo/></a>
                </div>

                <p>Espero que tenha gostado!</p>
            </footer>
        </div>
    )
}