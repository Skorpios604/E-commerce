import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Product } from '@/data/products';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let time = 0;
        let animationFrameId: number;

        const waveData = Array.from({ length: 8 }).map(() => ({
            value: Math.random() * 0.5 + 0.1,
            targetValue: Math.random() * 0.5 + 0.1,
            speed: Math.random() * 0.02 + 0.01
        }));

        // Observe container for resize
        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                if (entry.target === containerRef.current) {
                    canvas.width = entry.contentRect.width;
                    canvas.height = entry.contentRect.height;
                }
            }
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
            // backup initial size
            canvas.width = containerRef.current.clientWidth;
            canvas.height = containerRef.current.clientHeight;
        }

        function updateWaveData() {
            waveData.forEach(data => {
                if (Math.random() < 0.01) data.targetValue = Math.random() * 0.7 + 0.1;
                const diff = data.targetValue - data.value;
                data.value += diff * data.speed;
            });
        }

        function draw() {
            if (!canvas || !ctx) return;
            // clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            waveData.forEach((data, i) => {
                const freq = data.value * 7;
                ctx.beginPath();
                for (let x = 0; x < canvas.width; x++) {
                    const nx = (x / canvas.width) * 2 - 1;
                    const px = nx + i * 0.04 + freq * 0.03;
                    const py = Math.sin(px * 10 + time) * Math.cos(px * 2) * freq * 0.1 * ((i + 1) / 8);
                    const y = (py + 1) * canvas.height / 2;
                    x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
                }
                const intensity = Math.min(1, freq * 0.3);
                // Acid green base color: D4FF00 = rgb(212, 255, 0)
                const r = 212 + intensity * 43;
                const g = 255;
                const b = 0;

                ctx.lineWidth = 1 + i * 0.3;
                ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.6)`;
                ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.5)`;
                ctx.shadowBlur = 5;
                ctx.stroke();
                ctx.shadowBlur = 0;
            });
        }

        function animate() {
            time += 0.02;
            updateWaveData();
            draw();
            animationFrameId = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            if (containerRef.current) resizeObserver.unobserve(containerRef.current);
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div ref={containerRef} className="relative w-full aspect-[3/4] flex items-center justify-center rounded-2xl overflow-hidden group">
            {/* Animated Canvas Background */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Overlay to darken behind the card UI */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-0 pointer-events-none" />

            <div className="absolute inset-0 flex flex-col p-4 z-10 w-full h-full justify-between pointer-events-none">
                <div className="w-full h-full relative card-border overflow-hidden rounded-2xl flex flex-col group-hover:-translate-y-2 transition-transform duration-500 pointer-events-auto shadow-2xl bg-black/50 backdrop-blur-sm">
                    {/* Top Image Section */}
                    <div className="p-4 flex justify-center relative flex-1 min-h-0">
                        <div className="w-full h-full rounded-xl gradient-border inner-glow overflow-hidden relative group-hover:shadow-[0_0_30px_rgba(212,255,0,0.15)] transition-shadow duration-500">
                            {/* Animated grid background */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="w-full h-full animate-pulse" style={{ backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center p-6">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain p-6 mix-blend-screen drop-shadow-[0_0_15px_rgba(212,255,0,0.5)] group-hover:scale-110 transition-transform duration-700 ease-out"
                                    sizes="(max-width: 768px) 100vw, 300px"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                    {/* Bottom Details Section */}
                    <div className="p-5 flex-shrink-0 relative overflow-hidden">
                        {/* Glow on hover behind text */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <span className="inline-block px-3 py-1 glass text-accent rounded-full text-xs font-medium mb-3 border border-white/10 shadow-[0_0_10px_rgba(212,255,0,0.1)]">
                            {product.category}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-2 font-syne tracking-tight group-hover:text-accent transition-colors duration-300">
                            {product.name}
                        </h3>

                        <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                            <span className="text-white font-bold tracking-wider text-lg">{product.price}</span>
                            <span className="text-white/70 text-sm glass px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 group-hover:border-accent/40 group-hover:text-white transition-all duration-300 group-hover:bg-white/5">
                                View
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
