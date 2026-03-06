import { StaticImageData } from "next/image";
import cyberDeck from "@/assets/images/products/cyber-deck.png";
import holoProjector from "@/assets/images/products/holo-projector.png";
import neonVisor from "@/assets/images/products/neon-visor.png";
import neuralLink from "@/assets/images/products/neural-link.png";

export interface Review {
    id: string;
    author: string;
    rating: number; // 1 to 5
    text: string;
    date: string;
}

export interface ProductSpec {
    name: string;
    value: string;
}

export interface Product {
    id: string;
    title: string;
    description: string;
    label: string;
    price: number;
    imageSrc: StaticImageData;
    longDescription: string;
    specs: ProductSpec[];
    reviews: Review[];
    // Simulated multiple angles/images for the viewer
    images: string[]; // You could use actual multiple images if available, we'll repeat the main image for mock purposes if needed
}

export const products: Product[] = [
    {
        id: "cyber-deck",
        title: "Cyber Deck",
        description: "Next-generation portable computing interface for quick environment hacking.",
        label: "Hardware",
        price: 1299.00,
        imageSrc: cyberDeck,
        images: ["/images/products/cyber-deck.png"],
        longDescription: "The absolute state-of-the-art in mobile intrusion hardware. Featuring a military-grade neural processor and a haptic feedback interface that makes cyberspace feel like physical reality. Essential for any serious netrunner operating in the high-sec zones.",
        specs: [
            { name: "Processing Power", value: "8.4 PetaFLOPS Neural Core" },
            { name: "Memory", value: "256 YB Quantum Static RAM" },
            { name: "Interface", value: "Direct Neural Link (Latency < 0.1ms)" },
            { name: "Black Market Legality", value: "Class 4 Restricted" },
            { name: "Power Source", value: "Micro-fusion cell (10 yr lifespan)" }
        ],
        reviews: [
            { id: "r1", author: "GhostInTheShell", rating: 5, date: "2077-10-24", text: "Burned through ICE like butter. Best deck I've ever jacked into." },
            { id: "r2", author: "Gl1tch", rating: 4, date: "2077-10-18", text: "Runs hot under heavy load, but the processing speed is unmatched. Worth the creds." }
        ]
    },
    {
        id: "holo-projector",
        title: "Holo Projector",
        description: "Immersive 3D volumetric display projector that folds into your pocket.",
        label: "Display",
        price: 549.00,
        imageSrc: holoProjector,
        images: ["/images/products/holo-projector.png"],
        longDescription: "Project high-fidelity volumetric constructs into your environment without the need for active ocular implants. Perfect for tactical briefings, encrypted blueprint sharing, or just watching neon-noir classics.",
        specs: [
            { name: "Resolution", value: "16K per cubic inch" },
            { name: "Refresh Rate", value: "240 Hz Volumetric" },
            { name: "Color Gamut", value: "True-Life Spectral" },
            { name: "Black Market Legality", value: "Unrestricted" },
            { name: "Battery", value: "48 hours continuous projection" }
        ],
        reviews: [
            { id: "r3", author: "Nova", rating: 5, date: "2077-11-02", text: "The detail on the projections is insane. Almost mistook a holo for a real physical object." },
            { id: "r4", author: "ZeroCool", rating: 3, date: "2077-09-15", text: "Good tech, but the UI is a bit clunky. Needs a firmware update." }
        ]
    },
    {
        id: "neon-visor",
        title: "Neon Visor",
        description: "Augmented reality visor with real-time neural mesh integration and tracking.",
        label: "Wearable",
        price: 899.00,
        imageSrc: neonVisor,
        images: ["/images/products/neon-visor.png"],
        longDescription: "Overlay the digital realm onto the physical world with zero lag. The Neon Visor integrates directly with your optic nerve via a non-invasive induction bridge, providing real-time combat analytics, threat assessment, and environmental data.",
        specs: [
            { name: "Display Type", value: "Direct Optic Induction" },
            { name: "Sensor Array", value: "LIDAR, Thermal, EM-Spectrum" },
            { name: "Neural Compatibility", value: "Universal (Gen 3+)" },
            { name: "Black Market Legality", value: "Class 2 Restricted" },
            { name: "Armor Rating", value: "Ballistic Weave Level II" }
        ],
        reviews: [
            { id: "r5", author: "Razorgirl", rating: 5, date: "2077-12-01", text: "Saved my life in a firefight by highlighting a cloaked target. Never leave home without it." },
            { id: "r6", author: "Maelstrom", rating: 4, date: "2077-11-20", text: "Filters are good, but the battery drains fast when running full spectrum analysis." }
        ]
    },
    {
        id: "neural-link",
        title: "Neural Link",
        description: "Direct brain-to-machine interface for zero-latency thought processing.",
        label: "Implant",
        price: 2500.00,
        imageSrc: neuralLink,
        images: ["/images/products/neural-link.png"],
        longDescription: "The ultimate upgrade for the serious operator. This surgical implant allows you to interface directly with mainframes, vehicles, and smart weapons using pure thought. Side effects may include mild dissociation and digital phantom limb syndrome.",
        specs: [
            { name: "Bandwidth", value: "10 Pbps Bi-directional" },
            { name: "Installation", value: "Requires Level 4 Ripperdoc" },
            { name: "Rejection Rate", value: "< 0.01% with immuno-suppressants" },
            { name: "Black Market Legality", value: "Highly Illegal (Class 5)" },
            { name: "Material", value: "Biocompatible Titanium-Carbon Alloy" }
        ],
        reviews: [
            { id: "r7", author: "ChromeDome", rating: 5, date: "2078-01-15", text: "The installation was hell, but pure digital speed is intoxicating. I AM the machine." },
            { id: "r8", author: "Meatbag", rating: 1, date: "2077-12-30", text: "Body rejected it. Spent a week in the clinic. Be careful what you put in your head." }
        ]
    }
];

export function getProductById(id: string): Product | undefined {
    return products.find(p => p.id === id);
}
