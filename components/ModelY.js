import React from 'react';
import styles from '../styles/Home.module.css';

const ModelY = () => {
    return (
        <section className={styles.section}>
            <div className={styles.textsArea}>
                <h3>ModelY</h3>
                <p>Order Online fro <span className={styles.touchless}>Touchless delivery</span></p>
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
            </div>

        </section>
    );
};

export default ModelY;