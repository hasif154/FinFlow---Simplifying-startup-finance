import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const BlogPostDetail: React.FC = () => {
  const { id } = useParams();

  // In a real app, fetch MDX content based on ID
  // Here we render static React content styled like MDX
  return (
    <article className="pt-32 pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <Link to="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-600 mb-8 transition-colors">
          <ArrowLeft size={16} />
          Back to Resources
        </Link>

        <header className="mb-12">
          <div className="inline-block px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-medium mb-4">
            Guides
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            How to Automate Your Startup Finances in 2024
          </h1>
          <div className="flex items-center gap-4">
            <img src={`https://picsum.photos/seed/Sarah/100`} alt="Author" className="w-12 h-12 rounded-full ring-4 ring-white" />
            <div>
              <div className="font-semibold text-slate-900">Sarah Chen</div>
              <div className="text-sm text-slate-500">Head of Product • Oct 12, 2024</div>
            </div>
          </div>
        </header>

        {/* Prose Content (Simulated MDX) */}
        <div className="prose prose-lg prose-slate prose-headings:font-bold prose-headings:tracking-tight prose-a:text-brand-600 hover:prose-a:text-brand-700 prose-img:rounded-2xl prose-img:shadow-lg">
          <p className="lead">
            The era of shoebox receipts and manual Excel spreadsheets is over. Modern startups need speed, accuracy, and scalability. Here is how you can put your finance stack on autopilot.
          </p>
          
          <h2>The Hidden Cost of Manual Bookkeeping</h2>
          <p>
            Founders often start by doing their own books to save money. However, the opportunity cost is massive. Every hour spent categorizing transactions in QuickBooks is an hour not spent on product or sales.
          </p>
          <ul>
            <li>Time drain: Average 10-15 hours/month</li>
            <li>Error prone: Manual entry leads to tax penalties</li>
            <li>Lack of insight: Retroactive data doesn't help real-time decisions</li>
          </ul>

          <div className="my-8 p-6 bg-blue-50 border border-blue-100 rounded-xl not-prose">
            <h4 className="font-bold text-blue-900 mb-2">Pro Tip</h4>
            <p className="text-blue-800 text-sm">
              Automating your expense categorization can reduce your monthly close time by up to 80%.
            </p>
          </div>

          <h2>Step 1: Centralize Your Stack</h2>
          <p>
            Before you automate, you must integrate. Ensure your bank (Mercury, Brex), payroll (Gusto, Rippling), and expense cards (Ramp) all feed into a single source of truth.
          </p>
          
          <img src="https://picsum.photos/seed/finance/800/400" alt="Dashboard integration" />

          <h2>Step 2: Implement AI Categorization</h2>
          <p>
            Modern tools like FinFlow use machine learning to predict categories based on vendor and history. This gets smarter over time, requiring less human intervention.
          </p>

          <h3>Conclusion</h3>
          <p>
            Automation isn't just about saving time; it's about financial clarity. When you trust your numbers, you can make bolder bets on your business.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Ready to automate your finances?</h3>
              <p className="text-slate-300 mb-8 max-w-md mx-auto">Join 1,000+ startups saving time and money with FinFlow.</p>
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 hover:shadow-white/20">
                Get Started for Free
              </Button>
            </div>
            {/* Decorative bg */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full blur-[100px] opacity-30" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full blur-[100px] opacity-30" />
          </div>
        </div>
      </div>
    </article>
  );
};