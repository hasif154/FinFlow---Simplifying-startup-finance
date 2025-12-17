import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
              {/* Text-only logo in brand color */}
              <span className="font-bold text-2xl text-brand-600 tracking-tight">FinFlow</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Your bookkeeping on autopilot. Simplify your startup's finances with centralized metrics and certified experts.
            </p>
            <div className="flex gap-6">
              {['Twitter', 'LinkedIn', 'GitHub'].map((platform) => (
                <a key={platform} href="#" className="text-slate-500 font-medium hover:text-brand-600 transition-colors">
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "Product", links: ["Features", "Integrations", "Pricing", "Changelog"] },
            { title: "Company", links: ["About", "Careers", "Blog", "Contact"] },
            { title: "Resources", links: ["Community", "Help Center", "Status", "Terms"] },
          ].map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-slate-900 mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-500 hover:text-brand-600 text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-200 mt-12 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>© 2024 FinFlow Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};