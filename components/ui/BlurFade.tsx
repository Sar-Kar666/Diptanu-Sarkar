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
            filter: `blur(${blur})`,
            scale: 0.98,
        },
        visible: {
            y: 0,
            opacity: 1,
            filter: `blur(0px)`,
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
                ease: [0.16, 1, 0.3, 1], // Custom easing for smooth feel
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
