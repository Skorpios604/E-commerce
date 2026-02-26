"use client";

import React from "react";
import "./schema-card.css";

export function SchemaCard() {
    return (
        <div className="w-full max-w-xs">
            <div className="relative sc-card-border overflow-hidden rounded-2xl flex flex-col sc-animate-float">
                <div className="p-4 flex justify-center relative">
                    <div className="w-full h-48 sc-gradient-border-wrapper rounded-xl p-[2px]">
                        <div className="w-full h-full rounded-[10px] sc-inner-glow overflow-hidden relative bg-[#0a0a0f]">
                            {/* Animated grid background */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="w-full h-full sc-animate-pulse" style={{ backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
                            </div>

                            {/* Database icon visualization */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg className="w-24 h-24 text-indigo-400 opacity-20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth="2" />
                                    <path d="M3 5V19C3 20.66 7.03 22 12 22C16.97 22 21 20.66 21 19V5" strokeWidth="2" />
                                    <path d="M3 12C3 13.66 7.03 15 12 15C16.97 15 21 13.66 21 12" strokeWidth="2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="p-4">
                    <span className="inline-block px-3 py-1 sc-glass text-indigo-300 rounded-full text-xs font-medium mb-3 border border-indigo-400/30">Database</span>
                    <h3 className="text-lg font-medium text-white mb-2">Schema Management</h3>
                    <p className="text-white/70 mb-4 leading-relaxed text-xs">
                        Design, optimize and maintain your database structure with powerful schema tools.
                    </p>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-indigo-400 hover:text-indigo-300 transition flex items-center text-xs font-medium sc-glass px-3 py-1.5 rounded-lg border border-indigo-400/30">
                            Manage
                            <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <span className="text-white/50 text-xs sc-glass px-2 py-1 rounded-full border border-white/10">Live</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
