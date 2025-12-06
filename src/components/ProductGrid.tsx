"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./ProductGrid.module.css";
import { products } from "@/data/products";

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
                        <Link key={product.id} href={`/products/${product.id}`} passHref legacyBehavior>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={styles.card}
                            >
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className={styles.productImage}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                </div>
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
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
