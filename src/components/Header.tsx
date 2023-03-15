import styles from './Header.module.css';

import ignitelogo from '../image/ignite-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={ignitelogo} alt='ignite-logo'></img>
            <strong >Ignite Feed</strong>
        </header>
    );
}