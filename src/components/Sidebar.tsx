import styles from './Sidebar.module.css'

import { Pencil } from "phosphor-react";
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
                src='https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'>
            </img>

            <div className={styles.profile}>
                <Avatar src='https://github.com/IgorGMendonca.png' />

                <strong>Igor Gabriel</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <Pencil size={16} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}