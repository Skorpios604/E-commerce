import Image from "next/image";
import HeroText from "@/components/ui/hero-shutter-text";
import ProductGrid from "@/components/ProductGrid";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="h-screen w-full">
        <HeroText />
      </div>
      <ProductGrid />

      <footer className={styles.footer}>
        <p className={styles.footerText}>
          © 2025 NEO-NOIR COMMERCE. DESIGNED BY ANTIGRAVITY.
        </p>
      </footer>
    </main>
  );
}
