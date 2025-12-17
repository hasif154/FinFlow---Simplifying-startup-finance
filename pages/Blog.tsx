import React from 'react';
import { Card } from '../components/ui/Card';
import { BlogPost } from '../types';
import { Link } from 'react-router-dom';

const MOCK_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'How to Automate Your Startup Finances in 2024',
    excerpt: 'Manual bookkeeping is dead. Discover the new wave of financial automation tools that can save you 20+ hours a month.',
    author: 'Sarah Chen',
    date: 'Oct 12, 2024',
    readTime: '5 min read',
    category: 'Guides'
  },
  {
    id: '2',
    title: 'Understanding R&D Tax Credits',
    excerpt: 'Did you know your startup could be eligible for up to $250k in tax credits? Here is what you need to know about Form 6765.',
    author: 'Mike Ross',
    date: 'Oct 08, 2024',
    readTime: '8 min read',
    category: 'Tax'
  },
  {
    id: '3',
    title: 'The Founder’s Guide to Burn Rate',
    excerpt: 'Calculating burn rate correctly is crucial for survival. We break down the formula and how to extend your runway.',
    author: 'Jessica Pearson',
    date: 'Sep 28, 2024',
    readTime: '6 min read',
    category: 'Strategy'
  },
  {
    id: '4',
    title: 'Series A Preparation Checklist',
    excerpt: 'Getting your financials in order before meeting VCs. A comprehensive checklist for a smooth due diligence process.',
    author: 'Harvey Specter',
    date: 'Sep 15, 2024',
    readTime: '10 min read',
    category: 'Fundraising'
  }
];

export const Blog: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Resources & Insights</h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Expert advice on startup finance, tax strategy, and growth. Written by our team of CPAs and financial experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_POSTS.map((post, idx) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <Card hoverEffect className="h-full p-0 flex flex-col group cursor-pointer" delay={idx * 0.1}>
                <div className="aspect-video bg-slate-100 relative overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/${post.id}/800/600`} 
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-brand-600 uppercase tracking-wide">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors tracking-tight leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/${post.author}/100`} alt={post.author} />
                    </div>
                    <span className="text-sm font-medium text-slate-900">{post.author}</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};