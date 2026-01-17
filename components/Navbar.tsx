"use client";

import { Dock, DockIcon } from "@/components/ui/Dock";
import { Home, User, Briefcase, FolderGit2, Mail, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center">
            <Dock className="border border-black/10 dark:border-white/10 shadow-lg bg-white/80 dark:bg-black/80 backdrop-blur-md">
                <DockIcon title="Home">
                    <Link href="#hero" aria-label="Home">
                        <Home className="size-5" />
                    </Link>
                </DockIcon>
                <DockIcon title="About">
                    <Link href="#about" aria-label="About">
                        <User className="size-5" />
                    </Link>
                </DockIcon>
                <DockIcon title="Experience">
                    <Link href="#experience" aria-label="Experience">
                        <Briefcase className="size-5" />
                    </Link>
                </DockIcon>
                <DockIcon title="Projects">
                    <Link href="#projects" aria-label="Projects">
                        <FolderGit2 className="size-5" />
                    </Link>
                </DockIcon>
                <DockIcon title="Education">
                    <Link href="#education" aria-label="Education">
                        <GraduationCap className="size-5" />
                    </Link>
                </DockIcon>
                <DockIcon title="Contact">
                    <Link href="#contact" aria-label="Contact">
                        <Mail className="size-5" />
                    </Link>
                </DockIcon>
            </Dock>
        </div>
    );
}
