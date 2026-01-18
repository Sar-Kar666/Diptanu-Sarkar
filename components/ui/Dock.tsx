"use client";

import React, { useRef, useState } from "react";
import { MotionValue, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface DockProps {
    className?: string;
    children: React.ReactNode;
}

interface DockIconProps {
    magnification?: number;
    distance?: number;
    mouseX?: MotionValue<number>;
    className?: string;
    children: React.ReactNode;
    title?: string;
}

export function Dock({ className, children }: DockProps) {
    const mouseX = useMotionValue(Infinity);

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                "mx-auto flex h-16 gap-4 items-end rounded-2xl bg-white/80 dark:bg-black/90 border border-black/10 dark:border-white/20 px-4 pb-3 backdrop-blur-md shadow-lg",
                className
            )}
        >
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<any>, { mouseX });
                }
                return child;
            })}
        </motion.div>
    );
}

export function DockIcon({
    magnification = 2,
    distance = 140,
    mouseX,
    className,
    children,
    title,
}: DockIconProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const distanceCalc = useTransform(mouseX || useMotionValue(Infinity), (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(
        distanceCalc,
        [-distance, 0, distance],
        [40, 40 * magnification, 40]
    );

    const width = useSpring(widthSync, {
        mass: 0.1,
        stiffness: 150, // Reduced from 200 for smoother animation
        damping: 12, // Adjusted for better smoothness
        restDelta: 0.001, // Helps animations settle faster
    });

    return (
        <motion.div
            ref={ref}
            style={{
                width,
                // GPU acceleration hints
                transform: "translate3d(0, 0, 0)",
                willChange: "width",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                "flex aspect-square cursor-pointer items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800 relative",
                className
            )}
        >
            {children}
            {title && isHovered && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                        duration: 0.15,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                        transform: "translate3d(0, 0, 0)",
                        willChange: "transform, opacity",
                    }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 px-2 py-1 bg-black dark:bg-white text-white dark:text-black text-xs rounded-md whitespace-nowrap pointer-events-none"
                >
                    {title}
                </motion.div>
            )}
        </motion.div>
    );
}
