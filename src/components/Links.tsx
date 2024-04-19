import { Link, NavLink } from 'react-router-dom'
import styles from './Links.module.css'
import { Cards, House, Info } from 'phosphor-react'
import { Button } from '@mui/material'

export function Links(){

    return(
        <div className={styles.links}>
            <NavLink className={styles.nav} to='/'>
                
                <Button><House/> Início</Button>
            </NavLink>
            <Link className={styles.nav} to='/categories'>
                
                <Button><Cards/> Categorias</Button>
            </Link>

            <Link className={styles.nav} to='/about'>
                
                <Button><Info/> Sobre</Button>
            </Link>
        </div>
    )
}