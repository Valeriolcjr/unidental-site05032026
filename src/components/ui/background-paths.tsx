"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M${-100 + i * 20 * position} ${500}
            C${50 + i * 15 * position} ${350 - i * 8} ${200 - i * 10 * position} ${150 + i * 5} ${350 + i * 8 * position} ${100 - i * 3}
            S${500 - i * 12 * position} ${-50 + i * 6} ${650 + i * 5 * position} ${150 - i * 4}
            C${750 - i * 8 * position} ${250 + i * 7} ${800 + i * 10 * position} ${400 - i * 5} ${700 - i * 15 * position} ${500}
            S${400 + i * 20 * position} ${350 + i * 8} ${200 - i * 12 * position} ${200 - i * 6}
            C${100 + i * 8 * position} ${100 + i * 4} ${-50 - i * 5 * position} ${250 - i * 3} ${-100 + i * 20 * position} ${500}`,
        width: 0.3 + i * 0.02,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg
                className="w-full h-full text-white/50"
                viewBox="0 0 800 600"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.15 + path.id * 0.012}
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0.3 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.2, 0.5, 0.2],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 15 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />
        </div>
    );
}
