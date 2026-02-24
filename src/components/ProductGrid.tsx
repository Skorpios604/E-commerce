"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./ProductGrid.module.css";
import ProductCard from "./ui/product-card";
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
                        <Link key={product.id} href={`/products/${product.id}`} className="block w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="w-full h-full"
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
