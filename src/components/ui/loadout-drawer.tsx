"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export function LoadoutDrawer() {
    const { items, isDrawerOpen, closeDrawer, updateQuantity, removeFromCart, cartTotal } = useCart();

    if (!isDrawerOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 transition-opacity"
                onClick={closeDrawer}
            />

            {/* Drawer */}
            <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#0a0a0f] border-l border-indigo-500/30 z-50 flex flex-col shadow-[inset_0_0_100px_rgba(79,70,229,0.05),_0_0_40px_rgba(79,70,229,0.15)] transform transition-transform duration-300 ease-in-out">
                <div className="p-6 border-b border-white/10 flex justify-between items-center relative overflow-hidden">
                    {/* Scanline effect */}
                    <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(transparent 50%, rgba(255, 255, 255, 0.05) 50%)', backgroundSize: '100% 4px' }} />

                    <h2 className="text-xl font-medium text-white tracking-widest uppercase relative z-10 flex items-center gap-3">
                        <span className="w-2 h-2 bg-indigo-500 animate-pulse rounded-full shadow-[0_0_10px_rgba(99,102,241,1)]" />
                        Active Loadout
                    </h2>
                    <button onClick={closeDrawer} className="text-white/50 hover:text-white transition relative z-10 p-2 hover:bg-white/5 rounded-lg">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-4 relative">
                    <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                    {items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-white/50 space-y-4 relative z-10">
                            <svg className="w-16 h-16 opacity-20 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="1" />
                                <line x1="2" y1="7" x2="22" y2="7" strokeWidth="1" />
                                <line x1="6" y1="21" x2="18" y2="21" strokeWidth="1" />
                                <line x1="12" y1="17" x2="12" y2="21" strokeWidth="1" />
                            </svg>
                            <p className="tracking-widest uppercase text-xs">Loadout Empty</p>
                            <p className="text-xs text-center px-8 text-white/30">Establish a neural link with items to begin compiling your loadout.</p>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div key={item.id} className="flex gap-4 p-4 border border-indigo-500/20 rounded-xl bg-gradient-to-br from-indigo-500/[0.05] to-transparent hover:border-indigo-500/40 hover:from-indigo-500/[0.08] transition duration-300 group relative z-10 overflow-hidden">

                                <div className="w-20 h-20 shrink-0 rounded-lg bg-[#050508] border border-indigo-500/30 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(90deg, rgba(99, 102, 241, 1) 1px, transparent 1px), linear-gradient(rgba(99, 102, 241, 1) 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
                                    {item.imageSrc ? (
                                        <Image
                                            src={typeof item.imageSrc === 'string' ? item.imageSrc : item.imageSrc}
                                            alt={item.title}
                                            className="w-full h-full object-cover relative z-10 p-1 rounded-lg opacity-90 group-hover:opacity-100 transition duration-300 mix-blend-screen"
                                        />
                                    ) : (
                                        <svg className="w-10 h-10 text-indigo-400 relative z-10 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth="2" />
                                            <path d="M3 5V19C3 20.66 7.03 22 12 22C16.97 22 21 20.66 21 19V5" strokeWidth="2" />
                                        </svg>
                                    )}
                                </div>
                                <div className="flex flex-col justify-between flex-1 min-w-0">
                                    <div className="flex justify-between items-start gap-2">
                                        <div>
                                            <h3 className="text-white font-medium truncate text-sm tracking-wide">{item.title}</h3>
                                            {item.label && <p className="text-[10px] uppercase tracking-wider text-indigo-300/70 mt-0.5">{item.label}</p>}
                                        </div>
                                        <p className="text-indigo-400 font-bold text-sm bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">${item.price.toFixed(2)}</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-3">
                                        <div className="flex items-center gap-1 bg-black/40 rounded border border-white/5 py-0.5 px-1">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="text-white/50 hover:text-white hover:bg-white/10 w-6 h-6 flex items-center justify-center rounded transition"
                                            >
                                                -
                                            </button>
                                            <span className="text-white text-xs w-6 text-center font-medium">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="text-white/50 hover:text-white hover:bg-white/10 w-6 h-6 flex items-center justify-center rounded transition"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-400/50 hover:text-red-400 text-[10px] uppercase tracking-wider transition hover:bg-red-500/10 px-2 py-1 rounded"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="p-6 border-t border-white/10 bg-[#0a0a0f] relative z-10">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-white/50 uppercase tracking-widest text-xs">Total Credits //</span>
                        <span className="text-white font-bold text-2xl tracking-tight">
                            ${cartTotal.toFixed(2)}
                        </span>
                    </div>
                    <button
                        className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold tracking-widest uppercase text-sm transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_40px_rgba(79,70,229,0.5)] flex justify-center items-center gap-2"
                        disabled={items.length === 0}
                    >
                        Initiate Checkout
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}

export function FloatingCartButton() {
    const { itemCount, openDrawer } = useCart();

    if (itemCount === 0) return null;

    return (
        <button
            onClick={openDrawer}
            className="fixed bottom-8 right-8 z-40 bg-[#0a0a0f] border border-indigo-500/50 p-4 rounded-2xl shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] hover:-translate-y-1 transition duration-300 group overflow-hidden"
        >
            <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-indigo-500/20 transition duration-300 pointer-events-none" />
            <div className="relative">
                <svg className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-3 -right-3 bg-fuchsia-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border border-[#0a0a0f] shadow-[0_0_10px_rgba(217,70,239,0.5)]">
                    {itemCount}
                </span>
            </div>
        </button>
    );
}
