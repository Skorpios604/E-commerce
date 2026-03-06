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
            <SchemaCard id="cyber-deck" imageSrc={cyberDeck} title="Compute Deck" label="Hardware" description="Next-generation portable computing workstation for intensive development environments." />
            <SchemaCard id="holo-projector" imageSrc={holoProjector} title="3D Display" label="Display" description="Immersive 3D volumetric display projector for professional visualization." />
            <SchemaCard id="neon-visor" imageSrc={neonVisor} title="Smart Glasses" label="Wearable" description="Professional augmented reality visor with real-time environment mapping and tracking." />
            <SchemaCard id="neural-link" imageSrc={neuralLink} title="BCI Interface" label="Implant" description="Direct brain-to-machine interface for high-speed accessibility and communication." />
          </div>
        </div>
      </section>
    </main>
  );
}
