import styles from './Default.module.css'

import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Links } from '../components/Links';


export function Default(){
    return(
        <div className={styles.layout}>
            <Header/>
            <Links/>
            <div className={styles.content}>
                <Outlet/>
            </div>
        </div>
    )
}