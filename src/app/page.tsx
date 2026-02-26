import Image from "next/image";
import HeroText from "@/components/ui/hero-shutter-text";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="h-screen w-full">
        <HeroText />
      </div>
    </main>
  );
}
