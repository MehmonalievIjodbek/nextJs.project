import React from 'react';
import styles from '../styles/Home.module.css';
const Header = () => {
    return (
        <section className={styles.section}>
            <div className={styles.textsArea}>
                <h3>Model 3</h3>
                <p>Order Online fro <span className={styles.touchless}>Touchless delivery</span> </p>
            </div>
            <div className={styles.buttons}>
                <div className={styles.btnMain}>
                    <a href="#" className={styles.btn}>
                        custom order
                    </a>
                    <a href="#" className={styles.btn}>
                        existing inventory
                    </a>
                </div>
                <img src="/images/down-arrow.svg" className={styles.downIcon} alt="downIcon"/>
            </div>

        </section>
    );
};

export default Header;