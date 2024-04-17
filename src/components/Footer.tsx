import styles from './Footer.module.css'
import { LinkedinLogo, GithubLogo } from "phosphor-react";

export function Footer(){
    return(
        <footer className={styles.footer}>

            <div className={styles.footerimages}>
                <span>Feito pelo Carlos</span>
            <LinkedinLogo/>
            <GithubLogo/>

            </div>

            
        </footer>
    )
}