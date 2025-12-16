import React from 'react';
import { Card } from '../components/ui/Card';
import { Review } from '../types';

const REVIEWS: Review[] = [
  { id: '1', author: 'Alex Cohen', role: 'CEO', company: 'TechStart', rating: 5, text: 'FinFlow completely changed how we handle our books. I used to dread month-end; now it takes 5 minutes.', avatar: 'alex' },
  { id: '2', author: 'Lisa Wang', role: 'Founder', company: 'Bloom', rating: 5, text: 'The best investment we made this year. The tax credits they found us paid for the service 10x over.', avatar: 'lisa' },
  { id: '3', author: 'James Miller', role: 'CFO', company: 'Nexus', rating: 4, text: 'Incredible support team. They actually understand SaaS metrics and helped us prepare for our Series B.', avatar: 'james' },
  { id: '4', author: 'Sarah Jenkins', role: 'Founder', company: 'Loop', rating: 5, text: 'I sleep better at night knowing my finances are compliant. The dashboard is beautiful and easy to understand.', avatar: 'sarah' },
  { id: '5', author: 'David Chen', role: 'CTO', company: 'Grid', rating: 5, text: 'Finally, a finance tool that feels like a modern tech product. API integrations work flawlessly.', avatar: 'david' },
  { id: '6', author: 'Emily Davis', role: 'Operations', company: 'Swift', rating: 5, text: 'We switched from a traditional CPA firm and haven\'t looked back. Faster, cheaper, and better insights.', avatar: 'emily' },
];

export const Reviews: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Loved by fast-growing teams</h1>
          <p className="text-lg text-slate-600">
            Join thousands of founders who trust FinFlow with their financial operations.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {REVIEWS.map((review, idx) => (
            <Card key={review.id} className="p-8 break-inside-avoid" hoverEffect delay={idx * 0.1}>
              <div className="flex gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                   <span key={i} className={i < review.rating ? "text-amber-400" : "text-slate-200"}>★</span>
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                   <img src={`https://picsum.photos/seed/${review.avatar}/100`} alt={review.author} />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{review.author}</div>
                  <div className="text-xs text-slate-500">{review.role} @ {review.company}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};