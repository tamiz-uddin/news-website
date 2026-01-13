export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  category: "Politics" | "Business" | "Tech" | "World" | "Opinion";
  imageUrl: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Senate Passess Landmark Infrastructure Bill After Marathon Session",
    summary: "The $1.2 trillion package aims to rebuild roads, bridges, and broadband networks across the nation.",
    content: "WASHINGTON — The Senate on Tuesday passed a $1.2 trillion bipartisan infrastructure package, a major victory for President Biden's economic agenda. The bill, which passed 69-30, includes funding for roads, bridges, rail, transit, water, and broadband. 'This is a historic investment in our nation's future,' the Majority Leader stated...",
    author: "Sarah Jenkins",
    date: "Oct 24, 2025",
    category: "Politics",
    imageUrl: "https://images.unsplash.com/photo-1541872703-74c59636a226?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "2",
    title: "Tech Giants Announce Unified AI Safety Standards",
    summary: "Leading technology companies have agreed on a new framework to ensure responsible AI development.",
    content: "SAN FRANCISCO — In a rare show of unity, major tech companies including Google, Microsoft, and OpenAI announced a joint commitment to AI safety standards. The new protocols, dubbed the 'San Francisco Accord', establish guidelines for model testing, bias mitigation, and transparency...",
    author: "David Chen",
    date: "Oct 24, 2025",
    category: "Tech",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "3",
    title: "Market Rally Continues as Inflation Data Shows Cooling",
    summary: "Wall Street sees another day of gains as the Consumer Price Index comes in lower than expected.",
    content: "NEW YORK — Stocks surged on Monday after the latest inflation report showed consumer prices rose less than expected in September. The S&P 500 gained 1.2%, while the Nasdaq Composite rose 1.5%. Analysts say this could signal the Federal Reserve may pause interest rate hikes...",
    author: "Amanda Williams",
    date: "Oct 23, 2025",
    category: "Business",
    imageUrl: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "4",
    title: "Global Climate Summit Reaches Consensus on Carbon Pricing",
    summary: "Delegates from 190 nations agree to a global floor for carbon pricing mechanisms.",
    content: "GENEVA — After weeks of intense negotiations, the Global Climate Summit concluded with a breakthrough agreement on carbon pricing. The deal establishes a minimum price per ton of carbon emissions, aiming to accelerate the transition to renewable energy...",
    author: "Robert O'Malley",
    date: "Oct 22, 2025",
    category: "World",
    imageUrl: "https://images.unsplash.com/photo-1569163139599-0f4517e36b31?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "5",
    title: "The Future of Remote Work: Hybrid Models Here to Stay",
    summary: "New study suggests 70% of companies plan to maintain flexible working arrangements indefinitely.",
    content: "Three years after the pandemic shifted the global workforce, a new comprehensive study by the Work Future Institute confirms that hybrid work models are now the standard. The report analyzes data from 500 Fortune 500 companies...",
    author: "Jessica Lee",
    date: "Oct 21, 2025",
    category: "Business",
    imageUrl: "https://images.unsplash.com/photo-1593642632823-8f78536788c6?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "6",
    title: "Quantum Computing Breakthrough: Error Correction Solved?",
    summary: "Researchers claim to have found a scalable method for correcting errors in quantum bits.",
    content: "A team of physicists at MIT has published a paper detailing a novel approach to quantum error correction. If verified, this discovery could overcome one of the biggest hurdles to building practical, large-scale quantum computers...",
    author: "Dr. Alan Turing II",
    date: "Oct 20, 2025",
    category: "Tech",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=2000",
  }
];
