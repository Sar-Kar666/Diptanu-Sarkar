import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { Github, Globe } from "lucide-react";

interface Props {
    title: string;
    href?: string;
    description: string;
    dates: string;
    tags: readonly string[];
    link?: string;
    image?: string;
    video?: string;
    links?: readonly {
        icon: React.ReactNode;
        type: string;
        href: string;
    }[];
    className?: string;
}

export function ProjectCard({
    title,
    href,
    description,
    dates,
    tags,
    link,
    image,
    video,
    links,
    className,
}: Props) {
    return (
        <div
            className={cn(
                "group flex flex-col overflow-hidden border transition-all duration-300 ease-out h-full bg-card text-card-foreground dark:bg-black/40 rounded-xl border-border",
                "hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 hover:-translate-y-1 hover:border-primary/20",
                className
            )}
        >
            <Link href={href || "#"} className="block cursor-pointer">
                {video && (
                    <video
                        src={video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="pointer-events-none mx-auto h-40 w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                )}
                {image && !video && (
                    <div className="h-40 w-full overflow-hidden bg-muted dark:bg-neutral-900 border-b border-border">
                        {/* Placeholder for actual image implementation */}
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm transition-transform duration-300 group-hover:scale-105">
                            {image}
                        </div>
                    </div>
                )}
            </Link>
            <div className="flex flex-col px-4 py-3 h-full">
                <div className="mt-1 flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-lg tracking-tight my-1 group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    {dates && <span className="text-xs text-muted-foreground">{dates}</span>}
                </div>
                <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert mb-2">
                    {description}
                </div>
                <div className="mt-auto flex flex-col gap-2">
                    {tags && tags.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                            {tags?.map((tag) => (
                                <Badge key={tag} className="px-1 py-0 text-[10px]" variant="secondary">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    )}

                    <div className="flex flex-row flex-wrap items-start gap-2 mt-2">
                        {links && links.length > 0 && links.map((link, idx) => (
                            <Link href={link?.href} key={idx} target="_blank">
                                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px] hover:bg-primary/90 transition-colors" variant="default">
                                    {link.icon}
                                    {link.type}
                                </Badge>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
