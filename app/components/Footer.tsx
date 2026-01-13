import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t mt-12 py-12 bg-gray-50">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="font-serif font-bold text-lg mb-4">The Global Journal</h3>
                        <p className="text-sm text-gray leading-relaxed mb-4">
                            Delivering the truth with integrity and depth. Your trusted source for global news since 2025.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold uppercase text-xs tracking-widest mb-4">Sections</h4>
                        <div className="flex flex-col space-y-2 text-sm text-gray">
                            <Link href="#" className="hover:text-accent">World</Link>
                            <Link href="#" className="hover:text-accent">Politics</Link>
                            <Link href="#" className="hover:text-accent">Technology</Link>
                            <Link href="#" className="hover:text-accent">Business</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold uppercase text-xs tracking-widest mb-4">About Us</h4>
                        <div className="flex flex-col space-y-2 text-sm text-gray">
                            <Link href="#" className="hover:text-accent">Our Story</Link>
                            <Link href="#" className="hover:text-accent">Careers</Link>
                            <Link href="#" className="hover:text-accent">Ethics Policy</Link>
                            <Link href="#" className="hover:text-accent">Contact</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold uppercase text-xs tracking-widest mb-4">Subscribe</h4>
                        <p className="text-sm text-gray mb-4">Get the latest news delivered to your inbox daily.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="flex-1 px-3 py-2 border text-sm rounded-l-sm focus:outline-none focus:border-accent"
                            />
                            <button className="bg-[var(--color-fg)] text-[var(--color-bg)] px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-r-sm hover:opacity-90">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t pt-8 flex justify-between items-center text-xs text-gray uppercase tracking-wider">
                    <div>© 2025 The Global Journal. All rights reserved.</div>
                    <div className="space-x-4">
                        <Link href="#" className="hover:text-accent">Privacy</Link>
                        <Link href="#" className="hover:text-accent">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
