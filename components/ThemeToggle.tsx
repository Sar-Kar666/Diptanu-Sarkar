"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // Avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        console.log("Theme toggled to:", newTheme);
    };

    if (!mounted) {
        return <Sun className="size-5" />;
    }

    return (
        <div
            onClick={toggleTheme}
            className="flex items-center justify-center cursor-pointer"
            style={{ pointerEvents: 'auto' }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    toggleTheme();
                }
            }}
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun className="size-5" />
            ) : (
                <Moon className="size-5" />
            )}
        </div>
    );
}
