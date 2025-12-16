import React from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-100/50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-indigo-100/50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white border border-brand-100 rounded-full px-4 py-1.5 mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-brand-500"></span>
            <span className="text-sm font-medium text-slate-600">YC Deals Available</span>
            <span className="text-slate-300 mx-1">|</span>
            <div className="flex text-amber-400 text-xs">★★★★★</div>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Your Bookkeeping on <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">Autopilot</span>
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
            Simplify your startup's finances with FinFlow: centralized metrics, reliable bookkeeping, and optimal IRS filings & refunds all backed by certified experts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-5 py-3.5 rounded-xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 text-slate-900 placeholder:text-slate-400"
            />
            <Button size="lg" className="whitespace-nowrap">
              Get Started
            </Button>
          </div>

          <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
             <div className="flex -space-x-2">
               {[1,2,3].map(i => (
                 <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs overflow-hidden">
                   <img src={`https://picsum.photos/seed/${i}/100`} alt="User" className="w-full h-full object-cover" />
                 </div>
               ))}
               <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs text-slate-600">1k+</div>
             </div>
             <div className="flex items-center gap-1">
               <CheckCircle2 size={16} className="text-brand-500" />
               <span>Trusted by 1,000+ startups</span>
             </div>
          </div>
        </motion.div>

        {/* Right Lottie / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Main Dashboard Card */}
          <Card className="p-6 md:p-8 aspect-[4/3] flex flex-col justify-between">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Total Revenue</h3>
                <div className="text-4xl font-bold text-slate-900">$133,549.00</div>
              </div>
              <div className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                +12.5%
              </div>
            </div>

            {/* Simulated Chart */}
            <div className="flex-1 w-full flex items-end gap-2 px-2 pb-4">
               {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                 <motion.div 
                   key={i}
                   initial={{ height: 0 }}
                   animate={{ height: `${h}%` }}
                   transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                   className="flex-1 bg-gradient-to-t from-brand-100 to-brand-500 rounded-t-lg opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                 />
               ))}
            </div>

            <div className="flex justify-between items-center text-sm text-slate-400 border-t border-slate-100 pt-4">
              <span>View Report</span>
              <ArrowRight size={16} />
            </div>
          </Card>

          {/* Floating Cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-12 bottom-12 hidden md:block"
          >
            <Card className="p-4 w-48 shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Tax Savings</div>
                  <div className="font-bold text-slate-900">$12,400</div>
                </div>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-3/4 rounded-full" />
              </div>
            </Card>
          </motion.div>

           <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-8 top-12 hidden md:block"
          >
            <Card className="p-4 w-40 shadow-2xl">
              <div className="text-xs text-slate-500 mb-2">New Message</div>
              <div className="flex items-center gap-2">
                <img src="https://picsum.photos/seed/expert/100" className="w-8 h-8 rounded-full" />
                <div className="text-xs font-medium text-slate-900">
                  Jake, CPA<br/>
                  <span className="text-slate-400 font-normal">Just now</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};