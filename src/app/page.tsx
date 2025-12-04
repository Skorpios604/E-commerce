import Image from "next/image";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <ProductGrid />

      <footer className={styles.footer}>
        <p className={styles.footerText}>
          © 2025 NEO-NOIR COMMERCE. DESIGNED BY ANTIGRAVITY.
        </p>
      </footer>
    </main>
  );
}
