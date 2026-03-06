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
        title: "High-Performance Compute Deck",
        description: "Next-generation portable computing workstation for intensive development environments.",
        label: "Hardware",
        price: 1299.00,
        imageSrc: cyberDeck,
        images: ["/images/products/cyber-deck.png"],
        longDescription: "The absolute state-of-the-art in mobile computing hardware. Featuring a proprietary neural processor and a highly responsive haptic feedback interface that makes complex data visualization seamless. Essential for any serious developer operating in demanding environments.",
        specs: [
            { name: "Processing Power", value: "8.4 PetaFLOPS Core" },
            { name: "Memory", value: "256 TB Quantum Static RAM" },
            { name: "Interface", value: "Direct Link (Latency < 0.1ms)" },
            { name: "Compliance Rating", value: "Enterprise Grade" },
            { name: "Power Source", value: "High-Capacity Micro-cell (5 yr lifespan)" }
        ],
        reviews: [
            { id: "r1", author: "AlexDev", rating: 5, date: "2025-10-24", text: "Compiled huge projects like butter. Best processing deck I've ever used." },
            { id: "r2", author: "TechLead_33", rating: 4, date: "2025-10-18", text: "Runs slightly warm under full load, but the processing speed is unmatched. Worth the cost." }
        ]
    },
    {
        id: "holo-projector",
        title: "Volumetric 3D Display",
        description: "Immersive 3D volumetric display projector for professional visualization.",
        label: "Display",
        price: 549.00,
        imageSrc: holoProjector,
        images: ["/images/products/holo-projector.png"],
        longDescription: "Project high-fidelity volumetric constructs into your environment. Perfect for architectural briefings, complex CAD model sharing, and immersive presentations without the need for additional headsets.",
        specs: [
            { name: "Resolution", value: "16K per cubic inch" },
            { name: "Refresh Rate", value: "240 Hz Volumetric" },
            { name: "Color Gamut", value: "True-Life Spectral" },
            { name: "Compliance Rating", value: "Consumer Grade" },
            { name: "Battery", value: "48 hours continuous projection" }
        ],
        reviews: [
            { id: "r3", author: "Architect_Sarah", rating: 5, date: "2025-11-02", text: "The detail on the projections is incredible. Almost mistook a digital model for a real physical prototype." },
            { id: "r4", author: "Jason_Viz", rating: 3, date: "2025-09-15", text: "Great fidelity, but the control software is a bit complex. Needs a UX update." }
        ]
    },
    {
        id: "neon-visor",
        title: "AR Smart Glasses",
        description: "Professional augmented reality visor with real-time environment mapping and tracking.",
        label: "Wearable",
        price: 899.00,
        imageSrc: neonVisor,
        images: ["/images/products/neon-visor.png"],
        longDescription: "Overlay the digital workspace onto the physical world with zero lag. Our AR Smart Glasses integrate seamlessly with your workstation, providing real-time data analytics, system assessment, and environmental mapping.",
        specs: [
            { name: "Display Type", value: "Direct Optic Projection" },
            { name: "Sensor Array", value: "LIDAR, Thermal, EM-Spectrum" },
            { name: "Compatibility", value: "Universal Device Pairing" },
            { name: "Compliance Rating", value: "Industrial Standard" },
            { name: "Durability", value: "Impact Resistant Frame" }
        ],
        reviews: [
            { id: "r5", author: "SiteEngineer", rating: 5, date: "2025-12-01", text: "Saved me hours on site by highlighting structural anomalies instantly. Incredible tool." },
            { id: "r6", author: "DataAnalyst", rating: 4, date: "2025-11-20", text: "The data overlays are excellent, but the battery drains fast when running full spectrum analysis." }
        ]
    },
    {
        id: "neural-link",
        title: "Advanced BCI Interface",
        description: "Direct brain-to-machine interface for high-speed accessibility and communication.",
        label: "Implant",
        price: 2500.00,
        imageSrc: neuralLink,
        images: ["/images/products/neural-link.png"],
        longDescription: "The ultimate productivity upgrade for power users. This minimally invasive hardware allows you to communicate directly with mainframes and advanced systems using direct thought processing.",
        specs: [
            { name: "Bandwidth", value: "10 Gbps Bi-directional" },
            { name: "Installation", value: "Requires Certified Tech-Medic" },
            { name: "Integration Rate", value: "99.9% Compatibility" },
            { name: "Compliance Rating", value: "Medical Grade Approved" },
            { name: "Material", value: "Biocompatible Titanium-Carbon Alloy" }
        ],
        reviews: [
            { id: "r7", author: "CyberMed_Pro", rating: 5, date: "2026-01-15", text: "The installation was quick, and the digital processing speed is amazing. Phenomenal efficiency gain." },
            { id: "r8", author: "User_Unknown", rating: 4, date: "2025-12-30", text: "Takes a few days to get used to the sensory input, but the productivity increase is undeniable." }
        ]
    }
];

export function getProductById(id: string): Product | undefined {
    return products.find(p => p.id === id);
}
