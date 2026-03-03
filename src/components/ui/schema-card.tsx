"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import "./schema-card.css";

interface SchemaCardProps {
    title?: string;
    description?: string;
    label?: string;
    imageSrc?: StaticImageData;
}

export function SchemaCard({
    title = "Schema Management",
    description = "Design, optimize and maintain your database structure with powerful schema tools.",
    label = "Database",
    imageSrc
}: SchemaCardProps = {}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                        <div className="flex justify-end items-center">
                            <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="text-indigo-400 hover:text-indigo-300 transition flex items-center text-xs font-medium sc-glass px-3 py-1.5 rounded-lg border border-indigo-400/30">
                                Purchase
                                <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Purchase Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="sc-card-border bg-[#0a0a0f] rounded-2xl w-full max-w-md relative overflow-hidden sc-animate-float">
                        <div className="flex justify-between items-center p-4 border-b border-white/10">
                            <h2 className="text-xl font-semibold text-white">Complete Purchase</h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-white/50 hover:text-white transition">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-col items-center mb-6 text-center mt-2">
                                <div className="w-40 h-40 shrink-0 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-400/20 mb-4 relative overflow-hidden bg-[#0a0a0f]">
                                    {/* Animated grid background */}
                                    <div className="absolute inset-0 opacity-100 pointer-events-none">
                                        <div className="w-full h-full sc-animate-pulse" style={{
                                            backgroundImage: 'linear-gradient(90deg, rgba(234, 129, 248, 0.8) 2px, transparent 2px), linear-gradient(rgba(248, 129, 228, 0.8) 2px, transparent 2px)',
                                            backgroundSize: '15px 15px',
                                            filter: 'drop-shadow(0 0 6px rgba(221, 47, 221, 1))'
                                        }} />
                                    </div>

                                    {imageSrc ? (
                                        <Image
                                            src={imageSrc}
                                            alt={title}
                                            className="w-full h-full object-cover rounded-xl relative z-10"
                                        />
                                    ) : (
                                        <svg className="w-20 h-20 text-indigo-400 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth="2" />
                                            <path d="M3 5V19C3 20.66 7.03 22 12 22C16.97 22 21 20.66 21 19V5" strokeWidth="2" />
                                            <path d="M3 12C3 13.66 7.03 15 12 15C16.97 15 21 13.66 21 12" strokeWidth="2" />
                                        </svg>
                                    )}
                                </div>
                                <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
                                <p className="text-sm text-indigo-300 px-3 py-1 bg-indigo-500/10 rounded-full border border-indigo-400/20">{label}</p>
                            </div>
                            <p className="text-white/70 text-sm mb-6 pb-6 border-b border-white/10 text-center">
                                {description}
                            </p>
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-white font-medium">Total</span>
                                <span className="text-white font-bold text-xl">$99.00</span>
                            </div>
                            <button onClick={() => setIsModalOpen(false)} className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition duration-200">
                                Confirm Purchase
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
