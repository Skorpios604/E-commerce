import { products } from "@/data/products";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import styles from "./page.module.css";

import Image from "next/image";

// Generate static params for export
export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id.toString(),
    }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = products.find((p) => p.id.toString() === id);

    if (!product) {
        notFound();
    }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <Link href="/" className={styles.backLink}>
                    <ArrowLeft size={16} />
                    Back to Collection
                </Link>

                <div className={styles.content}>
                    <div className={styles.imageContainer}>
                        <div className={styles.imageGlow} />
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            style={{ objectFit: "cover", zIndex: 1 }}
                            priority
                        />
                    </div>

                    <div className={styles.details}>
                        <span className={styles.category}>{product.category}</span>
                        <h1 className={styles.title}>{product.name}</h1>
                        <p className={styles.price}>{product.price}</p>
                        <p className={styles.description}>{product.description}</p>

                        <div className={styles.actions}>
                            <button className={styles.addToCart}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
