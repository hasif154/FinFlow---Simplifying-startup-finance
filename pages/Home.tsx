import React, { useEffect, useState } from 'react';
import { Hero } from '../components/sections/Hero';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { X } from 'lucide-react';

const LOGOS = [
  { name: 'Stripe', color: 'text-indigo-600' },
  { name: 'Airbnb', color: 'text-rose-500' },
  { name: 'Coinbase', color: 'text-blue-600' },
  { name: 'DoorDash', color: 'text-orange-600' },
  { name: 'Dropbox', color: 'text-blue-700' },
  { name: 'Instacart', color: 'text-amber-600' },
  { name: 'Reddit', color: 'text-orange-600' },
  { name: 'Twitch', color: 'text-purple-600' },
  { name: 'Zapier', color: 'text-orange-500' },
  { name: 'OpenAI', color: 'text-slate-900' },
  { name: 'Brex', color: 'text-slate-900' },
  { name: 'Faire', color: 'text-slate-900' },
  { name: 'Deel', color: 'text-blue-900' },
  { name: 'Gusto', color: 'text-red-600' },
  { name: 'Rippling', color: 'text-amber-500' },
  { name: 'Scale', color: 'text-slate-900' },
  { name: 'Webflow', color: 'text-blue-600' },
  { name: 'Retool', color: 'text-slate-800' },
  { name: 'Substack', color: 'text-orange-500' },
  { name: 'Whatnot', color: 'text-yellow-600' }
];

const Counter = ({ from, to }: { from: number; to: number }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const springValue = useSpring(from, { mass: 0.1, stiffness: 100, damping: 20, duration: 2000 });
  const displayValue = useTransform(springValue, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    if (isInView) {
      springValue.set(to);
    }
  }, [isInView, from, to, springValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      
      {/* Saving Startups Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Saving Startups Real Money
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Get up to $500,000 in startup tax credits. The average FinFlow customer gets back $21,000 each year. 
              You do not need to have revenue in order to claim these <span className="text-brand-600 font-medium cursor-pointer underline decoration-brand-200 underline-offset-4">tax credits</span>.
            </p>
          </div>

          <div className="relative rounded-[2.5rem] bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 p-12 md:p-24 overflow-hidden">
             <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
               {/* Counter Side */}
               <div className="text-center md:text-left">
                 <div className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter mb-4">
                   $<motion.span><Counter from={0} to={16120999} /></motion.span>
                 </div>
                 <div className="text-xl md:text-2xl text-slate-700">
                   in <span className="font-bold text-indigo-900">Tax Credits</span> claimed by <span className="font-bold text-indigo-900">FinFlow Customers</span>
                 </div>
               </div>

               {/* Testimonial Card */}
               <div className="relative w-full max-w-md">
                 <div className="bg-white rounded-3xl p-8 shadow-xl shadow-purple-500/5 relative">
                   <div className="flex items-center gap-3 mb-4">
                     <img src="https://picsum.photos/seed/chris/100" className="w-12 h-12 rounded-full border-2 border-slate-100" alt="User" />
                     <div>
                       <div className="flex items-center gap-1">
                         <span className="font-bold text-slate-900">Chris Bakke</span>
                         <span className="text-blue-500">
                           <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                         </span>
                       </div>
                       <div className="text-sm text-slate-500">@ChrisJBakke</div>
                     </div>
                   </div>
                   <p className="text-slate-800 text-lg font-medium leading-relaxed mb-4">
                     FinFlow helped us get $150,000+ in tax credits before Laskie was acquired by Elon Musk.
                     Thank you <span className="text-brand-600">@tryfinflow</span>!
                   </p>
                 </div>

                 {/* Hover Chat Bubble Animation */}
                 <motion.div 
                   initial={{ opacity: 0, y: 20, scale: 0.9 }}
                   whileInView={{ opacity: 1, y: 0, scale: 1 }}
                   transition={{ delay: 1, duration: 0.5, type: "spring" }}
                   viewport={{ once: true }}
                   className="absolute -bottom-16 -right-4 md:-right-12 bg-white rounded-2xl rounded-tr-sm p-5 shadow-2xl border border-blue-100 max-w-xs z-20"
                 >
                   <div className="relative">
                     <button className="absolute -top-2 -right-2 text-slate-400 hover:text-slate-600"><X size={14}/></button>
                     <div className="flex gap-3">
                       <img src="https://picsum.photos/seed/support/100" className="w-10 h-10 rounded-full" alt="Agent" />
                       <div className="text-sm text-slate-600 leading-snug">
                         Hi there, welcome to FinFlow! If you have any questions about Tax Deadlines, Bookkeeping, or anything else, let me know :)
                       </div>
                     </div>
                   </div>
                 </motion.div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-16 border-t border-slate-100 bg-white/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-10">
           <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
             Trusted by the world's fastest growing teams
           </p>
        </div>
        
        <div className="relative flex overflow-x-hidden group">
           {/* Fade edges */}
           <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
           <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

           {/* Scrolling Track */}
           <motion.div 
             className="flex gap-16 whitespace-nowrap"
             animate={{ x: [0, -1000] }}
             transition={{ 
               repeat: Infinity, 
               ease: "linear", 
               duration: 30 
             }}
           >
             {[...LOGOS, ...LOGOS, ...LOGOS].map((company, i) => (
               <div key={`${company.name}-${i}`} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                 <span className={`text-2xl font-bold font-sans ${company.color} tracking-tight`}>{company.name}</span>
               </div>
             ))}
           </motion.div>
        </div>
      </section>
    </>
  );
};