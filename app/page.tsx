import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NewsCard from "./components/NewsCard";
import { articles } from "@/lib/data";

export default function Home() {
  const topStories = articles.slice(0, 4);
  const sideStories = articles.slice(4, 6);

  return (
    <>
      <Header showTitle={false} />

      <main className="min-h-screen">
        {/* Hero Section */}
        <Hero />

        <div className="container mx-auto">
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* Main Feed */}
            <div className="lg:col-span-8">
              <div className="flex justify-between items-center mb-6 border-b pb-2">
                <h2 className="font-serif font-bold text-2xl">Top Stories</h2>
                <span className="text-xs font-bold uppercase tracking-widest text-accent cursor-pointer">View All</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {topStories.map(article => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 pl-0 lg:pl-8 border-l-0 lg:border-l">
              <div className="mb-6 border-b pb-2">
                <h2 className="font-serif font-bold text-xl">Latest News</h2>
              </div>
              <div className="flex flex-col gap-6">
                {sideStories.map(article => (
                  <NewsCard key={article.id} article={article} variant="compact" />
                ))}
                {/* Reuse some stories to fill space */}
                <NewsCard article={articles[1]} variant="compact" />
                <NewsCard article={articles[2]} variant="compact" />
              </div>

              <div className="mt-12 p-6 bg-gray-50 text-center rounded-sm border">
                <h3 className="font-serif font-bold text-lg mb-2">Daily Newsletter</h3>
                <p className="text-xs text-gray mb-4">Sign up for our daily brief to stay informed.</p>
                <button className="w-full bg-[var(--color-fg)] text-[var(--color-bg)] py-2 text-xs font-bold uppercase tracking-widest hover:opacity-90">
                  Subscribe
                </button>
              </div>
            </aside>
          </section>

          {/* Categories Section */}
          <section className="mb-16">
            <div className="border-t border-b border-black py-4 mb-8">
              <h2 className="font-serif font-black text-3xl text-center uppercase tracking-tight">Tech & Business</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {articles.filter(a => a.category === 'Tech' || a.category === 'Business').slice(0, 4).map(article => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
