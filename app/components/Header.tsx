import Link from "next/link";

interface HeaderProps {
    showTitle?: boolean;
}

export default function Header({ showTitle = true }: HeaderProps) {
    const currentDate = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <header className={`border-b sticky top-0 bg-[var(--color-bg)] z-50 transition-all ${showTitle ? 'py-8 mb-8' : 'py-4 mb-0'}`}>
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-4 text-[10px] md:text-xs">
                    <div className="font-bold uppercase tracking-wider text-gray">{currentDate}</div>
                    <div className="font-bold uppercase tracking-wider text-gray">New York, NY 68°F</div>
                </div>

                {showTitle && (
                    <div className="flex justify-center mb-6">
                        <Link href="/" className="text-4xl font-serif font-black tracking-tight hover:opacity-80 transition-opacity text-center">
                            The Global Journal
                        </Link>
                    </div>
                )}

                <nav className="flex justify-center space-x-6 md:space-x-8 border-t border-b py-3 border-[var(--color-border)] overflow-x-auto">
                    {["World", "Politics", "Business", "Tech", "Science", "Health", "Sports", "Opinion"].map((item) => (
                        <Link key={item} href={`#${item.toLowerCase()}`} className="nav-link uppercase text-[10px] md:text-xs tracking-widest hover:text-accent whitespace-nowrap">
                            {item}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
