export default function Hero() {
    return (
        <div className="relative bg-[#1a1a1a] text-white py-32 md:py-48 overflow-hidden mb-16">
            {/* Background Pattern - subtle noise/texture could go here */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/30 to-transparent pointer-events-none" />

            <div className="container mx-auto relative z-10 flex flex-col items-center justify-center text-center">
                <span className="font-serif italic text-2xl md:text-3xl text-gray-300 mb-[-5px] md:mb-[-10px] z-10">
                    The
                </span>
                <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 relative">
                    GLOBAL JOURNAL
                </h1>
                <p className="font-sans uppercase tracking-[0.2em] text-xs md:text-sm text-gray-400 mb-10 max-w-lg mx-auto">
                    Premium News Source For The Modern Era & Your Trusted Daily Briefing
                </p>

                <button className="bg-white text-black px-8 py-3 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-all transform hover:scale-105 duration-200">
                    Start Reading
                </button>
            </div>
        </div>
    );
}
