import styles from './Links.module.css'

export function Links(){
    return(
        <div className={styles.links}>
            <a href="#">Início</a>
            <a href="#">Categorias</a>
            <a href="#">Sobre</a>
        </div>
    )
}