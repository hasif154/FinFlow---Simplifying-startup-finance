import React from 'react';
import { Hero } from '../components/sections/Hero';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <section className="py-20 border-t border-slate-100 bg-white/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-10">Trusted by modern finance teams</p>
           <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {['Acme Corp', 'GlobalBank', 'Nebula', 'Velocity', 'Trio'].map((logo) => (
               <div key={logo} className="text-2xl font-bold font-sans text-slate-800 flex items-center gap-2">
                 <div className="w-6 h-6 bg-slate-800 rounded-full" /> {logo}
               </div>
             ))}
           </div>
        </div>
      </section>
    </>
  );
};