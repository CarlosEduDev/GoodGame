import styles from './Footer.module.css'

export function Footer(){
    return(
        <footer className={styles.footer}>
        <p>PT-BR</p>
            <div className={styles.footerPolicy}>
                <p>Sobre</p>
                <p>Termos de serviço</p>
                <p>Política de privacidade</p>
            </div>
        </footer>
    )
}