import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: 299,
      description: "Perfect for pre-revenue startups.",
      features: ["Cash accounting", "Monthly financial statements", "Dedicated bookkeeper", "Tax ready financials"],
      recommended: false
    },
    {
      name: "Growth",
      price: 599,
      description: "For scaling teams with revenue.",
      features: ["Accrual accounting", "Burn rate analysis", "Payroll reconciliation", "R&D tax credit support", "Quarterly strategy calls"],
      recommended: true
    },
    {
      name: "Scale",
      price: 999,
      description: "Full CFO suite for mature companies.",
      features: ["Custom financial modeling", "Board meeting prep", "Audit support", "Dedicated CFO", "Daily transaction coding", "Priority support"],
      recommended: false
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Simple, transparent pricing</h1>
          <p className="text-lg text-slate-600 mb-8">
            No hidden fees. No hourly billing. Just a flat monthly rate that grows with your startup.
          </p>
          
          {/* Toggle */}
          <div className="inline-flex items-center bg-slate-100 p-1 rounded-full relative">
            <button 
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!isAnnual ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${isAnnual ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
            >
              Annually <span className="text-[10px] font-bold text-green-600 bg-green-100 px-1.5 py-0.5 rounded-full">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, idx) => (
            <Card 
              key={plan.name} 
              className={`p-8 relative ${plan.recommended ? 'border-brand-200 ring-4 ring-brand-500/10' : ''}`}
              delay={idx * 0.1}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg shadow-brand-500/30">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm h-10">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">${isAnnual ? Math.floor(plan.price * 0.8) : plan.price}</span>
                  <span className="text-slate-500">/mo</span>
                </div>
                {isAnnual && <div className="text-sm text-green-600 mt-1 font-medium">Billed annually</div>}
              </div>

              <Button 
                variant={plan.recommended ? 'primary' : 'secondary'} 
                className="w-full mb-8"
              >
                Get Started
              </Button>

              <div className="space-y-4">
                <div className="text-xs font-semibold text-slate-900 uppercase tracking-wider">What's included</div>
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check size={18} className="text-brand-500 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-500 mb-4">Need a custom enterprise plan?</p>
          <a href="#" className="text-brand-600 font-semibold hover:underline">Contact Sales →</a>
        </div>
      </div>
    </div>
  );
};