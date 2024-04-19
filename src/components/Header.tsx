import { FacebookLogo, List, MagnifyingGlass, TwitchLogo, TwitterLogo, User } from 'phosphor-react'
import styles from './Header.module.css'

export function Header(){

    return(
        <div>
            <header className={styles.header}>
            <div className={styles.logo}>
            <span><FacebookLogo/></span>
            <span><TwitterLogo/></span>
            <span><TwitchLogo/></span>

            </div>
            
            <h2>GoodGeek</h2>

            <div className={styles.logo}>
            <span><User/></span>
            <span><MagnifyingGlass/></span>
            <span><List/></span>
            </div>
        </header>
        </div>
    )
}