"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import noise from "@/assets/noise.svg";

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Background Elements */}
            <div className={styles.background}>
                <div className={styles.blob1} />
                <div className={styles.blob2} />
                <div
                    className={styles.noise}
                    style={{ backgroundImage: `url(${noise.src})` }}
                />
            </div>

            <div className={styles.content}>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className={styles.title}
                >
                    FUTURE <br />
                    <span className={styles.gradientText}>
                        AESTHETICS
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className={styles.subtitle}
                >
                    Redefining digital commerce with a neo-noir touch.
                    Experience the next generation of shopping.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <button className={styles.button}>
                        EXPLORE COLLECTION
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
