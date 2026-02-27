import Image from "next/image";
import HeroText from "@/components/ui/hero-shutter-text";
import { SchemaCard } from "@/components/ui/schema-card";
import styles from "./page.module.css";

import cyberDeck from "@/assets/images/products/cyber-deck.png";
import holoProjector from "@/assets/images/products/holo-projector.png";
import neonVisor from "@/assets/images/products/neon-visor.png";
import neuralLink from "@/assets/images/products/neural-link.png";

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
            <SchemaCard imageSrc={cyberDeck} title="Cyber Deck" label="Hardware" description="Next-generation portable computing interface for quick environment hacking." />
            <SchemaCard imageSrc={holoProjector} title="Holo Projector" label="Display" description="Immersive 3D volumetric display projector that folds into your pocket." />
            <SchemaCard imageSrc={neonVisor} title="Neon Visor" label="Wearable" description="Augmented reality visor with real-time neural mesh integration and tracking." />
            <SchemaCard imageSrc={neuralLink} title="Neural Link" label="Implant" description="Direct brain-to-machine interface for zero-latency thought processing." />
          </div>
        </div>
      </section>
    </main>
  );
}
