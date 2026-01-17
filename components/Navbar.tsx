"use client";

import { Dock, DockIcon } from "@/components/ui/Dock";
import { Home, Calendar } from "lucide-react";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
    return (
        <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center">
            <Dock className="border border-black/10 dark:border-white/10 shadow-lg bg-white/80 dark:bg-black/80 backdrop-blur-md">
                <DockIcon title="Home">
                    <Link href="#hero" aria-label="Home">
                        <Home className="size-5" />
                    </Link>
                </DockIcon>
                <DockIcon title="GitHub">
                    <Link href="https://github.com/Sar-Kar666" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className="size-5" />
                    </Link>
                </DockIcon>
                <DockIcon title="LinkedIn">
                    <Link href="https://www.linkedin.com/in/sarkardiptanu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className="size-5" />
                    </Link>
                </DockIcon>
                <DockIcon title="X / Twitter">
                    <Link href="https://x.com/Sarkar_2030" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
                        <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </Link>
                </DockIcon>
                <DockIcon title="Resume">
                    <Link href="https://drive.google.com/file/d/1RncjMPW6J4B4sxe1uc7Pul7vuzI0yLF0/view?usp=sharing" target="_blank" rel="noopener noreferrer" aria-label="Resume">
                        <Calendar className="size-5" />
                    </Link>
                </DockIcon>
                <DockIcon title="Toggle Theme">
                    <ThemeToggle />
                </DockIcon>
            </Dock>
        </div>
    );
}
