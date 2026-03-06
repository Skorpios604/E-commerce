"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import "./schema-card.css";

interface SchemaCardProps {
    id?: string;
    title?: string;
    description?: string;
    label?: string;
    imageSrc?: StaticImageData | string;
    price?: number;
}

export function SchemaCard({
    id,
    title = "Schema Management",
    description = "Design, optimize and maintain your database structure with powerful schema tools.",
    label = "Database",
    imageSrc,
    price = 99.00
}: SchemaCardProps = {}) {
    const { addToCart } = useCart();

    const productId = id || title.toLowerCase().replace(/\s+/g, '-');

    return (
        <>
            <div className="w-full max-w-xs">
                <div className="relative sc-card-border overflow-hidden rounded-2xl flex flex-col sc-animate-float">
                    <div className="p-4 flex justify-center relative">
                        <div className="w-full h-48 sc-gradient-border-wrapper rounded-xl p-[2px]">
                            <div className="w-full h-full rounded-[10px] sc-inner-glow overflow-hidden relative bg-[#0a0a0f]">
                                {/* Animated grid background */}
                                <div className="absolute inset-0 opacity-100">
                                    <div className="w-full h-full sc-animate-pulse" style={{
                                        backgroundImage: 'linear-gradient(90deg, rgba(234, 129, 248, 0.8) 2px, transparent 1px), linear-gradient(rgba(248, 129, 228, 0.8) 2px, transparent 2px)',
                                        backgroundSize: '15px 15px',
                                        filter: 'drop-shadow(0 0 6px rgba(221, 47, 221, 1))'
                                    }} />
                                </div>

                                {/* Product Image or Database icon visualization */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {imageSrc ? (
                                        <Image
                                            src={imageSrc}
                                            alt={title}
                                            className="w-full h-full object-cover opacity-100 mix-blend-screen"
                                        />
                                    ) : (
                                        <svg className="w-24 h-24 text-indigo-400 opacity-20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth="2" />
                                            <path d="M3 5V19C3 20.66 7.03 22 12 22C16.97 22 21 20.66 21 19V5" strokeWidth="2" />
                                            <path d="M3 12C3 13.66 7.03 15 12 15C16.97 15 21 13.66 21 12" strokeWidth="2" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    <div className="p-4">
                        <span className="inline-block px-3 py-1 sc-glass text-indigo-300 rounded-full text-xs font-medium mb-3 border border-indigo-400/30">{label}</span>
                        <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
                        <p className="text-white/70 mb-4 leading-relaxed text-xs">
                            {description}
                        </p>
                        <div className="flex justify-end items-center gap-2">
                            <Link href={`/product/${productId}`} className="text-fuchsia-400 hover:text-fuchsia-300 transition flex items-center text-xs font-medium sc-glass px-3 py-1.5 rounded-lg border border-fuchsia-400/30">
                                View Specs
                            </Link>
                            <button onClick={(e) => {
                                e.preventDefault();
                                addToCart({ id: productId, title, price, imageSrc, label });
                            }} className="text-indigo-400 hover:text-indigo-300 transition flex items-center text-xs font-medium sc-glass px-3 py-1.5 rounded-lg border border-indigo-400/30">
                                Add to Cart
                                <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
