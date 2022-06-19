import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link'


const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href='/'>
                <a>
                    <img src="/images/logo.svg"
                         alt='tesla logo'
                         loading='lazy'
                         className={styles.teslaLogo}
                    />
                </a>
            </Link>

            <ul className={styles.navbarNav}>
                <li className={styles.items}>
                    <a href="#" className={styles.itemsLink} >
                        Model S
                    </a>
                </li>
                <li className={styles.items}>
                    <a href="#" className={styles.itemsLink}>
                        Model 3
                    </a>
                </li>
                <li className={styles.items}>
                    <a href="#">
                        Model X
                    </a>
                </li>
                <li className={styles.items}>
                    <a href="#" className={styles.itemsLink}>
                        Model Y
                    </a>
                </li>
                <li className={styles.items}>
                    <a href="#" className={styles.itemsLink}>
                        Solar Roof
                    </a>
                </li>
                <li className={styles.items}>
                    <a href="#" className={styles.itemsLink}>
                        Solar Panels
                    </a>
                </li>
            </ul>

            <div className={styles.menu}>
                <li className={styles.items}>
                    <a href="#" className={styles.itemsLink}>
                        Shop
                    </a>
                </li>
                <li className={styles.items}>
                    <a href="#" className={styles.itemsLink}>
                        Account
                    </a>
                </li>
                <li className={styles.items}>
                    <a href="#" className={styles.itemsLink} >
                        Menu
                    </a>
                </li>
            </div>
        </nav>
    )
}

export default Navbar