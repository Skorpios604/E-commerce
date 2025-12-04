"use client";

import { motion } from "framer-motion";
import styles from "./ProductGrid.module.css";

const products = [
    { id: 1, name: "Cyber Deck", price: "$299", category: "Hardware" },
    { id: 2, name: "Neon Visor", price: "$149", category: "Wearable" },
    { id: 3, name: "Neural Link", price: "$999", category: "Implant" },
    { id: 4, name: "Holo Projector", price: "$499", category: "Gadget" },
];

export default function ProductGrid() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        LATEST <span className={styles.accent}>DROPS</span>
                    </h2>
                    <span className={styles.counter}>01 / 04</span>
                </div>

                <div className={styles.grid}>
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={styles.card}
                        >
                            <div className={styles.cardOverlay} />

                            <div className={styles.cardGlow}>
                                <div className={styles.glowBlob} />
                            </div>

                            <div className={styles.cardContent}>
                                <p className={styles.category}>
                                    {product.category}
                                </p>
                                <h3 className={styles.productName}>
                                    {product.name}
                                </h3>
                                <p className={styles.price}>{product.price}</p>
                            </div>

                            {/* Decorative Corner */}
                            <div className={styles.corner} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
