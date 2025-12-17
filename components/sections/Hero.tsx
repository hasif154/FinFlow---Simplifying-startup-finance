import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Bookkeeping", "Taxes", "Tax Credits"];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-36 pb-24 overflow-hidden bg-[#Fdfdfd]">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-brand-50/50 via-white/80 to-white pointer-events-none" />
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-8 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#F26522] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm font-sans">Y</span>
              </div>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  >
                    <Star size={12} className="fill-amber-400 text-amber-400 drop-shadow-[0_0_2px_rgba(251,191,36,0.8)]" />
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="w-px h-5 bg-slate-200" />

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#DA552F] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm font-sans">P</span>
              </div>
              <div className="flex gap-1">
                 {[1,2,3,4,5].map(i => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  >
                    <Star size={12} className="fill-amber-400 text-amber-400 drop-shadow-[0_0_2px_rgba(251,191,36,0.8)]" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Your 
            <span className="inline-block relative min-w-[360px] text-left ml-3 align-top h-[1.2em]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[wordIndex]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute left-0 text-brand-600 block whitespace-nowrap"
                >
                  {words[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            <span className="text-slate-900">On Autopilot</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
            Simplify your startup's finances with FinFlow: centralized metrics, reliable bookkeeping, and optimal IRS filings & refunds all backed by certified experts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-5 py-4 rounded-xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 text-slate-900 placeholder:text-slate-400 text-base"
            />
            <Button size="lg" className="whitespace-nowrap font-semibold h-full">
              Get Started
            </Button>
          </div>

          <div className="flex flex-col gap-6">
             <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
               <CheckCircle2 size={18} className="text-green-600 fill-green-50" />
               <span>Trusted by top YC startups</span>
             </div>
             
             {/* Trusted Companies */}
             <div className="flex items-center -space-x-4 pl-2 py-2">
               {[
                 { name: 'Stripe', color: 'text-indigo-600' },
                 { name: 'Airbnb', color: 'text-rose-500' },
                 { name: 'Coinbase', color: 'text-blue-600' },
                 { name: 'Dropbox', color: 'text-blue-500' },
                 { name: 'Brex', color: 'text-black' }
               ].map((company, index) => (
                 <div 
                   key={company.name} 
                   className="relative w-20 h-14 bg-white rounded-xl shadow-md border border-slate-100 flex items-center justify-center transform hover:-translate-y-2 transition-transform duration-300 z-0 hover:z-10 group"
                   style={{ zIndex: 5 - index }}
                 >
                   <span className={`text-[10px] font-bold ${company.color} group-hover:scale-105 transition-transform`}>{company.name}</span>
                 </div>
               ))}
               <div className="pl-6 text-sm font-medium text-slate-400">
                 + 100 more
               </div>
             </div>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Main Dashboard Card */}
          <motion.div
             initial={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
             animate={{ boxShadow: ["0 20px 50px -12px rgba(0,0,0,0.1)", "0 25px 60px -12px rgba(0,0,0,0.15)", "0 20px 50px -12px rgba(0,0,0,0.1)"] }}
             transition={{ duration: 4, repeat: Infinity }}
             className="relative z-10"
          >
            <Card className="p-6 md:p-8 aspect-[4/3] flex flex-col justify-between bg-white/90 backdrop-blur-xl border-white/60">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Total Revenue</h3>
                    <div className="text-4xl font-bold text-slate-900 tracking-tight">$133,549.00</div>
                  </div>
                  <div className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-bold">
                    +12.5%
                  </div>
                </div>
                {/* Removed Tax Credits section to undo changes */}
              </div>

              {/* Restored Bar Chart */}
              <div className="flex-1 w-full flex items-end justify-between gap-2 mt-6 mb-2 px-1">
                {[35, 60, 45, 70, 50, 80, 65, 85].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: `${height}%`, opacity: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className={`w-full rounded-t-sm ${
                      i === 7 ? 'bg-brand-500' : 'bg-slate-200 hover:bg-brand-200 transition-colors'
                    }`}
                  />
                ))}
              </div>

              <div className="flex justify-between items-center text-sm text-slate-400 border-t border-slate-100 pt-4 font-medium">
                <span>View Report</span>
                <ArrowRight size={16} />
              </div>
            </Card>
          </motion.div>

          {/* Floating Review Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="absolute -right-8 bottom-12 hidden md:block z-20"
          >
             <div className="bg-white p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 max-w-[240px]">
               <div className="flex items-start gap-3">
                 <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs shrink-0">H</div>
                 <div>
                   <div className="flex gap-0.5 mb-1">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} size={8} className="fill-amber-400 text-amber-400" />
                      ))}
                   </div>
                   <p className="text-[11px] leading-relaxed text-slate-600 font-medium">
                     "Highly recommend FinFlow for early startup founders"
                   </p>
                 </div>
               </div>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};