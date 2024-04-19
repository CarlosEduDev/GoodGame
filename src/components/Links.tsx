import { Link, NavLink } from 'react-router-dom'
import styles from './Links.module.css'
import { Cards, House, Info } from 'phosphor-react'

export function Links(){
    return(
        <div className={styles.links}>
            <NavLink to='/'>
                <House/>
                <span>Início</span>
            </NavLink>
            <Link to='/categories'>
                <Cards/>
                <span>Categorias</span>
            </Link>

            <Link to='/about'>
                <Info/>
                <span>Sobre</span>
            </Link>
        </div>
    )
}