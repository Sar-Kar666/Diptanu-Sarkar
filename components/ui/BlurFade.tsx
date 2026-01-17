"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

interface BlurFadeProps {
    children: React.ReactNode;
    className?: string;
    variant?: {
        hidden: { y: number };
        visible: { y: number };
    };
    duration?: number;
    delay?: number;
    yOffset?: number;
    inView?: boolean;
    inViewMargin?: string;
    blur?: string;
}

export default function BlurFade({
    children,
    className,
    variant,
    duration = 0.4,
    delay = 0,
    yOffset = 6,
    inView = true,
    inViewMargin = "-50px",
    blur = "6px",
}: BlurFadeProps) {
    const ref = useRef(null);
    const inViewResult = useInView(ref, { once: true, margin: inViewMargin as any });
    const isInView = !inView || inViewResult;

    const defaultVariants: Variants = {
        hidden: {
            y: yOffset,
            opacity: 0,
            // Removed expensive filter blur - causes lag in production
            scale: 0.98,
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
        },
    };

    const combinedVariants = variant || defaultVariants;

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            exit="hidden"
            variants={combinedVariants}
            transition={{
                delay: 0.04 + delay,
                duration,
                ease: [0.22, 1, 0.36, 1], // Optimized easing curve for smoother animations
            }}
            style={{
                // GPU acceleration hints
                transform: "translate3d(0, 0, 0)",
                willChange: isInView ? "auto" : "transform, opacity",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
