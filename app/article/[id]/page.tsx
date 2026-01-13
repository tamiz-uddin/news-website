import { articles } from "@/lib/data";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NewsCard from "../../components/NewsCard";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
    const { id } = await params;
    const article = articles.find((a) => a.id === id);

    if (!article) {
        notFound();
    }

    const relatedArticles = articles
        .filter((a) => a.category === article.category && a.id !== article.id)
        .slice(0, 3);

    return (
        <>
            <Header showTitle={true} />

            <main className="container min-h-screen">
                <article className="max-w-4xl mx-auto border-b pb-12 mb-12">
                    <header className="mb-8 text-center">
                        <div className="flex justify-center mb-4">
                            <span className="bg-gray-100 text-accent font-bold uppercase text-xs tracking-widest px-3 py-1 rounded-full">
                                {article.category}
                            </span>
                        </div>

                        <h1 className="font-serif font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                            {article.title}
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-8 font-serif">
                            {article.summary}
                        </p>

                        <div className="flex items-center justify-center space-x-4 border-t border-b py-4 mx-auto max-w-md">
                            <div className="text-sm font-bold uppercase tracking-wider">
                                By <span className="text-accent">{article.author}</span>
                            </div>
                            <div className="text-gray-300">•</div>
                            <div className="text-sm text-gray uppercase tracking-wider">
                                {article.date}
                            </div>
                        </div>
                    </header>

                    <figure className="relative aspect-video w-full mb-12 rounded-sm overflow-hidden bg-gray-100">
                        <Image
                            src={article.imageUrl}
                            alt={article.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white text-xs text-center opacity-80">
                            Image via Unsplash / {article.category}
                        </figcaption>
                    </figure>

                    <div className="prose prose-lg max-w-2xl mx-auto font-serif text-gray-800 leading-loose">
                        <p className="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-[-4px] first-letter:font-serif">
                            {article.content}
                        </p>
                        <p className="mt-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="mt-6">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <h3 className="text-2xl font-bold mt-8 mb-4 font-sans text-black">A Turning Point?</h3>
                        <p>
                            Sed ut perspiciatis video unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div>
                </article>

                <section className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between mb-8 border-b pb-2">
                        <h2 className="font-serif font-bold text-2xl">Related Stories</h2>
                        <div className="h-1 flex-1 bg-black ml-4 opacity-10"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedArticles.map((article) => (
                            <NewsCard key={article.id} article={article} />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
