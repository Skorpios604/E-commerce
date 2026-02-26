import Image from "next/image";
import HeroText from "@/components/ui/hero-shutter-text";
import { SchemaCard } from "@/components/ui/schema-card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="h-screen w-full relative">
        <HeroText />
      </div>

      {/* Schema Cards Section */}
      <section className="min-h-screen bg-[#050505] w-full py-20 flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
            <SchemaCard />
            <SchemaCard />
            <SchemaCard />
            <SchemaCard />
          </div>
        </div>
      </section>
    </main>
  );
}
