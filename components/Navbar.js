import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link'

import React from 'react'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href='/'>
            <a>
                <img  src="/images/logo.svg"
                alt='tesla logo'
                loading='lazy'
                className={styling.teslalogo}
                />
            </a>
            </Link>

            <ul className={styles.navbarNav}>
                <li className={styles.item}>
                    <a href="#">
                        Model S
                    </a>
                </li>
                <li className={styles.item}>
                    <a href="#">
                        Model 3
                    </a>
                </li>
                <li className={styles.item}>
                    <a href="#">
                        Model X
                    </a>
                </li>
                <li className={styles.item}>
                    <a href="#">
                        Model Y
                    </a>
                </li>
                <li className={styles.item}>
                    <a href="#">
                        Solar Roof
                    </a>
                </li>
                <li className={styles.item}>
                    <a href="#">
                        Solar Roof
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar