import Link from "next/link";
import Image from "next/image";
import { Article } from "@/lib/data";

interface NewsCardProps {
    article: Article;
    variant?: "featured" | "compact" | "default";
}

export default function NewsCard({ article, variant = "default" }: NewsCardProps) {
    if (variant === "featured") {
        return (
            <Link href={`/article/${article.id}`} className="group block mb-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-8 relative aspect-video w-full overflow-hidden rounded-sm">
                        <Image
                            src={article.imageUrl}
                            alt={article.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="md:col-span-4 flex flex-col justify-center">
                        <span className="text-accent font-bold uppercase text-xs tracking-widest mb-2">
                            {article.category}
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-4 group-hover:underline decoration-2 underline-offset-4">
                            {article.title}
                        </h2>
                        <p className="text-gray-500 text-lg mb-4 line-clamp-3">
                            {article.summary}
                        </p>
                        <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
                            By {article.author} • {article.date}
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

    if (variant === "compact") {
        return (
            <Link href={`/article/${article.id}`} className="group flex gap-4 mb-4 items-start border-b pb-4 last:border-0 last:pb-0">
                <div className="flex-1">
                    <span className="text-accent font-bold uppercase text-[10px] tracking-widest mb-1 block">
                        {article.category}
                    </span>
                    <h3 className="font-serif font-bold text-base leading-snug group-hover:text-accent transition-colors mb-1">
                        {article.title}
                    </h3>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">
                        {article.date}
                    </div>
                </div>
                <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-sm">
                    <Image
                        src={article.imageUrl}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
            </Link>
        );
    }

    // Default variant
    return (
        <Link href={`/article/${article.id}`} className="group flex flex-col h-full">
            <div className="relative aspect-video w-full mb-4 overflow-hidden rounded-sm">
                <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="flex-1 flex flex-col">
                <span className="text-accent font-bold uppercase text-xs tracking-widest mb-2">
                    {article.category}
                </span>
                <h3 className="font-serif font-bold text-xl leading-snug mb-2 group-hover:underline decoration-2 underline-offset-4">
                    {article.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3 line-clamp-2 flex-1">
                    {article.summary}
                </p>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-auto">
                    {article.date}
                </div>
            </div>
        </Link>
    );
}
