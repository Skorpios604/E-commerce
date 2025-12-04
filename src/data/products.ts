export interface Product {
    id: number;
    name: string;
    price: string;
    category: string;
    description: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Cyber Deck",
        price: "$299",
        category: "Hardware",
        description: "A portable hacking terminal with a holographic display and mechanical keys. Essential for any netrunner."
    },
    {
        id: 2,
        name: "Neon Visor",
        price: "$149",
        category: "Wearable",
        description: "Augmented reality visor with night vision and thermal overlay. Style meets tactical advantage."
    },
    {
        id: 3,
        name: "Neural Link",
        price: "$999",
        category: "Implant",
        description: "Direct brain-computer interface. Experience the net at the speed of thought. Installation required."
    },
    {
        id: 4,
        name: "Holo Projector",
        price: "$499",
        category: "Gadget",
        description: "Pocket-sized 3D hologram projector. Perfect for presentations or distractions."
    },
];
