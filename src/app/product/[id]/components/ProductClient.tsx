"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";

export default function ProductClient({ product }: { product: Product }) {
    const { addToCart } = useCart();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
        <main className="min-h-screen bg-[#050505] text-white pt-24 pb-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-fuchsia-900/10 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/10 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute inset-0 sc-grid-bg opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                {/* Back Navigation */}
                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition text-sm font-code uppercase tracking-wider">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        [ Return to Store ]
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column: Image Viewer */}
                    <div className="lg:col-span-7">
                        <div className="relative rounded-2xl border border-indigo-500/20 bg-[#0a0a0f] p-4 group">
                            {/* Cyberpunk corner accents */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-fuchsia-500 rounded-tl-xl opacity-50" />
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-fuchsia-500 rounded-tr-xl opacity-50" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-fuchsia-500 rounded-bl-xl opacity-50" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-fuchsia-500 rounded-br-xl opacity-50" />

                            {/* Main Image Container */}
                            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-xl overflow-hidden bg-black flex items-center justify-center">
                                {/* Scanline overlay */}
                                <div className="absolute inset-0 z-10 pointer-events-none opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)' }}></div>

                                {/* Holographic grid background */}
                                <div className="absolute inset-0 opacity-40 z-0">
                                    <div className="w-full h-full" style={{
                                        backgroundImage: 'linear-gradient(90deg, rgba(234, 129, 248, 0.3) 1px, transparent 1px), linear-gradient(rgba(129, 140, 248, 0.3) 1px, transparent 1px)',
                                        backgroundSize: '30px 30px',
                                        transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(3)',
                                        transformOrigin: 'top center'
                                    }} />
                                </div>

                                <Image
                                    src={product.imageSrc}
                                    alt={product.title}
                                    className="z-10 object-contain w-3/4 h-3/4 drop-shadow-[0_0_25px_rgba(234,129,248,0.4)] animate-pulse"
                                    style={{ animationDuration: '4s' }}
                                />

                                {/* UI Overlay Elements */}
                                <div className="absolute top-4 left-4 z-20 text-[10px] font-mono text-indigo-400 opacity-70 flex flex-col gap-1">
                                    <span>SYS.V.4.2</span>
                                    <span>TARGET: {product.id.toUpperCase()}</span>
                                    <span>STATUS: ONLINE</span>
                                </div>
                                <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                                    {product.images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImageIndex(idx)}
                                            className={`w-10 h-10 rounded border ${currentImageIndex === idx ? 'border-fuchsia-500 bg-fuchsia-500/20' : 'border-indigo-500/30 bg-black/50'} flex items-center justify-center text-xs font-mono text-indigo-300 backdrop-blur-sm transition-all hover:border-fuchsia-400`}
                                        >
                                            CAM{idx + 1}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Details & Specs */}
                    <div className="lg:col-span-5 flex flex-col">
                        <div className="mb-6">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="px-2 py-1 bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/30 rounded text-xs font-mono uppercase tracking-wider">
                                    {product.label}
                                </span>
                                <span className="text-zinc-500 font-mono text-sm capitalize">
                                    ID: {product.id}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-fuchsia-300 mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                {product.title}
                            </h1>
                            <div className="text-3xl font-mono text-fuchsia-400 mb-6 drop-shadow-[0_0_8px_rgba(234,129,248,0.5)]">
                                $ {product.price.toFixed(2)}
                            </div>
                            <p className="text-zinc-300 font-light leading-relaxed mb-8">
                                {product.longDescription}
                            </p>

                            <button
                                onClick={() => addToCart({ id: product.id, title: product.title, price: product.price, imageSrc: product.imageSrc, label: product.label })}
                                className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium tracking-wide rounded-xl border border-indigo-400/50 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:animate-[shimmer_1.5s_infinite]" />
                                <svg className="w-5 h-5 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                PURCHASE
                            </button>
                        </div>

                        {/* Technical Specs */}
                        <div className="mt-8">
                            <h3 className="text-lg font-mono text-indigo-300 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                </svg>
                                // SPECIFICATIONS
                            </h3>
                            <div className="border border-indigo-900/50 rounded-lg overflow-hidden bg-black/40 backdrop-blur-md">
                                {product.specs.map((spec, index) => (
                                    <div key={index} className={`flex justify-between items-center p-3 text-sm font-mono ${index !== product.specs.length - 1 ? 'border-b border-indigo-900/30' : ''}`}>
                                        <span className="text-zinc-500">{spec.name}</span>
                                        <span className="text-indigo-200 text-right">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="mt-20 border-t border-indigo-900/40 pt-16">
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        <span className="text-fuchsia-500">&gt;_</span> CUSTOMER REVIEWS
                    </h3>
                    <p className="text-zinc-500 font-mono text-sm mb-8">VERIFIED BUYER IMPRESSIONS</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {product.reviews.map((review) => (
                            <div key={review.id} className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm relative group hover:border-indigo-500/40 transition-colors">
                                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-tr-xl pointer-events-none" />
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-mono text-fuchsia-400 font-bold overflow-hidden">
                                            {/* generate glitchy pattern */}
                                            <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at center, #ea81f8 0%, transparent 70%)' }}></div>
                                            {review.author.substring(0, 2).toUpperCase()}
                                        </div>
                                        <div>
                                            <div className="text-indigo-200 font-medium font-mono text-sm">{review.author}</div>
                                            <div className="text-zinc-600 text-xs font-mono">{review.date}</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 text-fuchsia-500">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'opacity-100 drop-shadow-[0_0_2px_rgba(234,129,248,1)]' : 'opacity-20'}`} fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-zinc-300 text-sm leading-relaxed border-l-2 border-indigo-500/30 pl-3 italic">
                                    "{review.text}"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx global>{`
                    @keyframes shimmer {
                        100% {
                            transform: translateX(100%);
                        }
                    }
                `}</style>
        </main>
    );
}
