import Link from "next/link";
// Removed Avatar imports
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface Props {
    title: string;
    subtitle?: string;
    description: string;
    dates: string;
    location: string;
    image?: string;
    links?: readonly {
        icon: React.ReactNode;
        title: string;
        href: string;
    }[];
}

export const ResumeCard = ({
    title,
    subtitle,
    description,
    dates,
    location,
    image,
    links,
}: Props) => {
    return (
        <div className="flex gap-4">
            <div className="flex-none">
                <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-white dark:bg-black dark:border-white/10">
                    {image ? (
                        <img src={image} alt={title} className="object-contain h-full w-full" />
                    ) : (
                        <div className="text-xs font-bold">{title[0]}</div>
                    )}
                </div>
            </div>
            <div className="flex-grow flex flex-col group">
                <div className="flex items-center justify-between text-base">
                    <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                        {title}
                    </h3>
                    <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right text-gray-500 dark:text-gray-400">
                        {dates}
                    </div>
                </div>
                <div className="flex items-center justify-between text-xs font-medium mb-2 mt-1">
                    <div className="flex items-center gap-1">
                        {subtitle && <span className="font-semibold text-zinc-600 dark:!text-white">{subtitle}</span>}
                        {subtitle && location && <span className="text-zinc-600 dark:!text-white">•</span>}
                        <span className="capitalize text-zinc-600 dark:!text-white">{location}</span>
                    </div>
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {description}
                </div>
            </div>
        </div>
    );
};
