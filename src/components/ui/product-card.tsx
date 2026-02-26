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
            // Clear the canvas each frame
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
                const r = 79 + intensity * 100;
                const g = 70 + intensity * 130;
                const b = 229;
                ctx.lineWidth = 1 + i * 0.3;
                ctx.strokeStyle = `rgba(${r},${g},${b},0.6)`;
                ctx.shadowColor = `rgba(${r},${g},${b},0.5)`;
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
        <div ref={containerRef} className="relative w-full aspect-[3/4] card-border overflow-hidden rounded-2xl flex flex-col animate-float bg-black/50 backdrop-blur-sm group">
            {/* Animated Canvas Background (bounded by the card) */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

            {/* Inner Layout Container */}
            <div className="absolute inset-0 flex flex-col z-10 w-full h-full justify-between pointer-events-none">

                {/* Top Image Section */}
                <div className="p-4 flex justify-center relative flex-1 min-h-0">
                    <div className="w-full h-full rounded-xl gradient-border inner-glow overflow-hidden relative pointer-events-auto">
                        {/* Animated grid background */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="w-full h-full animate-pulse z-0" style={{ backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
                        </div>

                        {/* Image */}
                        {product.image && (
                            <div className="absolute inset-0 flex items-center justify-center p-6 z-10 transition-transform duration-500 group-hover:scale-110">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain p-6 drop-shadow-[0_0_15px_rgba(79,70,229,0.5)]"
                                    sizes="(max-width: 768px) 100vw, 300px"
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Divider Line */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent flex-shrink-0" />

                {/* Bottom Details Section */}
                <div className="p-4 flex-shrink-0 pointer-events-auto">
                    <span className="inline-block px-3 py-1 glass text-indigo-300 rounded-full text-xs font-medium mb-3 border border-indigo-400/30">
                        {product.category}
                    </span>
                    <h3 className="text-lg font-medium text-white mb-2">{product.name}</h3>
                    <p className="text-white/70 mb-4 leading-relaxed text-xs line-clamp-2">
                        {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                        <span className="text-indigo-400 hover:text-indigo-300 transition flex items-center text-xs font-medium glass px-3 py-1.5 rounded-lg border border-indigo-400/30 hover:bg-white/5 cursor-pointer">
                            View
                            <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        <span className="text-white/50 text-xs glass px-2 py-1 rounded-full border border-white/10">
                            {product.price}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}
